import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Button1.css";



export default function Button1({ name, link, left, styles }) {

    const [hovered, setHovered] = useState(false);

    const MotionLink = motion.create(Link);
    
    return (
        <MotionLink className="button" onHoverStart={() => setHovered(true)} onHoverEnd={() => setHovered(false)} whileHover={left ? { x: "5%" } : { x: "-5%" }} to={link} style={{...styles}}>
            {hovered ? left ? <span>&lt;&nbsp;&nbsp;&nbsp;&nbsp;{name}</span> : <span>{name}&nbsp;&nbsp;&nbsp;&nbsp;&gt;</span> : name}
        </MotionLink>
    );
}