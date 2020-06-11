import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: ''
        }
    }

    componentDidMount(){
        const token = localStorage.userToken
        const decoded = jwt_decode(token)
        this.setState({
            firstname: decoded.firstname,
            lastname: decoded.lastname,
            username: decoded.username,
            email: decoded.email
        })
    }

    render(){
        return(
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">Profile</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First name</td>
                                <td>{this.state.firstname}</td>
                            </tr>
                            <tr>
                                <td>Last name</td>
                                <td>{this.state.lastname}</td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>{this.state.username}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Profile