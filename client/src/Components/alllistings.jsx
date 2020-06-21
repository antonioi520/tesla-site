import React, { Component } from "react";
import { Link } from "react-router-dom";
import {allListings} from "./ListingFunctions";
import NumberFormat from "react-number-format";


class AllListings extends Component{
    constructor(props) {
        super(props);
        //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveListings = this.retrieveListings.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveListing = this.setActiveListing.bind(this);
        //this.searchTitle = this.searchTitle.bind(this);

        this.state = {
            listings: [],
            currentListing: null,
            currentIndex: -1,
            //searchTitle: ""
        };
    }

    componentDidMount() {
        this.retrieveListings();
    }

    /*onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }*/

    retrieveListings() {
        allListings()
            .then(response => {
                this.setState({
                    listings: response.data
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
        const { listings, currentListing, currentIndex } = this.state;

        return(
            <div className="list row" style={{paddingTop: "100px"}}>
                <div className="col-md-8">
                    <div className="input-group mb-3">
                        {/*<input
                            type="text"
                            className="form-control"
                            placeholder="Search by title"
                            value={searchTitle}
                            onChange={this.onChangeSearchTitle}
                        />*/}
                        {/*<div className="input-group-append">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={this.searchTitle}
                            >
                                Search
                            </button>
                        </div>*/}
                    </div>
                </div>
                <div className="col-md-6" style={{margin:"auto", width:"50%"}}>
                    <h4>All Listings</h4>

                    <div className="">
                        {listings &&
                        listings.map((listings, index) => (
                            <div className={"testList" + (index === currentIndex ? "active" : "")}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">

                                        </div>
                                        <div className="col-md-4">
                                            <small className="forsale">{listings.listing_type}</small>
                                        </div>
                                        <div className="col-md-4">

                                        </div>
                                    </div>
                                    <div className="row" style={{textAlign:"center"}}>
                                        <div className="col-md-4">
                                            {/*<a className="testimg" href="https://www.teslarati.com/wp-content/uploads/2014/04/Tesla-Model-S-garage-delivery.jpg" style={{backgroundImage: "url(" + 'https://www.teslarati.com/wp-content/uploads/2014/04/Tesla-Model-S-garage-delivery.jpg' + ")"}}/>*/}
                                            <img src={process.env.PUBLIC_URL + `/imgs/${listings.thumbnail}`} height='100' width='190' />

                                        </div>
                                        <div className="col-md-4">
                                            <h4 className="text-uppercase" style={{fontSize:"25px", textAlign:"left"}}>{listings.year} / {listings.model} / {listings.battery} / {listings.color}</h4>
                                        </div>
                                        <div className="col-md-4">
                                            <h3 className="listingsTextAsking text-uppercase">Asking Price</h3>
                                            <p className="listingsPrice">$ <NumberFormat value={listings.asking_price} displayType={'text'} thousandSeparator={true} />.00</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">

                                        </div>
                                        <div className="col-md-4">
                                            <p style={{textAlign:"left", margin:"0", lineHeight:"1.2"}}>{listings.summary}</p>
                                        </div>
                                        <div className="col-md-4">
                                            <ul>
                                            <ul><h3 className="listingsText text-uppercase listing-head">Listing date</h3>
                                            <p className="listingsText1">{listings.date_created}</p></ul>
                                            <ul><h3 className="listingsText text-uppercase listing-head">Location</h3>
                                            <p className="listingsText1">{listings.city}, {listings.state}</p></ul>
                                            <ul><h3 className="listingsText text-uppercase listing-head">Conditon</h3>
                                            <p className="listingsText1">{listings.car_condition}</p></ul>
                                            <ul><h3 className="listingsText text-uppercase listing-head">Mileage</h3>
                                            <p className="listingsText1">{listings.mileage} miles</p></ul>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                {/*<div className="col-md-6">
                    {currentListing ? (
                        <div>
                            <h4>Listing</h4>
                            <div>
                                <label>
                                    <strong>Model:</strong>
                                </label>{" "}
                                {currentListing.model}
                            </div>
                            <div>
                                <label>
                                    <strong>Summary:</strong>
                                </label>{" "}
                                {currentListing.summary}
                            </div>
                            <div>
                                <label>
                                    <strong>Year:</strong>
                                </label>{" "}
                                {currentListing.year}
                            </div>

                            <Link
                                to={"/listing/Listing/" + currentListing.id}
                                className="badge badge-warning"
                            >
                                Edit
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Listing...</p>
                        </div>
                    )}
                </div>*/}
            </div>
        )

    }

}

export default AllListings