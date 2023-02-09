import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { addTodo } from '../actions';

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.input = null;
    this.onSubmit = this.onSubmit.bind(this);
    this.refInput = node => {
      this.input = node;
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const { input } = this;

    if (!input.value.trim()) return;

    this.props.onAdd(input.value);
    input.value = '';
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" ref={this.refInput}></input>
          <button className="add-btn" type="submit">添加</button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  // onAdd: PropTypes.func.isRequired,
};

const mapDisptchToProps = (dispatch) => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text));
    }
  }
};

export default connect(null, mapDisptchToProps)(AddTodo);
