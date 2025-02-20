// filepath "./src/Experiments.jsx"
import React from 'react';
import { useState } from "react";
// import { onClick, isActive } from "./App.jsx"
import classes from "./Experiments.module.css";
import ThreeDComponent from './components/Threejstestcomponent.jsx';
import image1 from "./assets/Experiments/capture1newfiles.jpg";
import image2 from "./assets/Experiments/Capture3appjsx.jpg";
import image6 from "./assets/Experiments/capture6component.jpg";

function Experiments({ onClick, isActive }) {
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Experiments page</h1>
            <p> </p>
            <div className={classes.content}>
                <p>This page is going to explore how I can implement interactive 3D elements in Javascript. I am doing this so it can lead to me hosting my own 3D Architectural models on my site.</p>
                <p>I am going to update the page as I develop these skills and hopefully the result should be a blog-like tutorial. I'm also working on my React skills as I go.</p>
                <div className={classes.inLineDiv}>
                    <img src={image1} className={classes.images} alt="file tree" />
                    <div>
                        <p>Firstly, I've added a page and a new route, /Experiments.jsx, to my site. Because it's a single page app, React is rendering this in my App component alongside the main page, but the route determines what is actually rendered. Because I'm using React-router-dom.
                        </p>
                        <p>I also created a vercel.json file to tell Vercel to rewrite the application's routes.</p>
                    </div>
                </div>
                <img src={image2} className={classes.images} alt="app\.jsx" />
                <div className={classes.inLineDiv}>
                    <p>
                        I'm making custom React components which I can render here. Each one can have a different content such as, hopefully, some 3D javascript wizardry.
                        I'm also going to try to embed a model using the Autodesk Viewer API. But that's definitely a Stretch goal.
                    </p>
                    <p></p>
                </div>
                <h3>Firstly, Research</h3>
                <div className={classes.videoContainer}>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/ZHZh6S9b6DY?si=jkcdyQGPYaSE71XD"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen>
                    </iframe>
                    <iframe width="560"
                        height="315"
                        src="https://www.youtube.com/embed/vTfMjI4rVSI?si=o-h1AGI4i1jmhunD"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
                <p>Some takeaways: 3js is built on WebGL, which is quite basic, and adds way more functionality.</p>
                <a href="https://threejs.org/docs/index.html#manual/en/introduction/Installation" target="_blank" rel="noopener noreferrer">React Docs</a>
                <p>I've installed Three and the docs are telling me to use npx-serve. I have prepared a production build with 'npm build' and am serving it with 'npx -s serve'. But currently. I have 404.</p>
                <p>The issue was because I needed to add a serve scripte to my package.json. I then had a compatibility issue between Vite and serve, but get around this by using 'npm run preview' which uses Vite to build instead.</p>
                <p>So now I understand why there's a difference between 'run dev' and a production build. 'run dev' doesn't need to be built so can be previewed instantly, without having to build and then serve on each code update.</p>
            </div>
            <div>
                <p>It works! the cube above is rendered in the DOM and then the user can interact with it. you can scroll in and pan around. The code looks like this:</p>
                <img src={image6} className={`${classes.images} ${isActive ? classes.active : ""}`} alt="app\.jsx" onClick={onClick} />
            </div>
            <ThreeDComponent />
        </div>
    );
};

export default Experiments;