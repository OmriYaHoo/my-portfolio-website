import React, {Component} from 'react';
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import project4 from "../assets/project4.jpg"
import project5 from "../assets/project5.jpg"

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
                        <a href="#" className="btn-dark">
                            <i className="fab fa-github"/> Github
                        </a>
                    </div>
                    {/*<div className="item">*/}
                        {/*<a href="#!">*/}
                            {/*<img src={project4} alt="Project"/>*/}
                        {/*</a>*/}
                        {/*<a href="#" className="btn-light">*/}
                            {/*<i className="fas fa-eye"/> Project*/}
                        {/*</a>*/}
                        {/*<a href="#" className="btn-dark">*/}
                            {/*<i className="fab fa-github"/> Github*/}
                        {/*</a>*/}
                    {/*</div>*/}
                    {/*<div className="item">*/}
                        {/*<a href="#!">*/}
                            {/*<img src={project5} alt="Project"/>*/}
                        {/*</a>*/}
                        {/*<a href="#" className="btn-light">*/}
                            {/*<i className="fas fa-eye"/> Project*/}
                        {/*</a>*/}
                        {/*<a href="#" className="btn-dark">*/}
                            {/*<i className="fab fa-github"/> Github*/}
                        {/*</a>*/}
                    {/*</div>*/}
                </div>
            </main>
        );
    }
}
