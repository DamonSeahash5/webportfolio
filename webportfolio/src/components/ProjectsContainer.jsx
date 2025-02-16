import classes from "./ProjectsContainer.module.css";
import Project from "../Project.jsx";
import { useState } from "react";

function Projectscontainer() {
    //initialise state for "Architecture / Software" projects tabs
    // const [projects, setProjects] = useState("Architecture");
    const [activeProject, setActiveProject] = useState(null)

    function handleButtonClick() {
        //set the behaviour for changing Projects state. onClick of tabs/buttons
    };

    function handleProjectClick(index) {
        //controls which project is active and pops out. Needs to only do one at a time
        setActiveProject(activeProject === index ? null : index);
    };

    return (
        <>
            <button className={classes.architectureButton}>Architecture</button>
            <button className={classes.softwareButton}>Software</button>
            <div className={classes.container}> {[0, 1, 2, 3].map((index) =>
                <Project
                    key={index}
                    isActive={activeProject === index}
                    onClick={() => handleProjectClick(index)}
                />
            )};
            </div>
        </>
    );
};

export default Projectscontainer;