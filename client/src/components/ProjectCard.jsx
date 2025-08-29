import "./ProjectCard.css";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import ProjectModule from "./ProjectModule";

export default function ProjectCard({ image, title, description, date, skills }) {

    const [showOverlay, setShowOverlay] = useState(false);
    const dialogue = useRef();

    function handleClick() {
        dialogue.current.open();
    }



    return (
        <>
            <ProjectModule ref={dialogue} image={image} title={title} description={description} date={date} skills={skills} />
            <motion.div className="project-image-container" onClick={handleClick}
                onHoverStart={() => setShowOverlay(true)}
                onHoverEnd={() => setShowOverlay(false)}
                variants={{
                    start: { opacity: 0, scale: 0.8 },
                    end: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.2, type: "spring", stiffness: 500 }}>
                <img src={image} alt={title} />
                {showOverlay && <div className="image-overlay">
                    <span style={{ fontFamily: "'Jersey 25', sans-serif", letterSpacing: "2px", fontSize: "200%" }}>
                        Learn More
                    </span></div>}
            </motion.div>
        </>
    );
}