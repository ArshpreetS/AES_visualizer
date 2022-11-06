import React from "react";
import styles from "./index.module.css";
import { motion, useAnimation } from "framer-motion";
import { Grid } from "@mui/material";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

const showVariants = {
    hidden: {
        opacity: 0,
        x: '-50vw'
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            type: "spring",
            delay: 0.3,
            stiffness: 100
        }

    }
}

const RoundFunction: React.FC = () => {

    // const [ref, inView] = useInView();
    // const second_row_first = useAnimation();
    // const animation_go_down = useAnimation();


    // async function second_row_sequence() {
    //     await second_row_first.start({ y: 0 });
    //     await second_row_first.start({ x: 0 });
        
    //     second_row_first.start({
    //         x: 0,
    //         transition: {
    //             ease: "easeInOut",
    //             duration: 0.5
    //         }
    //     });
    // }

    

    return (
        <React.Fragment>


            <section className={styles.top_section}>
                <motion.div variants={showVariants}
                    initial="hidden"
                    animate="visible" className={styles.key_expansion_container}>Round Function</motion.div>
            </section>
            <section className={styles.regular_section1}>
                <motion.div className={styles.text_container}>
                    S-Box: The Confusion
                </motion.div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', padding: '1rem' }}>

                    {/* Left Box */}
                    <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                        x: 75,
                        opacity: 0
                    }} transition={{
                        duration: 1
                    }} style={{ width: '30%' }}>
                        <Grid container style={{ width: '100%' }}>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>

                    {/* Center Box */}
                    <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                        x: -75,
                        opacity: 0
                    }} transition={{
                        duration: 1
                    }} style={{ width: '30%' }}>
                        <Grid container style={{ width: '100%' }}>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>


                    {/* Right Box */}
                    <motion.div initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                        opacity: 1
                    }} transition={{
                        delay: 1
                    }} style={{ width: '30%' }}>
                        <Grid container style={{ width: '100%' }} >
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>
                </div>
            </section>
            <section className={styles.regular_section2}>
                <motion.div className={styles.text_container}>
                    Shift Rows: Diffusion
                </motion.div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'end', marginRight: '25rem', padding: '1rem' }}>

                    {/* Left Box */}
                    <motion.div initial={{ x: 0, y: 0 }} style={{ width: '50%' }}>
                        <Grid container style={{ width: '100%' }}>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            {/* <motion.div > */}
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -240, y: 0 }}
                                whileInView={{x:720}}
                                transition={{duration:2,delay:2}}
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -240, y: 0 }} className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -240, y: 0 }} className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -240, y: 0 }} className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            {/* </motion.div> */}

                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -480, y: 0 }}
                                whileInView={{x:480}}
                                transition={{duration:2,delay:2}}
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -480, y: 0 }}
                                whileInView={{x:480}}
                                transition={{duration:2,delay:4}}
                                className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -480, y: 0 }} className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -480, y: 0 }} className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -720, y: 0 }} 
                                whileInView={{x:240}}
                                transition={{duration:2,delay:2}}
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -720, y: 0 }}
                                whileInView={{x:240}}
                                transition={{duration:2,delay:4}}
                                className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -720, y: 0 }}
                                whileInView={{x:240}}
                                transition={{duration:2,delay:6}}
                                className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -720, y: 0 }} className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>
                </div>
            </section>
            <section className={styles.regular_section1}>
                <motion.div className={styles.text_container}>
                    Mix Columns: Diffusion
                </motion.div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', padding: '1rem' }}>

                    {/* Left Box */}
                    <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                        x: 75,
                        opacity: 0
                    }} transition={{
                        duration: 1
                    }} style={{ width: '30%' }}>
                        <Grid container style={{ width: '100%' }}>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>

                    {/* Center Box */}
                    <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                        x: -75,
                        opacity: 0
                    }} transition={{
                        duration: 1
                    }} style={{ width: '30%' }}>
                        <Grid container style={{ width: '100%' }}>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            {/* <motion.div> */}
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            {/* </motion.div> */}
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>


                    {/* Right Box */}
                    <motion.div initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                        opacity: 1
                    }} transition={{
                        delay: 1
                    }} style={{ width: '30%' }}>
                        <Grid container style={{ width: '100%' }} >
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>
                </div>
            </section>
            <section className={styles.regular_section2}>
                <motion.div className={styles.text_container}>
                    Adding Key
                </motion.div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', padding: '1rem' }}>

                    {/* Left Box */}
                    <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                        x: 75,
                        opacity: 0
                    }} transition={{
                        duration: 1
                    }} style={{ width: '30%' }}>
                        <Grid container style={{ width: '100%' }}>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>

                    {/* Center Box */}
                    <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                        x: -75,
                        opacity: 0
                    }} transition={{
                        duration: 1
                    }} style={{ width: '30%' }}>
                        <Grid container style={{ width: '100%' }}>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>


                    {/* Right Box */}
                    <motion.div initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                        opacity: 1
                    }} transition={{
                        delay: 1
                    }} style={{ width: '30%' }}>
                        <Grid container style={{ width: '100%' }} >
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    4
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default RoundFunction;