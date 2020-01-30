import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer id="main-footer">
                OmriYaHoo &copy; {new Date().getFullYear()}
            </footer>
        );
    }
}