import React, {Component} from 'react';

require('./HelloWorld.css');

export default class HelloWorld extends Component {
    
    state = {
        message:""
    }

    hello = () => {
        fetch('/home')
        .then(response => response.text())
        .then(text => this.setState({message: text}));
    }

    render() {
        return (
            <div className="hello-world-wrapper">
                <h1 className="hello-world-title">Hello, World!</h1>
                <p className="hello-world-text">Lorem Ipsum</p>
                <p>{this.state.message}</p>
                <button onClick={this.hello}>Hi</button>
            </div>
        );
    }
}