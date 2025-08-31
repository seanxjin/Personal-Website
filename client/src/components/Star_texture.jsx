import "./Star_texture.css";
import { motion } from "motion/react"
import { useState, useEffect } from "react"

export default function Star_texture({ children }) {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {

        const colors = ["#DEF6FF", "#A28AA6", "#9791BF", "#7C6EA3", "#193567", "#304B80", "#E5D7FF", "#CBECFF", "#BFE7FF", "#D0F3FF"];

        const generatedStars = [];

        for (let i = 0; i < 400; i++) {
            const chosenColor = colors[Math.floor(Math.random() * colors.length)];
            let star = {
                position: "absolute",
                top: ((Math.random() * 97) + 2).toString() + "%",
                left: ((Math.random() * 97) + 2).toString() + "%",
                width: ((Math.random() * 0.1) + 0.05).toString() + "rem",
                height: ((Math.random() * 0.1) + 0.05).toString() + "rem",
                background: chosenColor,
                borderRadius: "50%",
                filter: "brightness(3) contrast(4) blur(0.02rem)"
            };
            generatedStars.push(star);
        }
        setStars(generatedStars);
        const generatedMeteors = [];
        for (let i = 0; i < 10; i++) {
            let meteor = {
                position: "absolute",
                top: "-1rem",
                left: ((Math.random() * 75) + 20).toString() + "%",
                background: "white",
                filter: "blur(0.5px) brightness(3) contrast(500%)",
                borderRadius: "50%",
                width: "0.3rem",
                height: "0.3rem",
                tail: {
                    position: "absolute",
                    top: "10%",
                    width: 0,
                    height: "2px",
                    background: "linear-gradient(90deg, #ffffff, transparent)",
                }
            }
            generatedMeteors.push(meteor);
            setMeteors(generatedMeteors);
        }


    }, []);

    return (
        <div id="starry-canvas-container">
            {stars.map((star, index) => {
                return (
                    <div style={star} key={index} />
                );
            })}
            {meteors.map((meteor, index) => {
                const { tail, ...meteorStyles } = meteor;
                const sharedDelay = Math.random() * 3 + 2;
                const sharedRepeatDelay = Math.random() * 10 + 5;
                return (
                    <motion.div
                        key={index}
                        style={{ ...meteorStyles }}
                        initial={{
                            rotate: -45,
                            x: "0rem",
                            y: "0rem",
                            scale: 2,
                            opacity: 1
                        }}
                        animate={{
                            x: "-35rem",
                            y: "35rem",
                            scale: 0,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: sharedRepeatDelay,
                            delay: sharedDelay
                        }}>
                        <motion.div style={tail} initial={{
                            width: 0
                        }} animate={{
                            width: 200
                        }} transition={{
                            duration: 2,
                            ease: "easeOut",
                            repeat: Infinity,
                            repeatDelay: sharedRepeatDelay,
                            delay: sharedDelay
                        }}></motion.div>
                    </motion.div>
                );
            })}
            {children}
        </div>
    );
}