import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SuitCase from '../Components/SuitCase';
import '../App.css';

const mainDivVariants = {
    exit: {
        x: '-100vw',
        transition: {
            duration: 0.4
        }
    }
}

const showVariants = {
    hidden: {
        opacity: 0,
        y: '-50vh'
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            type: "spring",
            delay: 0.3
        }
    }
}

const button1Variants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(0,0,0)",
        transition: {
            yoyo: Infinity,
            duration: 0.3
        }
    }
}
const button2Variants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            yoyo: Infinity,
            duration: 0.3
        }
    }
}
function MainPage() {
    return (
        <motion.div
            variants={mainDivVariants}
            exit="exit"
        >
            <section className='top_section'>
                <motion.div className='AES_container'
                    variants={showVariants}
                    initial="hidden"
                    animate="visible"
                >AES VISUALIZER</motion.div>
            </section>
            <section className='choice_section'>
                <div className='round_F_section'>
                    <motion.div
                        variants={button1Variants}
                        whileHover="hover"
                        whileInView={{
                            x: 0
                        }}
                        initial={{
                            x: '-30vw'
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 1000,
                            damping: 10000
                        }}><Link to="/RoundFunction" style={{ textDecoration: 'none', color: '#000' }}>Round Function</Link></motion.div>
                </div>
                <div className='Key_ex_section'>
                    <motion.div
                        variants={button2Variants}
                        whileHover="hover"
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        initial={{
                            x: '30vw',
                            opacity: 0
                        }} transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 1000
                        }}><Link to="/KeyExpansion" style={{ textDecoration: 'none', color: '#fff' }}>Key Expansion</Link></motion.div>
                </div>
            </section>
        </motion.div>
    );
}

export default MainPage;
