import React, {Component} from 'react';
import {register} from './UserFunctions';
import {BrowserRouter, Link} from 'react-router-dom';

class Register extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            password: '',
            email: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email
        }
        register(user).then(res => {
                this.props.history.push(`/login`)
        })
    }

    render(){
        return(
            <div className="bglog" style={{paddingTop: "150px"}}>
                <div className="regbox col-md-4">
                    <h2 className="loginHeader">Register</h2>
                    <form onSubmit={this.onSubmit}>
                        <input className="inputbox form-control" type="name" name="firstname" placeholder="first name" value={this.state.firstname} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="name" name="lastname" placeholder="last name" value={this.state.lastname} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="name" name="username" placeholder="username" value={this.state.username} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="email" name="email" placeholder="email address" value={this.state.email} onChange={this.onChange} required/><br/>
                        <button className="loginbutton btn btn-dark" type="submit">Register</button><br/>
                        <a className="loginA" href="#">Have an account? Log in</a><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register