import Navbar from "../components/navbar";
import { motion } from "motion/react";
import "./projects.css";
import ProjectCard from "../components/ProjectCard";



function Projects() {

    return (
        
        <div id="projects-container">
            <Navbar />
            <motion.section id="projects-inner-container"
                variants={{
                    start: {opacity: 0},
                    end: {opacity: 1, transition: {staggerChildren: 0.2}}
                }}
                initial="start"
                animate="end"
            >
                <motion.h1
                    variants={{
                        start: { opacity: 0, scale: 0.5 },
                        end: { opacity: 1, scale: 1 }
                    }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 500 }} style={{fontSize: "250%"}}>
                    My Projects
                </motion.h1>
                <div id="projects-card-container">
                    <ProjectCard image="/Bloggo.png" title="Bloggo" description="Built a blogging platform with a clean, dynamic interface for creating and sharing posts. Focused on smooth interactions and reliable content management for an easy user experience." date="2025 May - 2025 July"/>
                    <ProjectCard image="/BrickBreaker.png" title="Brick Breaker" description="Hello" date="2024 Jan - 2024 March"/>
                </div>
            </motion.section>

        </div>
    );
}

export default Projects;