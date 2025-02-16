import classes from "./ProjectsContainer.module.css";
import Project from "./Project.jsx";
import { useState } from "react";
import projectsData from "./ProjectsDB.jsx";

function Projectscontainer() {
    //initialise state for "Architecture / Software" projects tabs
    const [activeCategory, setActiveCategory] = useState("architecture");
    const [activeProject, setActiveProject] = useState(null);

    const filteredProjects = projectsData.filter(project => project.category === activeCategory);

    function handleProjectClick(index) {
        //controls which project is active and pops out. Needs to only do one at a time
        setActiveProject(activeProject === index ? null : index);
    };

    return (
        <>
            <div className={classes.buttonContainer}>
                <button
                    className={`${classes.architectureButton} ${activeCategory === "architecture" ? classes.active : ""}`}
                    onClick={() => setActiveCategory("architecture")}>Architecture</button>
                <button
                    className={`${classes.softwareButton} ${activeCategory === "software" ? classes.active : ""}`}
                    onClick={() => setActiveCategory("software")}>Software</button>
            </div>
            <div
                className={classes.container}>  {filteredProjects.map((project, index) => (
                    <Project
                        key={project.id}
                        title={project.title}
                        type={project.type}
                        content={project.content}
                        isActive={activeProject === index}
                        onClick={() => handleProjectClick(index)}
                    />
                ))};
            </div>
        </>
    );
};

export default Projectscontainer;