import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import {userListings} from "./ListingFunctions";

class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userListings: [],
            currentListing: null,
            currentIndex: -1,
            firstname: '',
            lastname: '',
            username: '',
            email: ''
        }
        this.retrieveListings = this.retrieveListings.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveListing = this.setActiveListing.bind(this);
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
        this.retrieveListings();
    }


    retrieveListings() {
        const token = localStorage.userToken
        const decoded = jwt_decode(token)
        const email = decoded.email;
        userListings(`${email}`)
            .then(response => {
                this.setState({
                    userListings: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveListings();
        this.setState({
            currentListing: null,
            currentIndex: -1
        });
    }

    setActiveListing(listing, index) {
        this.setState({
            currentListing: listing,
            currentIndex: index
        });
    }



    render(){
        const { userListings, currentIndex } = this.state;
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
                                <td>Email Address</td>
                                <td>{this.state.email}</td>
                            </tr>
                        </tbody>
                        <ul className="list-group">
                            {userListings &&
                            userListings.map((userListings, index) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (index === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveListing(userListings, index)}
                                    key={index}
                                >
                                    {userListings.model}
                                </li>
                            ))}
                        </ul>
                    </table>

                </div>
            </div>
        )
    }
}
export default Profile