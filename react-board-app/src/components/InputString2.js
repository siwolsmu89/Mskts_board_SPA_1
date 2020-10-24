import React, {Component} from 'react';

export default class InputString extends Component {
    state = {
        value:"",
        message:""
    }

    constructor(props) {
        super(props);
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            name: this.state.value
        }

        fetch('/insert',{
            method: 'post',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(text => this.setState({message: text}));
    }

    
    render() {
        return (
            <div className="input-string-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <label>Input String Tester</label>
                    <input type="text"  value={this.state.value} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                <p>{this.state.message}</p>
            </div>
        );
    }

}