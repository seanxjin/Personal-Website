import { useRef, useImperativeHandle } from "react";
import "./ProjectModule.css";
import { createPortal } from "react-dom";
import { motion } from "motion/react"

export default function ProjectModule({ ref, image, title, description, date, skills }) {

    const dialogue = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogue.current.showModal();
            },
            close() {
                dialogue.current.close();
            }
        }
    });

    function handleBackdropClick(e) {
        if (e.target === dialogue.current) {
            dialogue.current.close();
        }
    }

    return createPortal(
        <motion.dialog ref={dialogue} className='project-dialogue' onClick={handleBackdropClick}>
            <div onClick={(e) => e.stopPropagation()} className='project-dialogue-div'>
                <img src={image} alt={title} className="dialog-image" />
                <div style={{ display: "flex", justifyContent: "space-around", width: "100%", marginBottom: "5%", fontFamily: "'Jersey 25'" }}>
                    <h1>{title}</h1>
                    <h1>{date}</h1>
                </div>
                <p style={{ textAlign: "center", marginBottom: "5%", padding: '0 2%', fontFamily: "'Jersey 25'" }}>{description}</p>
                <div style={{display: "flex", gap: "1%", fontFamily: "'Jersey 25'", color: "white", alignItems:"center"}}>
                    Skills:&nbsp;&nbsp;{skills.map((skill, index) => {
                        return (
                            <span
                                style={{
                                    borderRadius: "30px",
                                    border: "2px solid white",
                                    padding: "4px 12px",
                                }}
                                key={index}
                            >
                                {skill}
                            </span>
                        );
                    })}
                </div>
            </div>
        </motion.dialog>,
        document.getElementById("modal"));
}