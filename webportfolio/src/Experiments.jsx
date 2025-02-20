// filepath "./src/Experiments.jsx"
import React from 'react';
import classes from "./Experiments.module.css";
import image1 from "./assets/Experiments/capture1newfiles.jpg"
import image2 from "./assets/Experiments/Capture3appjsx.jpg"

function Experiments() {
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
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen>
                    </iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/vTfMjI4rVSI?si=o-h1AGI4i1jmhunD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <p>Some takeaways: 3js is built on WebGL, which is quite basic, and adds way more functionality.</p>
                <a href="https://threejs.org/docs/index.html#manual/en/introduction/Installation" target="_blank" rel="noopener noreferrer">React Docs</a>
            </div>
        </div>
    );
};

export default Experiments;