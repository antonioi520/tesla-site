import axios from 'axios';

export const addListing = newListing => {
    return axios
        .post('/listing/AddListing', {
            first_name: newListing.first_name,
            last_name: newListing.last_name,
            email: newListing.email,
            model: newListing.model,
            year: newListing.year,
            color: newListing.color,
            summary: newListing.summary,
            vin: newListing.vin,
            listing_type: newListing.listing_type,
            battery: newListing.battery,
            city: newListing.city,
            state: newListing.state,
            mileage: newListing.mileage,
            asking_price: newListing.asking_price,
            car_condition: newListing.car_condition,
            autopilot: newListing.autopilot,
            warranty: newListing.warranty,
            self_driving: newListing.self_driving,
            modifications: newListing.modifications,
            made_repairs: newListing.made_repairs,
            own_title: newListing.own_title,
            thumbnail: newListing.thumbnail,
            // sticker: newListing.sticker,
            // pictures: newListing.pictures
        }).then(res => {
            console.log("added listing")
        }).catch( err => {
            console.log(err)
        })
}

export const updateListing = (userid, putListing) => {
    return axios
        .put(`/listing/UpdateListing/${userid}`, {
            first_name: putListing.first_name,
            last_name: putListing.last_name,
            email: putListing.email,
            model: putListing.model,
            year: putListing.year,
            color: putListing.color,
            summary: putListing.summary,
            vin: putListing.vin,
            listing_type: putListing.listing_type,
            battery: putListing.battery,
            city: putListing.city,
            state: putListing.state,
            mileage: putListing.mileage,
            asking_price: putListing.asking_price,
            car_condition: putListing.car_condition,
            autopilot: putListing.autopilot,
            warranty: putListing.warranty,
            self_driving: putListing.self_driving,
            modifications: putListing.modifications,
            made_repairs: putListing.made_repairs,
            own_title: putListing.own_title
            // thumbnail: putListing.thumbnail,
            // sticker: putListing.sticker,
            // pictures: putListing.pictures
        }).then(res => {
            console.log("updated listing")
        }).catch( err => {
            console.log(err)
        })
}

export const allListings = getAll => {
    return axios
        .get('/listing/AllListings')
}

export const userListings = (email) => {
    return axios
        .get(`/listing/UserListings/${email}`)
}


export const getListing = (myListing) => {
    return axios
        .get(`/listing/Listing/${myListing}`)
}