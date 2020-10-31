import React, {Component} from 'react';
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import project4 from "../assets/project4.jpg"
import java from "../assets/java.jpg"

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
                        <a href="https://github.com/OmriYaHoo/books-app-be" className="btn-dark">
                            <i className="fab fa-github"/> Books App BackEnd
                        </a>
                    </div>

                    <div className="item">
                        <img src={project2} alt="Project"/>
                        <a href="https://github.com/OmriYaHoo/books-app-fe" className="btn-dark">
                            <i className="fab fa-github"/> Books App FrontEnd
                        </a>
                    </div>

                    <div className="item">
                        <img src={project3} alt="Project"/>
                        <a href="https://github.com/OmriYaHoo/my-portfolio-website" className="btn-dark">
                            <i className="fab fa-github"/> My Portfolio Website
                        </a>
                    </div>

                    <div className="item">
                        <img src={project4} alt="Project"/>
                        <a href="https://github.com/OmriYaHoo/url_shortener" className="btn-dark">
                            <i className="fab fa-github"/> A basic TinyUrl clone
                        </a>
                    </div>

                    <div className="item">
                        <img src={java} alt="Project"/>
                        <a href="https://github.com/OmriYaHoo/JavaVersionScript" className="btn-dark">
                            <i className="fab fa-github"/> Scripts that help change version of Java on a Windows
                            machines
                        </a>
                    </div>

                </div>
            </main>
        );
    }
}
