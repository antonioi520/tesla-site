import React, {Component} from 'react';
import jwt_decode from 'jwt-decode';
import {getListing, updateListing} from "./ListingFunctions";
import { Link } from "react-router-dom";

class UpdateListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userListing: [],
            first_name: '',
            last_name: '',
            email: '',
            model: '',
            year: '',
            color: '',
            summary: ''
        }
        this.retrieveListings = this.retrieveListings.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onChangeFirst = this.onChangeFirst.bind(this);
        this.onChangeLast = this.onChangeLast.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeModel = this.onChangeModel.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeColor = this.onChangeColor.bind(this);
        this.onChangeSummary = this.onChangeSummary.bind(this);

        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        const token = localStorage.userToken
        const decoded = jwt_decode(token)
        this.setState({})
        this.retrieveListings();
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        const {currentListing} = this.props.location.state
        e.preventDefault()
        const listing = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            model: this.state.model,
            year: this.state.year,
            color: this.state.color,
            summary: this.state.summary
        }

        updateListing(currentListing, listing).then(res => {
            this.props.history.push(`/Profile`)
            console.log('updated')
            console.log(listing)
            console.log(currentListing)
            console.log(this.state.userListing.first_name)
            console.log(this.state.userListing.last_name)
        }).catch(e => {
            console.log(e);
        });

    }

    retrieveListings() {
        const token = localStorage.userToken
        const decoded = jwt_decode(token)
        const {currentListing} = this.props.location.state
        getListing(`${currentListing}`)
            .then(response => {
                this.setState({
                    userListing: response.data,

                });
                console.log(response.data);
            }).then(response => {
                this.setState({
                    first_name: this.state.userListing.first_name,
                    last_name: this.state.userListing.last_name,
                    email: this.state.userListing.email,
                    model: this.state.userListing.model,
                    year: this.state.userListing.year,
                    color: this.state.userListing.color,
                    summary: this.state.userListing.summary
                });
        })
            .catch(e => {
                console.log(e);
            });
    }

    onChangeFirst(e) {
        const first = e.target.value;

        this.setState(function(prevState) {
            return {
                userListing: {
                    ...prevState.currentListing,
                    first_name: first
                }
            };
        });
    }

    onChangeLast(e) {
        const last = e.target.value;

        this.setState(function(prevState) {
            return {
                userListing: {
                    ...prevState.currentListing,
                    last_name: last
                }
            };
        });
    }

    onChangeEmail(e) {
        const email = e.target.value;

        this.setState(function(prevState) {
            return {
                userListing: {
                    ...prevState.currentListing,
                    email: email
                }
            };
        });
    }

    onChangeModel(e) {
        const model = e.target.value;

        this.setState(function(prevState) {
            return {
                userListing: {
                    ...prevState.currentListing,
                    model: model
                }
            };
        });
    }

    onChangeYear(e) {
        const year = e.target.value;

        this.setState(function(prevState) {
            return {
                userListing: {
                    ...prevState.currentListing,
                    year: year
                }
            };
        });
    }

    onChangeColor(e) {
        const color = e.target.value;

        this.setState(function(prevState) {
            return {
                userListing: {
                    ...prevState.currentListing,
                    color: color
                }
            };
        });
    }

    onChangeSummary(e) {
        const summary = e.target.value;

        this.setState(function(prevState) {
            return {
                userListing: {
                    ...prevState.currentListing,
                    summary: summary
                }
            };
        });
    }

    render() {
        const {userListing} = this.state;
        return (
            <div className="bglog" style={{paddingTop: "150px"}}>
                <div className="regbox col-md-4">
                    <h2 className="loginHeader">Update Listing</h2>
                    <form onSubmit={this.onSubmit}>
                        <input className="inputbox form-control" type="name" name="first_name" value={this.state.first_name} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="name" name="last_name"  value={this.state.last_name} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="name" name="email" value={this.state.email} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="name" name="model" value={this.state.model} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="name" name="year" value={this.state.year} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="name" name="color"  value={this.state.color} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="text" name="summary" value={this.state.summary} onChange={this.onChange} required/><br/>
                        <button className="loginbutton btn btn-dark" type="submit">Update Listing</button><br/>
                    </form>
                </div>
            </div>
        )
    }
}



export default UpdateListing;
