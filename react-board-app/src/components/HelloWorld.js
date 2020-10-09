import React, {Component} from 'react';

require('./HelloWorld.css');

export default class HelloWorld extends Component {

    render() {
        return (
            <div className="hello-world-wrapper">
                <h1 className="hello-world-title">Hello, World!</h1>
                <p className="hello-world-text">Lorem Ipsum</p>
            </div>
        );
    }
}