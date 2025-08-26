import Navbar from "../components/navbar";
import "./projects.css";

import { useScroll } from "motion/react";

function Projects() {
    return (
        <div id="projects-container">
            <Navbar />
            <div id="projects-title">
                <h1>
                    My Projects
                </h1>
            </div>
            
        </div>
    );
}

export default Projects;