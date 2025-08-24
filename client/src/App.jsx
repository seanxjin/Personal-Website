import './App.css';
import Navbar from './components/navbar';
import Star_texture from './components/Star_texture';
import RotatingAspirations from './components/RotatingAspirations';
import BackgroundWallpaper from './components/BackgroundWallpaper';
import { motion, useScroll } from "motion/react";
import { useRef } from 'react';
import About from './components/About';




const introMessage = "Hello, I'm Sean";


function App() {


    const container = useRef();
    const { scrollY } = useScroll();

    return (
        <>
            <div ref={container} id='hero-page-container'>
                <Star_texture />
                <Navbar />
                <BackgroundWallpaper scrollY={scrollY}/>
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
            </div >
            <About />
        </>

    );
}

export default App
