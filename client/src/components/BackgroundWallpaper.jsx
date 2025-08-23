import "./BackgroundWallpaper.css";
import leftForest from "../assets/left-layer1.svg";
import rightForest from "../assets/right-layer1.svg";
import mountainleft from "../assets/mountain1.svg";
import mountainRight from "../assets/mountain2.svg";
import bird1 from "../assets/bird1.svg";
import bird2 from "../assets/bird2.svg";
import bird3 from "../assets/bird3.svg";
import bird5 from "../assets/bird5.svg";
import bird7 from "../assets/bird7.svg";
import bird8 from "../assets/bird8.svg";
import { motion, useTransform } from "motion/react";

export default function BackgroundWallpaper({ scrollYProgress }) {


    const leftTree = useTransform(scrollYProgress, [0, 1], [0, -450]);
    const rightTree = useTransform(scrollYProgress, [0, 1], [0, 450]);
    const birdMoveX = useTransform(scrollYProgress, [0, 1], [0, 900]);
    const birdMoveY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const leftMountain = useTransform(scrollYProgress, [0, 1], [0, -225]);
    const rightMountain = useTransform(scrollYProgress, [0, 1], [0, 225]);

    console.log(leftTree);


    return (
        <>
            <motion.img src={leftForest} alt="forest" style={{
                position: "absolute",
                left: "0",
                bottom: "0",
                zIndex: "9",
                x: leftTree
            }}></motion.img>
            <motion.img src={rightForest} alt="forest" style={{
                position: "absolute",
                right: "0",
                bottom: "0",
                zIndex: "9",
                x: rightTree
            }}></motion.img>
            <motion.img src={mountainleft} alt="mountain" style={{
                position: "absolute",
                bottom: "0",
                zIndex: "7",
                x: leftMountain
            }}>
            </motion.img>
            <motion.img src={mountainRight} alt="mountain" style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                zIndex: "6",
                x: rightMountain
            }}>
            </motion.img>
            <motion.img src={bird1} alt="bird" style={{
                position: "absolute",
                bottom: "20rem",
                right: "27rem",
                zIndex: "7",
                x: birdMoveX,
                y: birdMoveY
            }}>
            </motion.img>
            <motion.img src={bird2} alt="bird" style={{
                position: "absolute",
                bottom: "16rem",
                right: "33rem",
                zIndex: "7",
                x: birdMoveX,
                y: birdMoveY
            }}>
            </motion.img>
            <motion.img src={bird3} alt="bird" style={{
                position: "absolute",
                bottom: "13rem",
                right: "40rem",
                zIndex: "7",
                x: birdMoveX,
                y: birdMoveY
            }}>
            </motion.img>
            <motion.img src={bird5} alt="bird" style={{
                position: "absolute",
                bottom: "18rem",
                right: "23rem",
                zIndex: "7",
                x: birdMoveX,
                y: birdMoveY
            }}>
            </motion.img>
            <motion.img src={bird7} alt="bird" style={{
                position: "absolute",
                bottom: "25rem",
                right: "20rem",
                zIndex: "7",
                x: birdMoveX,
                y: birdMoveY
            }}>
            </motion.img>
            <motion.img src={bird8} alt="bird" style={{
                position: "absolute",
                bottom: "25rem",
                right: "29rem",
                zIndex: "7",
                x: birdMoveX,
                y: birdMoveY
            }}>
            </motion.img>

        </>
    );
}