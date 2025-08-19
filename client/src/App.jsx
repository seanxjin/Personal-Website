import './App.css';
import Navbar from './components/navbar';
import Star_texture from './components/Star_texture';
import RotatingAspirations from './components/RotatingAspirations';
import { motion } from "motion/react";


const introMessage = "Hello, I'm Sean";


function App() {

    return (
        <>
            <div id='hero-page-container'>
                <Star_texture />
                <Navbar />
                <motion.div
                    id='title-name-container'
                    variants={{
                        hidden: { opacity: 0,},
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

        </>

    );
}

export default App
