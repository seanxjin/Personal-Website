import "./About.css"
import profilePic from "../assets/profile.jpg";
import javascriptIcon from "../assets/javascript.svg";
import expressIcon from "../assets/express.svg";
import motionIcon from "../assets/motion.svg";
import nodeIcon from "../assets/nodejs.svg";
import postgresIcon from "../assets/postgresql.svg";
import reactIcon from "../assets/react.svg";
import sqliteIcon from "../assets/sqlite.svg";
import pythonIcon from "../assets/python.svg";
import Icon from "./Icon";
import { motion } from "motion/react";

export default function About() {
    return (
        <div id="about-container">
            <div id="about">
                <motion.img
                    src={profilePic}
                    alt="Profile Pic"
                    style={{
                        objectFit: "cover",
                        width: "25rem",
                        height: "25rem",
                        borderRadius: "20px"
                    }}
                    variants={{
                        hidden: { opacity: 0, y: 200 },
                        inView: { opacity: 1, y: 0 }
                    }}
                    initial='hidden' whileInView='inView' transition={{ duration: 1.5, type: "tween", ease: "easeOut" }}
                />
                <motion.div variants={{
                    hidden: {},
                    inView: {}
                }} initial='hidden' whileInView='inView'
                    id="about-content-container">
                    <motion.h1 variants={{
                        hidden: { opacity: 0, x: 200 },
                        inView: { opacity: 1, x: 0 },
                    }}
                        transition={{ duration: 1, type: "tween", ease: "easeOut" }}
                    >
                        Sean Jin
                    </motion.h1>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, x: 200 },
                            inView: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 1, delay: 0.3, type: "tween", ease: "easeOut" }}>
                        Hello! I'm a 2nd year CS + Stats Major at the University of British Columbia. I like working on fun brain teaser problems and cool projects that challenge my creativity and problem-solving skills!
                    </motion.p>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, x: 200 },
                            inView: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 1, delay: 0.6, type: "tween", ease: "easeOut" }}>
                        My technical interests include full-stack development, data science, and AI/ML
                    </motion.p>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, x: 200 },
                            inView: { opacity: 1, x: 0 }
                        }}
                        transition={{ duration: 1, delay: 0.9, type: "tween", ease: "easeOut" }}>
                        Outside of all that nerdiness, I enjoy long-distance running, exploring the outdoors, jamming on guitar, and playing badminton.
                    </motion.p>
                    <div id="about-skills-container">
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, x: 200 },
                                inView: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 1, delay: 1.2, type: "tween", ease: "easeOut" }}
                            style={{ marginBottom: "1.5rem" }}>Technologies</motion.h2>
                        <motion.div
                            variants={{
                                hidden: { opacity: 0 },
                                inView: { opacity: 1 }
                            }}
                            transition={{ duration: 1, delay: 1.5, type: "tween", ease: "easeIn" }} id="about-skills-icons">
                            <Icon image={javascriptIcon} alt="javascript-icon" />
                            <Icon image={nodeIcon} alt="node-icon" />
                            <Icon image={expressIcon} alt="express-icon" />
                            <Icon image={reactIcon} alt="react-icon" />
                            <Icon image={motionIcon} style={{ backgroundColor: "yellow" }} alt="motion-icon" />
                            <Icon image={postgresIcon} alt="postgres-icon" />
                            <Icon image={sqliteIcon} alt="sqlite-icon" />
                            <Icon image={pythonIcon} alt="python-icon" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}