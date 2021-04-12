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
                <h1 id="aboutTitle">Manifest</h1>
                <div id="contentBox">
                    <p id="aboutContent">“Manifest” is a web application designed to offer each of its users a customizable approach to making notes and visualizing ideas and tasks on-the-go. This web-hosted application is accessible from any browser and installable with minimal storage requirements so you can install it on your smart phone for when you don’t have access to the office you deserve. Manifest allows users to organize their notes in a non-linear format with resizable notes which can be easily manipulated. Users can be confident that their personal data never reaches our server and maintains optimal privacy.</p>
                    <p id="aboutContent">Manifest is inspired by those who think differently. Whether it’s for those with neuro-divergent minds, or for those who simply need more room for creativity, Manifest aims to give users the power of a pinboard and simplicity of a note app on their phone. It is our hope that by helping users express themselves, organize their ideas and manifest their dreams, we can improve productivity and mental health one note at a time.</p>
                    <p id="aboutContent">There are many different elements to our app that we have chosen. The design pillars focus on versatility, growth and a way to personalize the app to your own liking. The Manifest app is versatile and lets you, the user, customize it to suit your needs and there are many key features to personalizing the app. The functionality of the app is so the user can use it to stay organized and use the different features to stay on top of tasks, whether you need a reminder or you want to track your mood and your feelings.</p>
                </div>
                <h2 id="aboutTitle">Team</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" id="aboutTitle">Leads</Accordion.Toggle>
                    <div id="contentBox"><Accordion.Collapse eventKey="1">
                        <div>
                            <p id="aboutContent">
                                <li>
                                    Joshua Ducharme-Baribeau
                                </li>
                                <ul><li>
                                    Lead Producer - Project Oversight, Organization and Quality Assurance
                                </li>
                                <li>
                                    Email: joshuaducharmebaribeau@hotmail.com
                                </li>
                                <li>
                                    <a href="https://joshydb.wixsite.com/portfolio ">Portfolio</a>
                                </li></ul>
                                <li>
                                    Zachary Heil
                                </li>
                                <ul><li>
                                    Co-Producer, Programming Lead – Project Oversight and Technology 
                                </li>
                                <li>
                                    Email: zackjheil@gmail.com  
                                </li></ul>
                                <li>
                                    Hashim Khan
                                </li>
                                <ul><li>
                                    Director and Design Lead – Design team oversight, organization, UI/UX design 
                                </li>
                                <li>
                                    Email: hk18my@brocku.ca 
                                </li>
                                <li>
                                    <a href="https://hashimk99.wixsite.com/portfolio">Portfolio</a>
                                </li></ul>
                            </p>
                        </div>
                    </Accordion.Collapse></div>
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" id="aboutTitle">Designers</Accordion.Toggle>
                    <div id="contentBox"><Accordion.Collapse eventKey="1">
                        <p id="aboutContent">
                            <li>
                                Ethan Bowbyes
                            </li>
                            <ul><li>
                                UX/UI Design, Market Research 
                            </li>
                            <li>
                                Email: eb18gz@brocku.ca
                            </li>
                            <li>
                                <a href="https://ethanbowbyes.weebly.com">Portfolio</a>
                            </li></ul>
                            <li>
                                Annabelle Chan
                            </li>
                            <ul><li>
                                UX/UI Design
                            </li>
                            <li>
                                Email: okokannabelle@gmail.com
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/annabelle-chan-244323183/">LinkedIn</a>
                            </li></ul>
                            <li>
                                Fariha Khan
                            </li>
                            <ul><li>
                                2D Concept Artist
                            </li>
                            <li>
                                <a href="https://www.senpai-khan.com">Portfolio</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/fariha-senpai-khan-a218321a3/">LinkedIn</a>
                            </li></ul>
                            <li>
                                Eugene Payne
                            </li>
                            <ul><li>
                                UX/UI Design
                            </li>
                            <li>
                                Email: jago20002010@gmail.com
                            </li></ul>
                        </p>
                    </Accordion.Collapse></div>
                </Accordion>
                <Accordion defaultActiveKey="0">
                    <Accordion.Toggle as={Button} variant="link" eventKey="1" id="aboutTitle">Developers</Accordion.Toggle>
                    <div id="contentBox"><Accordion.Collapse eventKey="1">
                        <p id="aboutContent">
                            <li>
                                Jem Generalao
                            </li>
                            <ul><li>
                                Lead Front-End Programmer - Features and Styling
                            </li>
                            <li>
                                Email: j.generalao@hotmail.com
                            </li>
                            <li>
                                <a href="https://www.jemgeneralao.com">Portfolio</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/jgeneralao/">LinkedIn</a>
                            </li></ul>
                            <li>
                                Argha Ghosh Dastidar
                            </li>
                            <ul><li>
                                Programmer - Data Handling and Technical Programming 
                            </li>
                            <li>
                                Email: arghaghoshd@gmail.com
                            </li>
                            <li>
                                <a href="https://digitalesca9e.github.io/arghas-space/#/">Portfolio</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/argha-ghosh-dastidar-549a69142/">LinkedIn</a>
                            </li></ul>
                            <li>
                                Alexander Jogie
                            </li>
                            <ul><li>
                                Programmer - Features and Styling
                            </li>
                            <li>
                                Email: jogiealexander@gmail.com
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/alexander-jogie-6281a8187/">LinkedIn</a>
                            </li></ul>
                        </p>
                    </Accordion.Collapse></div>
                </Accordion>
            </div>
        )
    }
}

export default About;