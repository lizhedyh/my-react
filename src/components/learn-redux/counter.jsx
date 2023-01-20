import React, {Component} from "react";
import PropTypes from 'prop-types';

class ClickCounter extends Component {
    constructor(props) {
      super(props);
      this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
      this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
      this.state = {
        count: props.initialValue,
      }
    }

    onClickIncrementButton() {
      this.updateCount(true);
    }
    onClickDecrementButton() {
      this.updateCount(false);
    }

    updateCount(isIncrement) {
      let oldValue = this.state.count;
      let newValue = isIncrement ? oldValue + 1 : oldValue - 1;
      
      this.setState({
        count: newValue,
      });
      this.props.onUpdate(oldValue, newValue);
    }

    shouldComponentUpdate(nextProps, nextStatus) {
      return nextProps.caption !== this.props.caption ||
      nextStatus.count !== this.state.count;
    }

    render(){
      let { caption } = this.props;
      return (
        <div>
          <button onClick={this.onClickIncrementButton}>+</button>
          <button onClick={this.onClickDecrementButton}>-</button>
          <span>
            {caption} Click count: {this.state.count}
          </span>
        </div>
      )
    }
}

ClickCounter.propTypes = {
  caption: PropTypes.string.isRequired,
  initialValue: PropTypes.number,
  onUpdate: PropTypes.func,
}

ClickCounter.defaultProps = {
  initialValue: 10,
  onUpdate: f => f,
}


export { ClickCounter };
