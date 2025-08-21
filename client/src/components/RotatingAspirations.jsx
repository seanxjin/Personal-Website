import { useState, useEffect } from "react";
import "./RotatingAspirations.css";
import { AnimatePresence, motion } from "motion/react";

const aspireMessage = "An Aspiring ";
const aspireRotation = ["Data Scientist", "Developer", "Explorer", "Learner", "Adventurer", "Creator"];

export default function RotatingAspirations() {

    const [title, setTitle] = useState(0);

    useEffect(() => {
        const number = setInterval(() => {
            setTitle((prev) => (prev + 1) % aspireRotation.length);
        }, 5000);

        return () => clearInterval(number);
    });


    return (
        <div style={{ display: "block", paddingTop: "1rem"}}>
            {aspireMessage.split("").map((char, index) => {
                return (
                    <motion.span
                        className='title-name-aspiring-text'
                        key={index}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1 }
                        }}>{char}</motion.span>
                );

            })}
            <AnimatePresence mode="wait">
                <motion.span key={aspireRotation[title]} className="title-name-aspiring-text"
                    variants={{
                        hidden: {opacity: 0},
                        visible: { opacity: 1}
                    }}
                    exit={{ opacity: 0, transition: { duration: 1 } }}>{aspireRotation[title]}</motion.span>
            </AnimatePresence>
        </div>
    );
}




