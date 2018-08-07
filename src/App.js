import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Work from "./components/Work";

export default class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/work" component={Work}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
