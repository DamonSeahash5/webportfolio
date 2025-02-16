//Each project is a container that can pop out and enlarge when clicked and closes on 'x' button
//I will need an active /inactive state for each project
import classes from "./Project.module.css";

function Project({ isActive, onClick }) {
    return (
        <>
            <div className={`${classes.project} ${isActive ? classes.active : ""}`} onClick={onClick}>sampletext</div>
        </>
    );
};

export default Project;
