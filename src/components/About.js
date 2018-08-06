import React, {Component} from 'react';
import portrait from "../assets/portrait.jpg";

export default class About extends Component {
    render() {
        return (
            <main id="about">
                <h1 className="lg-heading">
                    About <span className="text-secondary">Me</span>
                </h1>
                <h2 className="sm-heading">
                    Let me tell you a few things about me...
                </h2>
                <div className="about-info">
                    <img src={portrait} alt="Omri Ratson" className="bio-image"/>
                    <div className="bio">
                        <h3 className="text-secondary">BIO</h3>
                        <p>Hi there! my name is Omri Ratson. I'm married to a beautiful wife and I have two sweet little boys. I'm a Software Developer and general tech enthusiast that is always happy to learn new technologies. I am highly analytical with great problem solving and fast self-learning skills. I have excellent written and verbal communication skills, good interpersonal skills and teamwork competencies.
                        </p>
                    </div>

                    <div className="job job-1">
                        <h2>FUNDtech</h2>
                        <h3>QA Automation</h3>
                        <h4>2014 - 2015</h4>
                        <p>Intuit is a company that specialized in developing financial products – QuickBooks, TurboTax, Mint and more.</p>
                        <ul>
                            <li>Developed in JAVA and Groovy Script using SoapUI.</li>
                            <li>Used PL/SQL for performance DB testing.</li>
                            <li>Worked closely with developers, QA team members and managers.</li>
                        </ul>
                    </div>
                    <div className="job job-2">
                        <h2>Amdocs</h2>
                        <h3>Automation Developer</h3>
                        <h4>2015 - 2016</h4>
                        <p>Intuit is a company that specialized in developing financial products – QuickBooks, TurboTax, Mint and more.</p>
                        <ul>
                            <li>Designed and developed a complex in-house testing framework which runs the nightly functional and performance tests.</li>
                            <li>Developing automated CI and system deployment tools using JAVA, Python, JavaScript, JSon, Bash scripts based on Jenkins platform.</li>
                            <li>Developing testing tools integrated with open source systems (JMeter, JSystem, Git and more). Working with JMeter as the automatic environment for System API and UI testing (Using Selenium).</li>
                            <li>Operational experience in running cloud infrastructure. (Openstack)</li>
                        </ul>
                    </div>
                    <div className="job job-3">
                        <h2>Intuit</h2>
                        <h3>Fullstack Developer</h3>
                        <h4>2016 - 2018</h4>
                        <p>Intuit is a company that specialized in developing financial products – QuickBooks, TurboTax, Mint and more.</p>
                        <ul>
                            <li>Design and develop applications from user perspective all the way down to technical server capabilities.</li>
                            <li>Working with JAVA latest Spring Boot framework to develop lightweight services/applications.</li>
                            <li>Developing and Designing Front End applications with HTML5, CSS3 and JavaScript ES6 using frameworks like React, Redux, Bootstrap etc.</li>
                            <li>Developing Restful API (CRUD) with Controllers, Services, and Data Model (DL/DAO) using MySQL as DB.</li>
                            <li>Creating Jenkins Jobs to contribute the workflow of CICD with our projects.</li>
                            <li>Working with Git and GitHub as our version control Client for managing code and JIRA tasks workflow.</li>
                        </ul>
                    </div>
                </div>
            </main>
        );
    }
}