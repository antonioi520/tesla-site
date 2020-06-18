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
            summary: '',
            vin: '',
            listing_type: '',
            battery: '',
            city: '',
            state: '',
            mileage: '',
            asking_price: '',
            car_condition: '',
            autopilot: '',
            warranty: '',
            self_driving: '',
            modifications: '',
            made_repairs: '',
            own_title: '',
            // thumbnail: '',
            // sticker: '',
            // pictures: '',
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
            summary: this.state.summary,
            vin: this.state.vin,
            listing_type: this.state.listing_type,
            battery: this.state.battery,
            city: this.state.city,
            state: this.state.state,
            mileage: this.state.mileage,
            asking_price: this.state.asking_price,
            car_condition: this.state.car_condition,
            autopilot: this.state.autopilot,
            warranty: this.state.warranty,
            self_driving: this.state.self_driving,
            modifications: this.state.modifications,
            made_repairs: this.state.made_repairs,
            own_title: this.state.own_title,
            // thumbnail: this.state.,
            // sticker: this.state.,
            // pictures: this.state.
        }

        addListing(listing).then(res => {
            this.props.history.push(`/Listings`)
        })

    }

    render(){
        return(
            <div className="addlistbg" style={{paddingTop: "150px"}}>
                <div className="col-md-2">

                </div>
                <div className="addbox col-md-8">
                    <h2 className="loginHeader">Add Listing</h2>
                    <div className="container" style={{width:"50%"}}>
                        <form onSubmit={this.onSubmit}>
                            <h4 style={{textAlign:"left"}}>General Info</h4>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputFirstName" className="floatLeft addLabel">First Name</label>
                                    <input type="text" className="form-control" id="inputFirstName" placeholder="" name="first_name" value={this.state.first_name} onChange={this.onChange} required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4" className="floatLeft addLabel">Last Name</label>
                                    <input type="text" className="form-control" id="inputLastName"
                                           placeholder="" name="last_name" value={this.state.last_name} onChange={this.onChange} required/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail" className="floatLeft addLabel">Email</label>
                                <input type="email" className="form-control" id="inputEmail"
                                       placeholder="name@email.com" name="email" value={this.state.email} onChange={this.onChange} required/>
                            </div>
                            <h4 style={{textAlign:"left"}}>Tesla Info</h4>
                            <div className="form-group">
                                <label htmlFor="vinnumber" className="floatLeft addLabel">VIN #</label>
                                <input type="text" maxLength="17" className="form-control" id="vinnumber"
                                       placeholder="#################" />
                            </div>

                            <div className="row">
                                <label htmlFor="model" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Model</label>
                            </div>
                            <div style={{paddingLeft:"25px"}} className="form-row">
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="models"
                                               id="radiomodel3" value="model3"  />
                                            <label className="form-check-label" htmlFor="radiomodel3">
                                                Model 3
                                            </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="models"
                                               id="radiomodelS" value="modelS"  />
                                            <label className="form-check-label" htmlFor="radiomodelS">
                                                Model S
                                            </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="models"
                                               id="radiomodelX" value="modelX"  />
                                        <label className="form-check-label" htmlFor="radiomodelX">
                                            Model X
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="models"
                                               id="radiomodelY" value="modelY"  />
                                        <label className="form-check-label" htmlFor="radiomodelY">
                                            Model Y
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="models"
                                               id="radioroadster" value="roadster"  />
                                        <label className="form-check-label" htmlFor="radioroadster">
                                            Roadster
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="models"
                                               id="radioroadstersport" value="roadstersport"  />
                                        <label className="form-check-label" htmlFor="radioroadstersport">
                                            Roadster Sport
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="listing" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Listing Type</label>
                            </div>
                            <div style={{paddingLeft:"25px"}} className="form-row">
                                <div className="tleft form-group col-md-6 ">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="listings"
                                               id="radioforsale" value="forsale"  />
                                        <label className="form-check-label" htmlFor="radioforsale">
                                            For Sale
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="listings"
                                               id="radioleasetakeover" value="leasetakeover"  />
                                        <label className="form-check-label" htmlFor="radioleasetakeover">
                                            Lease Takeover
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="listings"
                                               id="radiopending" value="pending"  />
                                        <label className="form-check-label" htmlFor="radiopending">
                                            Pending
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="listings"
                                               id="radiosalepending" value="salepending"  />
                                        <label className="form-check-label" htmlFor="radiosalepending">
                                            Sale Pending
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="listings"
                                               id="radiosold" value="roadster"  />
                                        <label className="form-check-label" htmlFor="radiosold">
                                            Sold
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="model" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Battery</label>
                            </div>
                            <div style={{paddingLeft:"25px"}} className="form-row">
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input style={{float:"left"}} className="form-check-input" type="radio" name="battery"
                                               id="battery100d" value="battery100d"  />
                                        <label className="form-check-label" htmlFor="battery100d">
                                            100D
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery100draven" value="100draven"  />
                                        <label className="form-check-label" htmlFor="battery100draven">
                                            100D Raven
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery40" value="40"  />
                                        <label className="form-check-label" htmlFor="battery40">
                                            40
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery53kWh" value="53kWh"  />
                                        <label className="form-check-label" htmlFor="battery53kWh">
                                            53kWh
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input  className="form-check-input" type="radio" name="battery"
                                               id="battery60" value="60"  />
                                        <label className="form-check-label" htmlFor="battery60">
                                            60
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery60D" value="60D"  />
                                        <label className="form-check-label" htmlFor="battery60D">
                                            60D
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery70" value="70"  />
                                        <label className="form-check-label" htmlFor="battery70">
                                            70
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery70D" value="70D"  />
                                        <label className="form-check-label" htmlFor="battery70D">
                                            70D
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery75" value="75"  />
                                        <label className="form-check-label" htmlFor="battery75">
                                            75
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery75d" value="75d"  />
                                        <label className="form-check-label" htmlFor="battery75d">
                                            75D
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery80" value="80"  />
                                        <label className="form-check-label" htmlFor="battery80">
                                            80
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery85" value="85"  />
                                        <label className="form-check-label" htmlFor="battery85">
                                            85
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery85D" value="85D"  />
                                        <label className="form-check-label" htmlFor="battery85D">
                                            85D
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery90" value="90"  />
                                        <label className="form-check-label" htmlFor="battery90">
                                            90
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery90D" value="90D"  />
                                        <label className="form-check-label" htmlFor="battery90D">
                                            90D
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery90DL" value="90DL"  />
                                        <label className="form-check-label" htmlFor="battery90DL">
                                            90DL
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryap1" value="ap1"  />
                                        <label className="form-check-label" htmlFor="batteryap1">
                                            AP1
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylongrange" value="longrange"  />
                                        <label className="form-check-label" htmlFor="batterylongrange">
                                            Long Range
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylongrangeraven" value="longrangeraven"  />
                                        <label className="form-check-label" htmlFor="batterylongrangeraven">
                                            Long Range (Raven)
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylongrangeawd" value="longrangeawd"  />
                                        <label className="form-check-label" htmlFor="batterylongrangeawd">
                                            Long Range AWD
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylongrangeawdperf" value="longrangeawdperf"  />
                                        <label className="form-check-label" htmlFor="batterylongrangeawdperf">
                                            Long Range AWD Performance
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylongrangeperfraven" value="longrangeperfraven"  />
                                        <label className="form-check-label" htmlFor="batterylongrangeperfraven">
                                            Long Range Performance (Raven)
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylongrangerwd" value="longrangerwd"  />
                                        <label className="form-check-label" htmlFor="batterylongrangerwd">
                                            Long Range RWD
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylrraven" value="lrraven"  />
                                        <label className="form-check-label" htmlFor="batterylrraven">
                                            LR .Raven
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylrd" value="lrd"  />
                                        <label className="form-check-label" htmlFor="batterylrd">
                                            LRD
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterymidrange" value="midrange"  />
                                        <label className="form-check-label" htmlFor="batterymidrange">
                                            Mid-Range
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp100d" value="p100D"  />
                                        <label className="form-check-label" htmlFor="batteryp100d">
                                            P100D
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryP100DL" value="p100DL"  />
                                        <label className="form-check-label" htmlFor="batteryP100DL">
                                            P100DL
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp100dlraven" value="p100dlraven"  />
                                        <label className="form-check-label" htmlFor="batteryp100dlraven">
                                            P100DL RAVEN
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp3d" value="p3d"  />
                                        <label className="form-check-label" htmlFor="batteryp3d">
                                            P3D
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp85" value="p85"  />
                                        <label className="form-check-label" htmlFor="batteryp85">
                                            P85
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp85plus" value="p85plus"  />
                                        <label className="form-check-label" htmlFor="batteryp85plus">
                                            P85+
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp85d" value="p85d"  />
                                        <label className="form-check-label" htmlFor="batteryp85d">
                                            P85D
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp85dl" value="p85dl"  />
                                        <label className="form-check-label" htmlFor="batteryp85dl">
                                            P85DL
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp90" value="p90"  />
                                        <label className="form-check-label" htmlFor="batteryp90">
                                            P90
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp90d" value="p90d"  />
                                        <label className="form-check-label" htmlFor="batteryp90d">
                                            P90D
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp90dl" value="p90dl"  />
                                        <label className="form-check-label" htmlFor="batteryp90dl">
                                            P90DL
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterystandardrange" value="standardrange"  />
                                        <label className="form-check-label" htmlFor="batterystandardrange">
                                            Standard Range
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterystandardrangeplus" value="standardrangeplus"  />
                                        <label className="form-check-label" htmlFor="batterystandardrangeplus">
                                            Standard-Range-Plus
                                        </label>
                                    </div>
                                </div>

                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputYear" className="floatLeft addLabel">Year</label>
                                    <input type="text" pattern="\d*" className="form-control" maxLength="4" id="inputYear" placeholder="" name="year" value={this.state.year} onChange={this.onChange} required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputColor" className="floatLeft addLabel">Color</label>
                                    <input type="text" className="form-control" id="inputColor"
                                           placeholder="" name="color" value={this.state.color} onChange={this.onChange} required/>
                                </div>
                            </div>


                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity" className="floatLeft addLabel">City</label>
                                    <input type="text" className="form-control" id="inputCity" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState" className="floatLeft addLabel">State</label>
                                    <select id="inputState" className="form-control">
                                        <option selected>Choose...</option>
                                        <option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip" className="floatLeft addLabel">Zip</label>
                                    <input type="text" pattern="\d*" maxLength="5" className="form-control" id="inputZip" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputMileage" className="floatLeft addLabel">Mileage</label>
                                    <input type="number" className="form-control" id="inputMileage" placeholder="" name="mileage"   required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputAskingPrice" className="floatLeft addLabel">Asking Price</label>
                                    <input type="number" className="form-control" id="inputAskingPrice"
                                           placeholder="" name="askingPrice"  required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputMonthsLeftLease" className="floatLeft addLabel">Months left on lease</label>
                                <input type="text" className="form-control" id="inputMonthsLeftLease" name="monthsLeftLease"
                                       placeholder=""  required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputSummary" className="floatLeft addLabel">Vehicle Summary</label>
                                <textarea rows="7" className="form-control" id="inputSummary" name="summary"
                                       placeholder=""  required/>
                            </div>

                            <div className="row">
                                <label htmlFor="condition" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Condition of Vehicle</label>
                            </div>
                            <div style={{paddingLeft:"25px"}} className="form-row">
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="conditon"
                                               id="radioexcellent" value="excellent"  />
                                        <label className="form-check-label" htmlFor="radioexcellent">
                                            Excellent
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="condition"
                                               id="radiogreat" value="great"  />
                                        <label className="form-check-label" htmlFor="radiogreat">
                                            Great
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="condition"
                                               id="radiogood" value="good"  />
                                        <label className="form-check-label" htmlFor="radiogood">
                                            Good
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="condition"
                                               id="radiofair" value="fair"  />
                                        <label className="form-check-label" htmlFor="radiofair">
                                            Fair
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="condition"
                                               id="radiopoor" value="poor"  />
                                        <label className="form-check-label" htmlFor="radiopoor">
                                            Poor
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="condition" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Does the vehicle have autopilot?</label>
                            </div>
                            <div style={{paddingLeft:"25px"}} className="form-row">
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="autopilot"
                                               id="radioautoyes" value="1"  />
                                        <label className="form-check-label" htmlFor="radioautoyes">
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="autopilot"
                                               id="radioautono" value="0"  />
                                        <label className="form-check-label" htmlFor="radioautono">
                                            No
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="condition" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Do you have warranty?</label>
                            </div>
                            <div style={{paddingLeft:"25px"}} className="form-row">
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="warranty"
                                               id="radiowarrantyyes" value="1"  />
                                        <label className="form-check-label" htmlFor="radiowarrantyyes">
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="warranty"
                                               id="radiowarrantyno" value="0"  />
                                        <label className="form-check-label" htmlFor="radiowarrantyno">
                                            No
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="condition" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Does it have full self driving (FSD)?</label>
                            </div>
                            <div style={{paddingLeft:"25px"}} className="form-row">
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="fsd"
                                               id="radiofsdyes" value="1"  />
                                        <label className="form-check-label" htmlFor="radiofsdyes">
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="fsd"
                                               id="radiofsdno" value="0"  />
                                        <label className="form-check-label" htmlFor="radiofsdno">
                                            No
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="condition" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Have you made any modifications?</label>
                            </div>
                            <div style={{paddingLeft:"25px"}} className="form-row">
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="mods"
                                               id="radiomodsyes" value="1"  />
                                        <label className="form-check-label" htmlFor="radiomodsyes">
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="mods"
                                               id="radiomodsno" value="0"  />
                                        <label className="form-check-label" htmlFor="radiomodsno">
                                            No
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="condition" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Clean history?</label>
                            </div>
                            <div style={{paddingLeft:"25px"}} className="form-row">
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="histoy"
                                               id="radiohistoryyes" value="1"  />
                                        <label className="form-check-label" htmlFor="radiohistoryyes">
                                            Yes. No Accidents.
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="history"
                                               id="radiohistoryno" value="0"  />
                                        <label className="form-check-label" htmlFor="radiohistoryno">
                                            No. Repairs made.
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="condition" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Do you have the title of the vehicle?</label>
                            </div>
                            <div style={{paddingLeft:"25px"}} className="form-row">
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="titlev"
                                               id="radiotitleyes" value="1"  />
                                        <label className="form-check-label" htmlFor="radiotitleyes">
                                            Yes.
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="titlev"
                                               id="radiotitleno" value="0"  />
                                        <label className="form-check-label" htmlFor="radiotitleno">
                                            No.
                                        </label>
                                    </div>

                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="condition" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Thumbnail</label>
                            </div>
                            <div  className="form-row">
                                <div className=" tleft col-md-12">
                                    <input type="file" id="thumbnail" name="thumbnail" accept="image/*" />
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="condition" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Sticker</label>
                            </div>
                            <div  className="form-row">
                                <div className=" tleft col-md-12">
                                    <input type="file" id="sticker" name="sticker" accept="image/*" />
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="condition" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Pictures of vehicle</label>
                            </div>
                            <div  className="form-row">
                                <div className=" tleft col-md-12">
                                    <input type="file" id="files" name="files" accept="image/*" multiple />
                                </div>
                            </div>

                            <button className="loginbutton btn btn-dark" type="submit">Submit Listing</button><br/>
                        </form>
                    </div>

                </div>
                <div className="col-md-2">

                </div>
            </div>
        )
    }
}

export default AddListing