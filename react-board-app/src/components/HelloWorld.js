import React, {Component} from 'react';
import InputString2 from './InputString2';

require('./HelloWorld.css');

export default class HelloWorld extends Component {
    
    state = {
        message:""
    }

    hello = () => {
        fetch('/date')
        .then(response => response.text())
        .then(text => this.setState({message: text}));
    }

    render() {
        return (
            <div className="hello-world-wrapper">
                <h1 className="hello-world-title">Hello, World!</h1>
                <p className="hello-world-text">Lorem Ipsum</p>
                <button onClick={this.hello}>Good Day</button>
                <p>{this.state.message}</p>
                <hr/>
                <InputString2/>
            </div>
        );
    }
}