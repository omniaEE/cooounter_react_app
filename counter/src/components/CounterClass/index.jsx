import { Component } from "react";
import style from "./style.module.css";

class CounterClass extends Component {
    constructor (props){
        super(props);
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };


    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };
    render() {
        return (
            <div className={style.CounterFun}>
                <h2>Counter class</h2>
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}
export default CounterClass;