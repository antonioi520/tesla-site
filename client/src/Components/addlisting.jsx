import React, {Component} from 'react';
import {addListing} from './ListingFunctions';
import axios from 'axios'

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
            thumbnail: '',
            // sticker: '',
            // pictures: '',
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onFileChange = this.onFileChange.bind(this)
    }

    onFileChange(e) {
        this.setState({ thumbnail: e.target.files[0] })
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
            thumbnail: this.state.thumbnail,
            // sticker: this.state.,
            // pictures: this.state.
        }
        const formData = new FormData()
        formData.append('first_name', this.state.first_name)
        formData.append('last_name', this.state.last_name)
        formData.append('email', this.state.email)
        formData.append('model', this.state.model)
        formData.append('year', this.state.year)
        formData.append('color', this.state.color)
        formData.append('summary', this.state.summary)
        formData.append('vin', this.state.vin)
        formData.append('listing_type', this.state.listing_type)
        formData.append('battery', this.state.battery)
        formData.append('city', this.state.city)
        formData.append('state', this.state.state)
        formData.append('mileage', this.state.mileage)
        formData.append('asking_price', this.state.asking_price)
        formData.append('car_condition', this.state.car_condition)
        formData.append('autopilot', this.state.autopilot)
        formData.append('warranty', this.state.warranty)
        formData.append('self_driving', this.state.self_driving)
        formData.append('modifications', this.state.modifications)
        formData.append('made_repairs', this.state.made_repairs)
        formData.append('own_title', this.state.own_title)
        formData.append('thumbnail', this.state.thumbnail)
        axios.post("/listing/AddListing", formData, {
        }).then(res => {
            this.props.history.push(`/Listings`)
            console.log(res)
        })
        // addListing(listing).then(res => {
        //     this.props.history.push(`/Listings`)
        // })

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
                                <input type="text" minLength="17" maxLength="17" className="form-control" id="vinnumber"
                                       placeholder="#################" name="vin" value={this.state.vin} onChange={this.onChange} required/>
                            </div>

                            <div className="row">
                                <label htmlFor="model" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Model</label>
                            </div>
                            <div style={{paddingLeft:"25px"}} className="form-row">
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="model"
                                               id="radiomodel3" value="model 3"  onChange={this.onChange} />
                                            <label className="form-check-label" htmlFor="radiomodel3">
                                                Model 3
                                            </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="model"
                                               id="radiomodelS" value="model S" onChange={this.onChange} />
                                            <label className="form-check-label" htmlFor="radiomodelS">
                                                Model S
                                            </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="model"
                                               id="radiomodelX" value="model X" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="radiomodelX">
                                            Model X
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="model"
                                               id="radiomodelY" value="model Y" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="radiomodelY">
                                            Model Y
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="model"
                                               id="radioroadster" value="roadster" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="radioroadster">
                                            Roadster
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="model"
                                               id="radioroadstersport" value="roadster sport" onChange={this.onChange}  />
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
                                        <input className="form-check-input" type="radio" name="listing_type"
                                               id="radioforsale" value="for sale" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="radioforsale">
                                            For Sale
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="listing_type"
                                               id="radioleasetakeover" value="lease takeover"  />
                                        <label className="form-check-label" htmlFor="radioleasetakeover">
                                            Lease Takeover
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="listing_type"
                                               id="radiopending" value="pending"  />
                                        <label className="form-check-label" htmlFor="radiopending">
                                            Pending
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="listing_type"
                                               id="radiosalepending" value="sale pending"  />
                                        <label className="form-check-label" htmlFor="radiosalepending">
                                            Sale Pending
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-6">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="listing_type"
                                               id="radiosold" value="sold"  />
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
                                               id="battery100d" value="100D" onChange={this.onChange}  />
                                        <label className="form-check-label" htmlFor="battery100d">
                                            100D
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery100draven" value="100D Raven" onChange={this.onChange}  />
                                        <label className="form-check-label" htmlFor="battery100draven">
                                            100D Raven
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery40" value="40" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="battery40">
                                            40
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery53kWh" value="53kWh" onChange={this.onChange}  />
                                        <label className="form-check-label" htmlFor="battery53kWh">
                                            53kWh
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input  className="form-check-input" type="radio" name="battery"
                                               id="battery60" value="60" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="battery60">
                                            60
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery60D" value="60D" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="battery60D">
                                            60D
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery70" value="70" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="battery70">
                                            70
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery70D" value="70D" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="battery70D">
                                            70D
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery75" value="75" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="battery75">
                                            75
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery75d" value="75D" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="battery75d">
                                            75D
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery80" value="80" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="battery80">
                                            80
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery85" value="85" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="battery85">
                                            85
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery85D" value="85D" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="battery85D">
                                            85D
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery90" value="90" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="battery90">
                                            90
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery90D" value="90D" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="battery90D">
                                            90D
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="battery90DL" value="90DL" onChange={this.onChange}  />
                                        <label className="form-check-label" htmlFor="battery90DL">
                                            90DL
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryap1" value="AP1" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batteryap1">
                                            AP1
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylongrange" value="Long Range" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batterylongrange">
                                            Long Range
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylongrangeraven" value="Long Range (Raven)" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batterylongrangeraven">
                                            Long Range (Raven)
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylongrangeawd" value="Long Range AWD" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batterylongrangeawd">
                                            Long Range AWD
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylongrangeawdperf" value="Long Range AWD Performance" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batterylongrangeawdperf">
                                            Long Range AWD Performance
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylongrangeperfraven" value="Long Range Performance (Raven)" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batterylongrangeperfraven">
                                            Long Range Performance (Raven)
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylongrangerwd" value="Long Range RWD" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batterylongrangerwd">
                                            Long Range RWD
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylrraven" value="LR .Raven" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batterylrraven">
                                            LR .Raven
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterylrd" value="LRD" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batterylrd">
                                            LRD
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterymidrange" value="Mid-Range" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batterymidrange">
                                            Mid-Range
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp100d" value="P100D"  onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batteryp100d">
                                            P100D
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryP100DL" value="P100DL"  onChange={this.onChange}/>
                                        <label className="form-check-label" htmlFor="batteryP100DL">
                                            P100DL
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp100dlraven" value="P100DL Raven" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batteryp100dlraven">
                                            P100DL RAVEN
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp3d" value="P3D" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batteryp3d">
                                            P3D
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp85" value="P85" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batteryp85">
                                            P85
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp85plus" value="P85+" onChange={this.onChange}  />
                                        <label className="form-check-label" htmlFor="batteryp85plus">
                                            P85+
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp85d" value="P85D" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batteryp85d">
                                            P85D
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp85dl" value="P85DL" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batteryp85dl">
                                            P85DL
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp90" value="P90" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batteryp90">
                                            P90
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp90d" value="P90D" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batteryp90d">
                                            P90D
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batteryp90dl" value="P90DL" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batteryp90dl">
                                            P90DL
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterystandardrange" value="Standard Range" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="batterystandardrange">
                                            Standard Range
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-3">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="battery"
                                               id="batterystandardrangeplus" value="Standard-Range-Plus" onChange={this.onChange} />
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
                                    <input type="text" name="city" className="form-control" id="inputCity" value={this.state.city} onChange={this.onChange} required  />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState" className="floatLeft addLabel">State</label>
                                    <select id="inputState" name="state" className="form-control" onChange={this.onChange}>
                                        <option selected>Choose...</option>
                                        <option value="Alabama" onChange={this.onChange}>Alabama</option><option value="Alaska" onChange={this.onChange}>Alaska</option><option value="Arizona" onChange={this.onChange}>Arizona</option><option value="Arkansas" onChange={this.onChange}>Arkansas</option><option value="California"  onChange={this.onChange}>California</option><option value="Colorado" onChange={this.onChange}>Colorado</option><option value="Connecticut" onChange={this.onChange}>Connecticut</option><option value="Delaware" onChange={this.onChange}>Delaware</option><option value="District of Columbia" onChange={this.onChange}>District of Columbia</option><option value="Florida" onChange={this.onChange}>Florida</option><option value="Georgia" onChange={this.onChange}>Georgia</option><option value="Guam" onChange={this.onChange}>Guam</option><option value="Hawaii" onChange={this.onChange}>Hawaii</option><option value="Idaho" onChange={this.onChange}>Idaho</option><option value="Illinois" onChange={this.onChange}>Illinois</option><option value="Indiana" onChange={this.onChange}>Indiana</option><option value="Iowa" onChange={this.onChange}>Iowa</option><option value="Kansas" onChange={this.onChange}>Kansas</option><option value="Kentucky" onChange={this.onChange}>Kentucky</option><option value="Louisiana" onChange={this.onChange}>Louisiana</option><option value="Maine" onChange={this.onChange}>Maine</option><option value="Maryland" onChange={this.onChange}>Maryland</option><option value="Massachusetts" onChange={this.onChange}>Massachusetts</option><option value="Michigan" onChange={this.onChange}>Michigan</option><option value="Minnesota" onChange={this.onChange}>Minnesota</option><option value="Mississippi" onChange={this.onChange}>Mississippi</option><option value="Missouri" onChange={this.onChange}>Missouri</option><option value="Montana" onChange={this.onChange}>Montana</option><option value="Nebraska" onChange={this.onChange}>Nebraska</option><option value="Nevada" onChange={this.onChange}>Nevada</option><option value="New Hampshire" onChange={this.onChange}>New Hampshire</option><option value="New Jersey" onChange={this.onChange}>New Jersey</option><option value="New Mexico" onChange={this.onChange}>New Mexico</option><option value="New York" onChange={this.onChange}>New York</option><option value="North Carolina" onChange={this.onChange}>North Carolina</option><option value="North Dakota" onChange={this.onChange}>North Dakota</option><option value="Northern Marianas Islands" onChange={this.onChange}>Northern Marianas Islands</option><option value="Ohio" onChange={this.onChange}>Ohio</option><option value="Oklahoma" onChange={this.onChange}>Oklahoma</option><option value="Oregon" onChange={this.onChange}>Oregon</option><option value="Pennsylvania" onChange={this.onChange}>Pennsylvania</option><option value="Puerto Rico" onChange={this.onChange}>Puerto Rico</option><option value="Rhode Island" onChange={this.onChange}>Rhode Island</option><option value="South Carolina" onChange={this.onChange}>South Carolina</option><option value="South Dakota" onChange={this.onChange}>South Dakota</option><option value="Tennessee" onChange={this.onChange}>Tennessee</option><option value="Texas" onChange={this.onChange}>Texas</option><option value="Utah" onChange={this.onChange}>Utah</option><option value="Vermont" onChange={this.onChange}>Vermont</option><option value="Virginia" onChange={this.onChange}>Virginia</option><option value="Virgin Islands" onChange={this.onChange}>Virgin Islands</option><option value="Washington" onChange={this.onChange}>Washington</option><option value="West Virginia" onChange={this.onChange}>West Virginia</option><option value="Wisconsin" onChange={this.onChange}>Wisconsin</option><option value="Wyoming" onChange={this.onChange}>Wyoming</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip" className="floatLeft addLabel">Zip</label>
                                    <input type="text" name="zip" pattern="\d*" maxLength="5" className="form-control" id="inputZip"  />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputMileage" className="floatLeft addLabel">Mileage</label>
                                    <input type="number" className="form-control" id="inputMileage" placeholder="" name="mileage" value={this.state.mileage} onChange={this.onChange} required/>
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputAskingPrice" className="floatLeft addLabel">Asking Price</label>
                                    <input type="number" className="form-control" id="inputAskingPrice"
                                           placeholder="" name="asking_price" value={this.state.asking_price} onChange={this.onChange} required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputMonthsLeftLease" className="floatLeft addLabel">Months left on lease</label>
                                <input type="text" className="form-control" id="inputMonthsLeftLease" name="monthsLeftLease"
                                       placeholder=""   required/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="inputSummary" className="floatLeft addLabel">Vehicle Summary</label>
                                <textarea rows="7" className="form-control" id="inputSummary" name="summary"
                                       placeholder="" value={this.state.summary} onChange={this.onChange}  required/>
                            </div>

                            <div className="row">
                                <label htmlFor="condition" className="floatLeft addLabel" style={{paddingLeft:"12px"}}>Condition of Vehicle</label>
                            </div>
                            <div style={{paddingLeft:"25px"}} className="form-row">
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="car_condition"
                                               id="radioexcellent" value="Excellent" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="radioexcellent">
                                            Excellent
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="car_condition"
                                               id="radiogreat" value="Great" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="radiogreat">
                                            Great
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="car_condition"
                                               id="radiogood" value="Good" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="radiogood">
                                            Good
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="car_condition"
                                               id="radiofair" value="Fair" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="radiofair">
                                            Fair
                                        </label>
                                    </div>

                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="car_condition"
                                               id="radiopoor" value="Poor" onChange={this.onChange} />
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
                                               id="radioautoyes" value="1" onChange={this.onChange}  />
                                        <label className="form-check-label" htmlFor="radioautoyes">
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="autopilot"
                                               id="radioautono" value="0" onChange={this.onChange} />
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
                                               id="radiowarrantyyes" value="1" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="radiowarrantyyes">
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="warranty"
                                               id="radiowarrantyno" value="0" onChange={this.onChange} />
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
                                        <input className="form-check-input" type="radio" name="self_driving"
                                               id="radiofsdyes" value="1" onChange={this.onChange}  />
                                        <label className="form-check-label" htmlFor="radiofsdyes">
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="self_driving"
                                               id="radiofsdno" value="0" onChange={this.onChange} />
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
                                        <input className="form-check-input" type="radio" name="modifications"
                                               id="radiomodsyes" value="1" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="radiomodsyes">
                                            Yes
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="modifications"
                                               id="radiomodsno" value="0" onChange={this.onChange} />
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
                                        <input className="form-check-input" type="radio" name="made_repairs"
                                               id="radiohistoryyes" value="0" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="radiohistoryyes">
                                            Yes. No Accidents.
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="made_repairs"
                                               id="radiohistoryno" value="1" onChange={this.onChange} />
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
                                        <input className="form-check-input" type="radio" name="own_title"
                                               id="radiotitleyes" value="1" onChange={this.onChange} />
                                        <label className="form-check-label" htmlFor="radiotitleyes">
                                            Yes.
                                        </label>
                                    </div>
                                </div>
                                <div className="tleft form-group col-md-4">
                                    <div className="form-check floatLeft">
                                        <br/>
                                        <input className="form-check-input" type="radio" name="own_title"
                                               id="radiotitleno" value="0" onChange={this.onChange} />
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
                                    <input type="file" id="thumbnail" name="thumbnail" accept="image/*" onChange={this.onFileChange} />
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