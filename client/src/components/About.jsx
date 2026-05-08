import "./About.css"
import profilePic from "../assets/profile_photo.jpg";
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
import Footer from "./Footer";
import Button1 from "./Button1";

export default function About() {

    return (
        <div id="about-container">
            <div id="about">
                <img
                    src={profilePic}
                    alt="Profile Pic"
                    style={{
                        objectFit: "cover",
                        width: "35%",
                        height: "auto",
                        borderRadius: "20px",
                        aspectRatio: "1.25 / 1",
                        minWidth: "200px",
                        flexShrink: 0
                    }}
                />
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2em",
                }}>
                    <h1 style={{
                        fontSize: "1.5em"
                    }}>
                        About Me
                    </h1>
                    <p style={{
                        fontSize: "1.2em"
                    }}>
                        With a strong foundation in software development, I am passionate about tackling complex challenges and developing solutions that create meaningful impact. 
                    </p>
                    <p>
                        My technical interests include full-stack development, data science, and AI/ML.
                    </p>
                    <p>
                        Outside of all that nerdiness, I enjoy long-distance running, exploring the outdoors, jamming on guitar, and playing badminton.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}