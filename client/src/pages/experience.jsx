import Navbar from "../components/navbar";
import Star_texture from "../components/Star_texture";
import BackgroundWallpaper from "../components/BackgroundWallpaper";
import Footer from "../components/Footer";
import Button1 from "../components/Button1";
import { motion } from "motion/react";
import { useScroll } from "motion/react";
import "./experience.css";

const introMessage = "My Experiences";

function Experience() {

    const { scrollY } = useScroll();

    return (
        <>
            <Navbar />
            <Star_texture>
                <BackgroundWallpaper scrollY={scrollY} />
                <motion.div
                    style={{
                        width: "100%",
                        height: "100vh",
                        display: "flex",
                        paddingLeft: "10%",
                        alignItems: "center",
                        fontSize: "300%",
                        letterSpacing: "5px",
                        textShadow: "0 0 10px white"
                    }}
                    variants={{
                        hidden: { opacity: 0, },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    {introMessage.split("").map((char, index) => {
                        return (
                            <motion.span
                                style={{
                                    color: "white",
                                    fontFamily: "Boldonse, system-ui"
                                }}
                                key={index}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 }
                                }}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        );
                    })}
                </motion.div>
            </Star_texture>
            <div id="experience-container">
                <div style={{
                    display: "flex",
                    height: "50%",
                    flexDirection: "column",
                    justifyContent: "end",
                    alignItems: "center"
                }}>
                    <h1>C o m i n g&nbsp;&nbsp; S o o n !</h1>
                </div>
                <div style={{ padding: "1% 10% 0 10%" }}>
                <div style={{ width: "100%", display: "flex", justifyContent: "space-between", paddingTop: "10%" }}>
                    <Button1 name="Home" link="/" left={true} />
                    <Button1 name="Projects" link="/projects" left={false} />
                </div>
                <Footer />
                </div>
            </div >
        </>
    );
}

export default Experience;