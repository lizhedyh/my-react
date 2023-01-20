import React, {Component} from "react";
import { ClickCounter } from "./counter";

class CounterPanel extends Component {
    constructor(props) {
      super(props);
      this.onUpdate = this.onUpdate.bind(this);
      this.initialValue = [0, 10, 20];
      const initSum = this.initialValue.reduce((a, b) => a + b);
      this.state = {
        sumValue: initSum,
      }
    }

    onUpdate(oldValue, newValue) {
      let valueChange = newValue - oldValue;

      this.setState({
        sumValue: this.state.sumValue + valueChange,
      })
    }

    render(){
      return (
        <div>
          <ClickCounter caption="First" initialValue={0} onUpdate={this.onUpdate}></ClickCounter>
          <ClickCounter caption="Second" initialValue={10} onUpdate={this.onUpdate}></ClickCounter>
          <ClickCounter caption="Third" initialValue={20} onUpdate={this.onUpdate}></ClickCounter>
          <div>
            <div>Total: {this.state.sumValue}</div>
          </div>
        </div>
      )
    }
}

export { CounterPanel };
