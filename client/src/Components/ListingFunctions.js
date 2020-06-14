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
            summary: newListing.summary
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
            summary: putListing.summary
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