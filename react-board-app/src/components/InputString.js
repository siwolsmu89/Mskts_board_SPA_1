import React, {Component} from 'react';
import axios from 'axios';

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
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        axios.get('/insert?text=' + this.state.value)
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