import React from 'react';
import {Link} from 'react';
import { Component } from 'react';
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
            </div>
        )
    }
}

export default About;