// filepath "./src/Experiments.jsx"
import classes from "./Experiments.module.css";
import image1 from "./assets/Experiments/capture1newfiles.jpg"

import React from 'react';

function Experiments() {
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Experiments page</h1>
            <img src={image1} className={classes.images} />
        </div>
    );
};

export default Experiments;