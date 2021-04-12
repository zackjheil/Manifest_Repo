import React from 'react';
import {Link} from 'react';
import { Component } from 'react';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import './About.css';

class About extends Component 
{
    render()
    {
        return(
            <div id="text-position">
                <center> <h1 id="aboutTitle">Manifest</h1> 
                <div id="contentBox">
                    <p id="aboutContent">“Manifest” is a web application designed to offer each of its users a customizable approach to making notes and visualizing ideas and tasks on-the-go. This web-hosted application is accessible from any browser and installable with minimal storage requirements so you can install it on your smart phone for when you don’t have access to the office you deserve. Manifest allows users to organize their notes in a non-linear format with resizable notes which can be easily manipulated. Users can be confident that their personal data never reaches our server and maintains optimal privacy.</p>
                    <p id="aboutContent">Manifest is inspired by those who think differently. Whether it’s for those with neuro-divergent minds, or for those who simply need more room for creativity, Manifest aims to give users the power of a pinboard and simplicity of a note app on their phone. It is our hope that by helping users express themselves, organize their ideas and manifest their dreams, we can improve productivity and mental health one note at a time.</p>
                    <p id="aboutContent">There are many different elements to our app that we have chosen. The design pillars focus on versatility, growth and a way to personalize the app to your own liking. The Manifest app is versatile and lets you, the user, customize it to suit your needs and there are many key features to personalizing the app. The functionality of the app is so the user can use it to stay organized and use the different features to stay on top of tasks, whether you need a reminder or you want to track your mood and your feelings.</p>
                </div>
                <h2 id="aboutTitle">Team</h2></center>
                <Accordion defaultActiveKey="0">
                    <center><Accordion.Toggle as={Button} variant="link" eventKey="1" id="aboutSubtitle"><h5 id="accordionButton">Leads</h5></Accordion.Toggle></center>
                        <div id="contentBox"><Accordion.Collapse eventKey="1">
                            <div id="aboutContent">
                            
                                <h5 id="nameHeader">
                                    Joshua Ducharme-Baribeau
                                </h5>
                                    <p id="aboutSubtitle">
                                        Lead Producer - Project Oversight, Organization and Quality Assurance
                                    </p>
                                        <ul><li>
                                            Email: joshuaducharmebaribeau@hotmail.com
                                        </li>
                                        <li>
                                            <a href="https://joshydb.wixsite.com/portfolio ">Portfolio</a>
                                        </li></ul>

                                <h5 id="nameHeader">
                                    Zachary Heil
                                </h5>
                                    <p id="aboutSubtitle">
                                        Co-Producer, Programming Lead – Project Oversight and Technology 
                                    </p>
                                    <ul><li>
                                        Email: zackjheil@gmail.com  
                                    </li></ul>

                                <h5 id="nameHeader">
                                    Hashim Khan
                                </h5>
                                    <p id="aboutSubtitle">
                                        Director and Design Lead – Design team oversight, organization, UI/UX design 
                                    </p>
                                    <ul><li>
                                        Email: hk18my@brocku.ca 
                                    </li>
                                    <li>
                                        <a href="https://hashimk99.wixsite.com/portfolio">Portfolio</a>
                                    </li></ul>

                            </div>
                        </Accordion.Collapse></div>
                </Accordion>

                <Accordion defaultActiveKey="0">
                    <center><Accordion.Toggle as={Button} variant="link" eventKey="1" id="aboutSubtitle"> <h5>Designers</h5> </Accordion.Toggle></center>
                    <div id="contentBox"><Accordion.Collapse eventKey="1">
                        <div id="aboutContent">
                            <h5 id="nameHeader" id="nameHeader">
                                Ethan Bowbyes
                            </h5>
                                <p id="aboutSubtitle">
                                    UX/UI Design, Market Research 
                                </p>
                                <ul><li>
                                    Email: eb18gz@brocku.ca
                                </li>
                                <li>
                                    <a href="https://ethanbowbyes.weebly.com">Portfolio</a>
                                </li></ul>
                            <h5 id="nameHeader">
                                Annabelle Chan
                            </h5>
                                <p id="aboutSubtitle">
                                    UX/UI Design
                                </p>
                                <ul><li>
                                    Email: okokannabelle@gmail.com
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/annabelle-chan-244323183/">LinkedIn</a>
                                </li></ul>
                            <h5 id="nameHeader">
                                Fariha Khan
                            </h5>
                                <p id="aboutSubtitle">
                                    2D Concept Artist
                                </p>
                                <ul><li>
                                    <a href="https://www.senpai-khan.com">Portfolio</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/fariha-senpai-khan-a218321a3/">LinkedIn</a>
                                </li></ul>
                            <h5 id="nameHeader">
                                Eugene Payne
                            </h5>
                                <p id="aboutSubtitle">
                                    UX/UI Design
                                </p>
                                <ul><li>
                                    Email: jago20002010@gmail.com
                                </li></ul>

                        </div>
                    </Accordion.Collapse></div>
                </Accordion>
                
                <Accordion defaultActiveKey="0">
                <center><Accordion.Toggle as={Button} variant="link" eventKey="1" id="aboutSubtitle"><h5>Developers</h5></Accordion.Toggle></center>
                    <div id="contentBox"><Accordion.Collapse eventKey="1">
                        <div id="aboutContent">
                            <h5 id="nameHeader">
                                Jem Generalao
                            </h5>
                                <p id="aboutSubtitle">
                                    Lead Front-End Programmer - Features and Styling
                                </p>
                                <ul><li>
                                    Email: j.generalao@hotmail.com
                                </li>
                                <li>
                                    <a href="https://www.jemgeneralao.com">Portfolio</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/jgeneralao/">LinkedIn</a>
                                </li></ul>
                            <h5 id="nameHeader">
                                Argha Ghosh Dastidar
                            </h5>
                                <p id="aboutSubtitle">
                                    Programmer - Data Handling and Technical Programming 
                                </p>
                                <ul><li>
                                    Email: arghaghoshd@gmail.com
                                </li>
                                <li>
                                    <a href="https://digitalesca9e.github.io/arghas-space/#/">Portfolio</a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/argha-ghosh-dastidar-549a69142/">LinkedIn</a>
                                </li></ul>
                            <h5 id="nameHeader">
                                Alexander Jogie
                            </h5>
                                <p id="aboutSubtitle">
                                    Programmer - Features and Styling
                                </p>
                                <ul><li>
                                    Email: jogiealexander@gmail.com
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/alexander-jogie-6281a8187/">LinkedIn</a>
                                </li></ul>
                                
                        </div>
                    </Accordion.Collapse></div>
                </Accordion>
            </div>
        )
    }
}

export default About;