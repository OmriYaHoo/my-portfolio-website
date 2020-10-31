import React, {Component} from 'react';
import portrait from "../assets/portrait1.jpg"

export default class About extends Component {
    render() {
        let pipe = <span className="text-secondary"> | </span>
        return (
            <main id="about">
                <h1 className="lg-heading">
                    About <span className="text-secondary">Me</span>
                </h1>

                <h2 className="sm-heading">
                    <span className="text-secondary"><b>Skills and Knowledge: </b></span> Java {pipe} MySQL {pipe} Postgres {pipe} MongoDB {pipe}
                    HTML5 {pipe} CSS3 {pipe} JavaScript {pipe} NodeJS {pipe} Webpack {pipe} JIRA {pipe} Confluence {pipe} IntelliJ {pipe} VSCode {pipe} Maven {pipe}
                    Gradle {pipe} JMeter {pipe} SpringBoot {pipe} RestAPI {pipe} GraphQL {pipe} Linux {pipe} Windows {pipe} OOP {pipe} Hibernate {pipe} Docker {pipe}
                    Kubernetes {pipe} Helm {pipe} Slack {pipe} Jenkins {pipe} CICD {pipe} ELK {pipe} Splunk {pipe} Git {pipe} GitHub {pipe} GitLab {pipe} NewRelic
                </h2>
                
                <div className="about-info">
                    <img src={portrait} alt="Omri Ratson" className="bio-image"/>
                    <div className="bio">
                        <h3 className="text-secondary">BIO</h3>
                        <p>Hi there! my name is Omri Ratson. I'm a Software Developer and general tech enthusiast that
                            is always happy to learn new
                            technologies. I am highly analytical with great problem solving and fast self-learning
                            skills. I have excellent written and verbal communication skills, good interpersonal skills
                            and teamwork competencies.
                        </p>
                    </div>

                    <div className="job job-1">
                        <h2>FUNDtech</h2>
                        <h3>QA Automation</h3>
                        <h4>2014 - 2015</h4>
                        <p>Now part of D+H FUNDtech is a company that specialized in developing banking & clearing
                            systems.</p>
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
                        <p>Amdocs is a leading company developing telemarketing solutions for major leading companies
                            like AT&T, Comcast etc.<br/>I took part in NFV Team which developed new virtual network
                            infrastructure solution to make our day to day mobile network autonomous which solves many
                            issues we are facing today and in the future.</p>
                        <ul>
                            <li>Design and develop a complex in-house testing framework to run functional and
                                performance tests.
                            </li>
                            <li>Developing CICD tools using JAVA, JavaScript, Bash scripts based on Jenkins platform.
                            </li>
                            <li>Working with JMeter to automate environment testing for System API and UI (Using
                                Selenium).
                            </li>
                            <li>Operational experience in running cloud infrastructure. (Openstack)</li>
                        </ul>
                    </div>

                    <div className="job job-3">
                        <h2>Intuit</h2>
                        <h3>Fullstack Developer</h3>
                        <h4>2016 - 2018</h4>
                        <p>Intuit is one of the if not the most influential FinTech company in the US. They specialized
                            in developing financial products like QuickBooks, TurboTax, Mint and more.</p>
                        <ul>
                            <li>Design applications from user perspective down to technical service capabilities.</li>
                            <li>Developing Java-based lightweight services/applications using the SpringBoot
                                framework.
                            </li>
                            <li>Design and develop FE applications with JavaScript ES6 using ReactJS, Redux, Bootstrap,
                                etc.
                            </li>
                            <li>Developing Restful API (CRUD) with Controllers, Services, and Data Model (DL/DAO) using
                                MySQL as DB.
                            </li>
                            <li>Creating Jenkins Jobs to contribute to the workflow of CICD with our projects.</li>
                            <li>Working with Git and GitHub as our version control Client for managing code and JIRA
                                tasks workflow.
                            </li>
                        </ul>
                    </div>

                    <div className="job job-4">
                        <h2>Viacces-Orca</h2>
                        <h3>Software Developer</h3>
                        <h4>2019 - 2020</h4>
                        <p>Viaccess-Orca is a company that develops OTT and TV platforms, content protection and
                            advanced data solutions for a personalized TV experience.</p>
                        <ul>
                            <li>Developing services in a micro-services architecture with Spring-Boot.</li>
                            <li>Working with OS technologies: MongoDB, Zookeeper, Kafka, Kong API gateway, and Spring
                                echo system.
                            </li>
                            <li>Strong emphasis on working with Docker and Kubernetes – creating images and management
                                of K8s YAMLs.
                            </li>
                            <li>Managing CICD with GitLab and Jenkins.</li>
                            <li>Developing a solution system for AWS as well as on-premise deployments.</li>
                        </ul>
                    </div>

                    <div className="job job-5">
                        <h2>SAP Concur</h2>
                        <h3>Software Developer</h3>
                        <h4>2020 - Today</h4>
                        <p>SAP Concur is world-leading in Expense, Travel, and Invoice management systems. I’m part of
                            the team that is developing a system for anomaly and fraud detection in the expense report
                            solution.</p>
                        <ul>
                            <li>Design and develop microservices with Spring-Boot (Java 11) with Gradle 6 build system
                                and MySQL as DB. and wrapping them as a Docker image for deployment.
                            </li>
                            <li>Developing FE apps with ReactJS, React-Router, Redux, and Webpack as the bundler.</li>
                            <li>Design and develop unit/integration tests for regressions verification.</li>
                            <li>Manage all projects with Git via GitHub.</li>
                            <li>Deployment with Jenkins jobs onto Kubernetes clusters for environments that runs on
                                AWS.
                            </li>
                            <li>Monitoring of Applications with ELK stack, NewRelic, and Slack alerts.</li>
                            <li>Integration with other teams systems.</li>
                        </ul>
                    </div>
                </div>
            </main>
        );
    }
}
