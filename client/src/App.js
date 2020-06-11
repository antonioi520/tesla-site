import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from '../src/Components/nav';
import Header from '../src/Components/banner';
import SellNow from '../src/Components/sellnow';
import Features from '../src/Components/features';
import Login from '../src/Components/login';
import Register from '../src/Components/register';
import Profile from '../src/Components/profile';
import Landing from '../src/Components/Landing'
import {BrowserRouter, Link, Route} from 'react-router-dom';
import Login1 from '../src/Components/login';
import { Button, FormGroup, FormControl } from "react-bootstrap";

class App extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {


        return (
            <BrowserRouter>
            <div className="App">
                <Nav />
                <Route exact={true} path={"/"} component={Home} />
                <Route exact={true} path={"/About"} component={About} />
                <Route exact={true} path={"/FAQ"} component={FAQ} />
                <Route exact={true} path={"/Contact"} component={Contact} />
                <Route exact={true} path={"/Listings"} component={Listings} />
                <Route exact={true} path={"/Login"} component={Login} />
                <Route exact={true} path={"/Register"} component={Register} />
                <Route exact={true} path={"/Profile"} component={Profile} />

            </div>
            </BrowserRouter>

        );
    }
}


const portfolioLinks = [
    {
        title: 'Threads',
        caption: 'Illustration'
    },
    {
        title: 'Explore',
        caption: 'Graphic Design'
    },
    {
        title: 'Finish',
        caption: 'Identity'
    },
    {
        title: 'Lines',
        caption: 'Branding'
    },
    {
        title: 'Southwest',
        caption: 'Website Design'
    },
    {
        title: 'Window',
        caption: 'Photography'
    },
    {
        title: 'Test',
        caption: 'Adding'
    }
];
const features = [
    {
        fav: "fa fa-exclamation-circle fa-stack-1x fa-inverse",
        title: 'No BS',
        caption: 'We’ll never collect and sell your private data, or blindside you with a million nickle-and-dime fees.'
    },
    {
        fav: "fa fa-thumbs-up fa-stack-1x fa-inverse",
        title: 'Transparent and Simple',
        caption: '$149, and your listing will stay up until your car sells'
    },
    {
        fav: "fa fa-car fa-stack-1x fa-inverse",
        title: 'Valet Postings',
        caption: 'Send us the info we need, and we’ll handle the rest. All that’s left is choosing who gets your car.'
    },
    {
        fav: "fa fa-ban fa-stack-1x fa-inverse",
        title: 'Bypass Restrictions',
        caption: 'Tesla still can’t legally sell directly to consumers in many states, but dealers and private sellers aren’t bound by those laws.'
    },
    {
        fav: "fa fa-line-chart fa-stack-1x fa-inverse",
        title: 'Quicker Selling',
        caption: 'Most Teslas sell in 30 days or less. We’ll even leverage Facebook and Instagram to target local buyers already looking for your exact model.'
    },
    {
        fav: "fa fa-eye fa-stack-1x fa-inverse",
        title: 'Better Views',
        caption: 'Don’t waste your time showing your Tesla to someone who wants a gas guzzler. Half a million people come here every month because they already want what you have.'
    }
];
const Home = () => (
    <div>

        <Header />

        <SellNow />

        <Features features={features} />

        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Current Listings</h2>
                </div>
            </div>
        </section>

        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/envato.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/designmodo.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/themeforest.jpg" alt="" /></a>
                    </div>
                    <div className="col-md-3 col-sm-6 my-3">
                        <a href="#!"><img className="img-fluid d-block mx-auto" src="assets/img/logos/creative-market.jpg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>

        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>

        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right"><a className="mr-3" href="#!">Privacy Policy</a><a href="#!">Terms of Use</a></div>
                </div>
            </div>
        </footer>
    </div>
)

const About = () => (
    <div>

        <Header />


        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right"><a className="mr-3" href="#!">Privacy Policy</a><a href="#!">Terms of Use</a></div>
                </div>
            </div>
        </footer>
    </div>
)
const FAQ = () => (
    <div>
        <Header />

        <Features features={features} />

        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right"><a className="mr-3" href="#!">Privacy Policy</a><a href="#!">Terms of Use</a></div>
                </div>
            </div>
        </footer>
    </div>
)
const Contact = () => (
    <div>
        <Header />

        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>

        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right"><a className="mr-3" href="#!">Privacy Policy</a><a href="#!">Terms of Use</a></div>
                </div>
            </div>
        </footer>
    </div>
)
const Listings = () => (
    <div>
        <Header />

        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Current Listings</h2>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="" />
                            <h4>Kay Garland</h4>
                            <p className="text-muted">Lead Designer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="" />
                            <h4>Larry Parker</h4>
                            <p className="text-muted">Lead Marketer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="" />
                            <h4>Diana Petersen</h4>
                            <p className="text-muted">Lead Developer</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>

        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Your Website 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin-in"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right"><a className="mr-3" href="#!">Privacy Policy</a><a href="#!">Terms of Use</a></div>
                </div>
            </div>
        </footer>
    </div>
)
/*const Login = () => (
    <div className="bglog" style={{paddingTop: "150px"}}>
        <div className="col-md-4">

        </div>
        <div className="loginbox col-md-4">
            <h2 className="loginHeader">Sign In</h2>
            <form>
                <input className="inputbox form-control" type="name" name="username" placeholder="username" required/><br/>
                <input className="inputbox form-control" type="password" name="password" placeholder="password" required/><br/>
                <button className="loginbutton btn btn-dark" type="submit">Sign In</button><br/>
                <a className="loginA" href="#">Forgot password?</a><br/>
                <a className="loginA" href="#">Create an account</a>
            </form>
        </div>

    </div>
)
const Register = () => (
    <div className="bglog" style={{paddingTop: "150px"}}>
        <div className="regbox col-md-4">
            <h2 className="loginHeader">Register</h2>
            <form>
                <input className="inputbox form-control" type="name" name="firstname" placeholder="first name" required/><br/>
                <input className="inputbox form-control" type="name" name="lastname" placeholder="last name" required/><br/>
                <input className="inputbox form-control" type="name" name="username" placeholder="username" required/><br/>
                <input className="inputbox form-control" type="password" name="password" placeholder="password" required/><br/>
                <input className="inputbox form-control" type="email" name="email" placeholder="email address" required/><br/>
                <button className="loginbutton btn btn-dark" type="submit">Register</button><br/>
                <a className="loginA" href="#">Have an account? Log in</a><br/>
            </form>
        </div>
    </div>
)*/

export default App;

