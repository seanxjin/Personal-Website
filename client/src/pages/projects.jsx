import Navbar from "../components/Navbar";
import { motion } from "motion/react";
import "./projects.css";
import ProjectCard from "../components/ProjectCard";
import Star_texture from "../components/Star_texture";
import Button1 from "../components/Button1";
import Footer from "../components/Footer";



function Projects() {

    return (
        <>

            <Navbar />
            <Star_texture>
                <motion.div id="projects-inner-container"
                    variants={{
                        start: { opacity: 0 },
                        end: { opacity: 1, transition: { staggerChildren: 0.2 } }
                    }}
                    initial="start"
                    animate="end"
                >
                    <motion.h1
                        variants={{
                            start: { opacity: 0, scale: 0.5 },
                            end: { opacity: 1, scale: 1 }
                        }}
                        transition={{ duration: 0.2, type: "spring", stiffness: 500 }} style={{ fontSize: "3.2vw", fontFamily: "Boldonse" }}>
                        My Projects
                    </motion.h1>
                    <div id="projects-card-container">
                        <ProjectCard image="/Bloggo.png" title="Bloggo" description="Built a blogging platform with a clean, dynamic interface for creating and sharing posts. Focused on smooth interactions and reliable content management for an easy user experience." date="2025 May - 2025 Jul" skills={["Javascript", "Express", "Nodejs", "PostgresDB", "EJS"]}/>
                        <ProjectCard image="/BrickBreaker.png" title="Brick Breaker" description="A Brick Breaker game was developed using Python and Pygame, inspired by the classic arcade style. The game features paddle controls, ball physics, and collision detection for realistic movement. Additional elements such as scoring, level progression, and increasing difficulty keep gameplay engaging." date="2024 Jan - 2024 Mar" skills={["Python", "SQlite3"]}/>
                    </div>
                </motion.div>
                <div style={{padding: "1% 10%"}}>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "4rem" }}>
                    <Button1 name="Home" link="/" left={true} />
                        <Button1 name="Experiences" link="/experience" left={false} />
                </div>
                    <Footer />
                </div>
            </Star_texture>
        </>
    );
}

export default Projects;