import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Header extends Component {

    constructor() {
        super();
        this.state = {
            showMenu: false,
            showClasses: {menu: 'menu', menuNav: 'menu-nav', menuBranding: 'menu-branding', navItem: 'nav-item'},
            path: ""
        };

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.setCurrentPath = this.setCurrentPath.bind(this);
    }

    setCurrentPath(event, path) {
        this.setState({
            path: path
        });
        this.handleMenuClick();
    };

    handleMenuClick() {
        if (!this.state.showMenu) {
            let ob = Object.assign(this.state.showClasses);
            for (let key in ob) {
                if (ob.hasOwnProperty(key)) {
                    ob[key] += " show";
                }
            }
            this.setState({
                showMenu: true,
                showClasses: ob
            });
        } else {
            let ob = Object.assign(this.state.showClasses);
            for (let key in ob) {
                if (ob.hasOwnProperty(key)) {
                    ob[key] = ob[key].slice(0, -5);
                }
            }
            this.setState({
                showMenu: false,
                showClasses: ob
            });
        }
    }

    render() {
        return (
            <header>
                <div className={"menu-btn" + (this.state.showMenu ? " close" : "")} onClick={this.handleMenuClick}>
                    <div className="btn-line"/>
                    <div className="btn-line"/>
                    <div className="btn-line"/>
                </div>

                <nav className={this.state.showClasses.menu}>
                    <div className={this.state.showClasses.menuBranding}>
                        <div className="portrait"/>
                    </div>
                    <ul className={this.state.showClasses.menuNav}>
                        <li className={this.state.showClasses.navItem +
                        (this.state.path === "" ? " current" : "")}>
                            <Link to="/" className="nav-link"
                                  onClick={(e) => this.setCurrentPath(e, "")}>
                                Home
                            </Link>
                        </li>
                        <li className={this.state.showClasses.navItem +
                        (this.state.path === "about" ? " current" : "")}>
                            <Link to="/about" className="nav-link"
                                  onClick={(e) => this.setCurrentPath(e, "about")}>
                                About Me
                            </Link>
                        </li>
                        <li className={this.state.showClasses.navItem +
                        (this.state.path === "work" ? " current" : "")}>
                            <Link to="/work" className="nav-link"
                                  onClick={(e) => this.setCurrentPath(e, "work")}>
                                My Work
                            </Link>
                        </li>
                        <li className={this.state.showClasses.navItem +
                        (this.state.path === "contact" ? " current" : "")}>
                            <Link to="/contact" className="nav-link"
                                  onClick={(e) => this.setCurrentPath(e, "contact")}>
                                How To Reach Me
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}