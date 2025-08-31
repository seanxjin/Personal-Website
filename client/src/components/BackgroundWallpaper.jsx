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

export default function BackgroundWallpaper({ scrollY }) {


    const leftTree = useTransform(scrollY, [0, 600], [0, -500]);
    const rightTree = useTransform(scrollY, [0, 600], [0, 500]);
    const birdMoveX = useTransform(scrollY, [0, 900], [0, 500]);
    const birdMoveY = useTransform(scrollY, [0, 900], [0, -150]);
    const leftMountain = useTransform(scrollY, [0, 900], [0, -300]);
    const rightMountain = useTransform(scrollY, [0, 900], [0, 300]);

    return (
        <div style={{height: "100%", width: "100%"}}>
            <motion.img src={leftForest} alt="forest" style={{
                width: "41%",
                height: "auto",
                position: "absolute",
                left: "0",
                bottom: "0",
                zIndex: "9",
                x: leftTree
            }}></motion.img>
            <motion.img src={rightForest} alt="forest" style={{
                width: "35%",
                height: "auto",
                position: "absolute",
                right: "0",
                bottom: "0",
                zIndex: "9",
                x: rightTree
            }}></motion.img>
            <motion.img src={mountainleft} alt="mountain" style={{
                width: "65%",
                height: "auto",
                position: "absolute",
                bottom: "0",
                zIndex: "7",
                x: leftMountain
            }}>
            </motion.img>
            <motion.img src={mountainRight} alt="mountain" style={{
                width: "64%",
                height: "auto",
                position: "absolute",
                bottom: "0",
                right: "0",
                zIndex: "6",
                x: rightMountain
            }}>
            </motion.img>
            <motion.img initial={{
                opacity: 0,
                x: -50,
                y: 50
            }} animate={{
                opacity: 1,
                x: 0,
                y: 0
            }} transition={{
                duration: 2,
                ease: "easeIn"
            }} src={bird1} alt="bird" style={{
                width: "2.4%",
                height: "auto",
                position: "absolute",
                bottom: "37%",
                right: "37%",
                zIndex: "7",
                x: birdMoveX,
                y: birdMoveY
            }}>
            </motion.img>
            <motion.img initial={{
                opacity: 0,
                x: -50,
                y: 50
            }} animate={{
                opacity: 1,
                x: 0,
                y: 0
            }} transition={{
                duration: 2,
                ease: "easeIn"
            }} src={bird2} alt="bird" style={{
                width: "2.3%",
                height: "auto",
                position: "absolute",
                bottom: "31%",
                right: "46%",
                zIndex: "7",
                x: birdMoveX,
                y: birdMoveY
            }}>
            </motion.img>
            <motion.img initial={{
                opacity: 0,
                x: -50,
                y: 50
            }} animate={{
                opacity: 1,
                x: 0,
                y: 0
            }} transition={{
                duration: 2,
                ease: "easeIn"
            }} src={bird3} alt="bird" style={{
                width: "2.4%",
                height: "auto",
                position: "absolute",
                bottom: "26%",
                right: "53%",
                zIndex: "7",
                x: birdMoveX,
                y: birdMoveY
            }}>
            </motion.img>
            <motion.img initial={{
                opacity: 0
            }} animate={{
                opacity: 1
            }} transition={{
                duration: 2,
                ease: "easeIn"
            }} src={bird5} alt="bird" style={{
                width: "2.7%",
                height: "auto",
                position: "absolute",
                bottom: "55%",
                right: "13%",
                zIndex: "7",
                x: birdMoveX,
                y: birdMoveY
            }}>
            </motion.img>
            <motion.img initial={{
                opacity: 0
            }} animate={{
                opacity: 1
            }} transition={{
                duration: 2,
                ease: "easeIn"
            }} src={bird7} alt="bird" style={{
                width: "2.7%",
                height: "auto",
                position: "absolute",
                bottom: "50%",
                right: "21%",
                zIndex: "7",
                x: birdMoveX,
                y: birdMoveY
            }}>
            </motion.img>
            <motion.img initial={{
                opacity: 0
            }} animate={{
                opacity: 1
            }} transition={{
                duration: 2,
                ease: "easeIn"
            }} src={bird8} alt="bird" style={{
                width: "2%",
                height: "auto",
                position: "absolute",
                bottom: "45%",
                right: "30%",
                zIndex: "7",
                x: birdMoveX,
                y: birdMoveY
            }}>
            </motion.img>

        </div>
    );
}