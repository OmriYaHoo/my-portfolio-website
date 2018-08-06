import React, {Component} from 'react';

export default class Contact extends Component {
    render() {
        return (
            <main id="contact">
                <h1 className="lg-heading">
                    Contact
                    <span className="text-secondary">Me</span>
                </h1>
                <h2 className="sm-heading">
                    This is how you can reach me...
                </h2>
                <div className="boxes">
                    <div>
                        <span className="text-secondary">Email: </span> omriyahoo@gmail.com
                    </div>
                    <div>
                        <span className="text-secondary">Phone: </span> (+972) 50-3200424
                    </div>
                </div>
            </main>
        );
    }
}