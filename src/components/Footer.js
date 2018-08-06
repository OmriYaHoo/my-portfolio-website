import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer id="main-footer">
                Copyright &copy; {new Date().getFullYear()}
            </footer>
        );
    }
}