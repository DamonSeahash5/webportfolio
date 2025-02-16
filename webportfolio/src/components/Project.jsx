//Each project is a container that can pop out and enlarge when clicked and closes on 'x' button
//I will need an active /inactive state for each project
import classes from "./Project.module.css";

function Project({ title, type, content, isActive, onClick }) {
    return (
        <>
            <div className={`${classes.project} ${isActive ? classes.active : ""}`} onClick={onClick}>
                <h3>{title}</h3>
                {type === "image" && <img src={content} alt={title} className={classes.projectImage} />}
                {type === "text" && <p>{content}</p>}
                {type === "component" && <div className={classes.projectComponent}>{content}</div>}
                {isActive && (
                    <button className={classes.closeButton} onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering parent click
                        onClick(null); // Collapse project
                    }}>
                        ✖ Close
                    </button>
                )}
            </div>
        </>
    );
};

export default Project;
