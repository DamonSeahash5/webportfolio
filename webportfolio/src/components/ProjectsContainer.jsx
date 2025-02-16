import classes from "./ProjectsContainer.module.css";
import Project from "../Project.jsx";

function Projectscontainer() {
    //initialise state for "Architecture / Software" projects tabs
    // const [projects, setProjects] = useState("Architecture");
    // const [activeProject, setActiveProject] = useState("null")

    function handleButtonClick() {
        //set the behaviour for changing Projects state. onClick of tabs/buttons
    };

    function handleProjectClick() {
        //controls which project is active and pops out. Needs to only do one at a time
    };

    return (
        <>
            <button className={classes.architectureButton}>Architecture</button>
            <button className={classes.softwareButton}>Software</button>
            <div className={classes.container}>
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </>
    );
};

export default Projectscontainer;