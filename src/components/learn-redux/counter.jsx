import React, {Component} from "react";
import PropTypes from "prop-types";
import store from "../../redux/store";
import * as Actions from "../../redux/actions";

class ClickCounter extends Component {
    constructor(props) {
      super(props);
      this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
      this.onClickDecrementButton = this.onClickDecrementButton.bind(this);
      this.onChange = this.onChange.bind(this);
      this.state = this.getOwnState();
    }
    getOwnState() {
      return {
        value: store.getState()[this.props.caption],
      };
    }
    onClickIncrementButton() {
      store.dispatch(Actions.increment(this.props.caption));
    }
    onClickDecrementButton() {
      store.dispatch(Actions.decrement(this.props.caption));
    }
    onChange() {
      this.setState(this.getOwnState());
    }

    componentDidMount() {
      store.subscribe(this.onChange);
    }

    componentWillUnmount() {
      store.unsubscribe(this.onChange);
    }

    render(){
      let { caption } = this.props;
      return (
        <div>
          <button onClick={this.onClickIncrementButton}>+</button>
          <button onClick={this.onClickDecrementButton}>-</button>
          <span>
            {caption} Click count: {this.state.value}
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
