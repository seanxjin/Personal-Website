import "./Achievement.css";
import { motion } from "motion/react";
import node from "../assets/nodejs.svg";

export default function Achievement({ image }) {
    return (
        <>
        <img src={node} alt="achievement-image" />
        <p>Hello this is a test run</p>
        </>
    );
}