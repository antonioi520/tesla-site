import React, { Component } from "react";
import { Link } from "react-router-dom";
import {allListings} from "./ListingFunctions";

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
                <div className="col-md-6">
                    <h4>All Listings</h4>

                    <ul className="list-group">
                        {listings &&
                        listings.map((listings, index) => (
                            <li
                                className={
                                    "list-group-item " +
                                    (index === currentIndex ? "active" : "")
                                }
                                onClick={() => this.setActiveListing(listings, index)}
                                key={index}
                            >
                                {listings.model}
                            </li>
                        ))}
                    </ul>

                </div>
                <div className="col-md-6">
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
                </div>
            </div>
        )

    }

}

export default AllListings