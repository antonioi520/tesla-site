import React, {Component} from 'react';
import {BrowserRouter, Link, withRouter} from 'react-router-dom';

class Nav extends Component{
    logOut(e){
        e.preventDefault()
        localStorage.removeItem('userToken')
        this.props.history.push(`/`)
    }

    render(){
        const loginRegLink = (

                        <ul className="navbar-nav text-uppercase ml-auto">

                            <Link to={'/'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Home</a></li></Link>
                            <Link to={'/About'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">About</a></li></Link>
                            <Link to={'/FAQ'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">FAQ</a></li></Link>
                            <Link to={'/Contact'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Contact</a></li></Link>
                            <Link to={'/Listings'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Listings</a></li></Link>
                            <Link to={'/Login'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Log in</a></li></Link>
                            <Link to={'/Register'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Register</a></li></Link>
                        </ul>
        )
        const userLink = (
                        <ul className="navbar-nav text-uppercase ml-auto">
                            <Link to={'/'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Home</a></li></Link>
                            <Link to={'/About'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">About</a></li></Link>
                            <Link to={'/FAQ'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">FAQ</a></li></Link>
                            <Link to={'/Contact'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Contact</a></li></Link>
                            <Link to={'/Listings'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Listings</a></li></Link>
                            <Link to={'/AddListing'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Add Listing</a></li></Link>
                            <Link to={'/Profile'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Profile</a></li></Link>
                            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="" onClick={this.logOut.bind(this)}>Logout</a></li>
                        </ul>
        )
        return(
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fa fa-bars ml-1"></i></button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        { localStorage.userToken ? userLink : loginRegLink }
                    </div>
                </div>
            </nav>
        )
    }
}

export default withRouter(Nav)
/*
export default () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="" /></a><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fa fa-bars ml-1"></i></button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <Link to={'/'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Home</a></li></Link>
                        <Link to={'/About'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">About</a></li></Link>
                        <Link to={'/FAQ'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">FAQ</a></li></Link>
                        <Link to={'/Contact'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Contact</a></li></Link>
                        <Link to={'/Listings'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Listings</a></li></Link>
                        <Link to={'/Login'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Log in</a></li></Link>
                        <Link to={'/Register'}><li className="nav-item"><a className="nav-link js-scroll-trigger" href="">Register</a></li></Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}*/
