import classes from "./Header.module.css";
import header from "../assets/header.svg";

function Header() {
    return (
        <>
            <div className={classes.header}>
            <div className={classes.textContainer}><h2>Oliver Benjamin Hopwood BAHons. M.Arch PGDip. RIBA</h2><p>An experienced, Newcastle based Architect who is in search of greater opportunity and impact in the Technology sector.
                I am seeking to position myself at the intersection of Software, Architecture and Sustainability,
                empowering other Construction professionals with building better tools. Outside of work,
                I’ll be either climbing rocks, catching waves or repairing my van.</p></div>
            </div>
        </>
    )
};

export default Header;