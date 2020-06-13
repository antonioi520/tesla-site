import React, {Component} from 'react';
import {addListing} from './ListingFunctions';

class AddListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            model: '',
            year: '',
            color: '',
            summary: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
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

        addListing(listing).then(res => {
            this.props.history.push(`/Listings`)
        })

    }

    render(){
        return(
            <div className="bglog" style={{paddingTop: "150px"}}>
                <div className="regbox col-md-4">
                    <h2 className="loginHeader">Add Listing</h2>
                    <form onSubmit={this.onSubmit}>
                        <input className="inputbox form-control" type="name" name="first_name" placeholder="first name" value={this.state.first_name} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="name" name="last_name" placeholder="last name" value={this.state.last_name} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="name" name="email" placeholder="email" value={this.state.email} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="name" name="model" placeholder="model" value={this.state.model} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="name" name="year" placeholder="year" value={this.state.year} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="name" name="color" placeholder="color" value={this.state.color} onChange={this.onChange} required/><br/>
                        <input className="inputbox form-control" type="text" name="summary" placeholder="summary" value={this.state.summary} onChange={this.onChange} required/><br/>
                        <button className="loginbutton btn btn-dark" type="submit">Add Listing</button><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddListing