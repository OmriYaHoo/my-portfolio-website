import React, {Component} from 'react';

export default class Home extends Component {
    render() {
        return (
            <main id="home">
                <h1 className="lg-heading">
                    Omri <span className="text-secondary">Ratson</span>
                </h1>
                <h2 className="sm-heading">
                    Fullstack Developer, Tech Enthusiast & More...
                </h2>
                <div className="icons">
                    <a target="_blank" href="https://twitter.com/OmriYaHoo">
                        <i className="fab fa-twitter fa-2x"/>
                    </a>
                    <a target="_blank" href="https://www.facebook.com/omriyahoo">
                        <i className="fab fa-facebook fa-2x"/>
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/omri-ratson-2baa3a76">
                        <i className="fab fa-linkedin fa-2x"/>
                    </a>
                    <a target="_blank" href="https://github.com/OmriYaHoo">
                        <i className="fab fa-github fa-2x"/>
                    </a>
                </div>
            </main>
        );
    }
}