import React, {Component} from 'react';
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"

export default class Work extends Component {
    render() {
        return (
            <main id="work">
                <h1 className="lg-heading">
                    My <span className="text-secondary">Work</span>
                </h1>
                <h2 className="sm-heading">
                    Check out some of my projects...
                </h2>
                <div className="projects">
                    <div className="item">
                        <img src={project1} alt="Project"/>
                        <a href="https://intense-inlet-87426.herokuapp.com/" className="btn-light">
                            <i className="fas fa-eye"/> Books App BackEnd
                        </a>
                        <a href="https://github.com/OmriYaHoo/books-app-be" className="btn-dark">
                            <i className="fab fa-github"/> Github
                        </a>
                    </div>
                    <div className="item">
                        <img src={project2} alt="Project"/>
                        <a href="https://intense-inlet-87426.herokuapp.com/" className="btn-light">
                            <i className="fas fa-eye"/> Books App FrontEnd
                        </a>
                        <a href="https://github.com/OmriYaHoo/books-app-fe" className="btn-dark">
                            <i className="fab fa-github"/> Github
                        </a>
                    </div>
                    <div className="item">
                        <img src={project3} alt="Project"/>
                        <a href="#" className="btn-light">
                            <i className="fas fa-eye"/> My Portfolio Website
                        </a>
                        <a href="https://github.com/OmriYaHoo/my-portfolio-website" className="btn-dark">
                            <i className="fab fa-github"/> Github
                        </a>
                    </div>
                </div>
            </main>
        );
    }
}
