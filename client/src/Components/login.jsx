import React, {Component} from 'react';
import {login} from './UserFunctions';
import {BrowserRouter, Link} from 'react-router-dom';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
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
            username: this.state.username,
            password: this.state.password
        }

        login(user).then(res => {
            if(res){
                this.props.history.push(`/profile`)
            }
        })
    }

    render(){
        return(
            <div className="bglog" style={{paddingTop: "150px"}}>
                <div className="col-md-4">

                </div>
                <div className="loginbox col-md-4">
                    <h2 className="loginHeader">Sign In</h2>
                    <form onSubmit={this.onSubmit}>
                        <input className="inputbox form-control" type="name" name="username" placeholder="Enter Username" value={this.state.username} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChange} required/><br/>
                        <button className="loginbutton btn btn-dark" type="submit">Sign In</button><br/>
                        <a className="loginA" href="#">Forgot password?</a><br/>
                        <a className="loginA" href="#">Create an account</a>
                    </form>
                </div>

            </div>
        )
    }
}

export default Login