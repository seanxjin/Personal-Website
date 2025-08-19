import './App.css';
import Navbar from './components/navbar';
import Star_texture from './components/Star_texture';
import {motion} from "motion/react";
import {useState, useEffect} from "react";

function App() {

    


    useEffect(() => {

    })

    return (
        <>
            <div id='hero-page-container'>
                <Star_texture />
                <Navbar />
                <div id='title-name-container'>
                    <h1>
                        Hello, I'm Sean
                    </h1>
                    <motion.span>
                        An aspiring{" "}
                    </motion.span>
                </div>
            </div>
            
        </>

    );
}

export default App
