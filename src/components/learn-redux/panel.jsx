import React, {Component} from "react";
import { ClickCounter } from "./counter";
import store from "../../redux/store";

class CounterPanel extends Component {
    constructor(props) {
      super(props);
      this.onChange = this.onChange.bind(this);
      this.state = this.getOwnState();
    }

    getOwnState() {
      const state = store.getState();
      let sum = 0;

      for (let key in state) {

        if (state.hasOwnProperty(key)) {
          sum = sum + state[key];
        }
      }
      
      return { sum };
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
      return (
        <div>
          <ClickCounter caption="First"></ClickCounter>
          <ClickCounter caption="Second"></ClickCounter>
          <ClickCounter caption="Third"></ClickCounter>
          <div>
            <div>Total: {this.state.sum}</div>
          </div>
        </div>
      )
    }
}

export { CounterPanel };
