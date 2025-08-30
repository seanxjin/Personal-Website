import './home.css';
// Components
import Navbar from "../components/Navbar";
import Star_texture from '../components/Star_texture';
import RotatingAspirations from '../components/RotatingAspirations';
import BackgroundWallpaper from '../components/BackgroundWallpaper';
import About from '../components/About';
// Libraries
import { motion, useScroll } from "motion/react";

const introMessage = "Hello, I'm Sean";

function Home() {

    const { scrollY } = useScroll();

    return (
        <>
            <Navbar />
            <Star_texture>
                <BackgroundWallpaper scrollY={scrollY} />
                <motion.div
                    id='title-name-container'
                    variants={{
                        hidden: { opacity: 0, },
                        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
                    }}
                    initial="hidden"
                    animate="visible"
                >
                    {introMessage.split("").map((char, index) => {
                        return (
                            <motion.span className='title-name-text'
                                key={index}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 }
                                }}>
                                {char}
                            </motion.span>
                        );
                    })}
                    <RotatingAspirations />
                </motion.div>
            </Star_texture>
            <About />
        </>
    );
}

export default Home;