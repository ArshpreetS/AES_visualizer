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
                    }} style={{ width: '40%' }}>
                        <Grid container style={{ width: '90%' }}>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    {/* 1 */}
                                    00
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    {/* 2 */}
                                    3C
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    {/* 3 */}
                                    6E
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    {/* 4 */}
                                    47
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    {/* 1 */}
                                    1F
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    {/* 2 */}
                                    4E
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    {/* 3 */}
                                    22
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    {/* 4 */}
                                    74
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    {/* 1 */}
                                    0E
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    {/* 2 */}
                                    08
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    {/* 3 */}
                                    1B
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    {/* 4 */}
                                    31
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    {/* 1 */}
                                    54
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    {/* 2 */}
                                    59
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    {/* 3 */}
                                    0B
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    {/* 4 */}
                                    1A
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
                                    S
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    B
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    O
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    X
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    S
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    B
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    O
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    X
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    S
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    B
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    O
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    X
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    S
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    B
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    O
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    X
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>


                    {/* Right Box */}
                    <motion.div initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                        opacity: 1
                    }} transition={{
                        delay: 1
                    }} style={{ width: '43%' }}>
                        <Grid container style={{ width: '100%' }} >
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    63
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    EB
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    9F
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    A0
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    C0
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2F
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    93
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    92
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    AB
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    30
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    AF
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    C7
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    20
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    CB
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2B
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    A2
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
                                    63
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    EB
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    9F
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    A0
                                </motion.div>
                            </Grid>
                            {/* <motion.div > */}
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -240, y: 0 }}
                                whileInView={{x:720}}
                                transition={{duration:2,delay:2}}
                                    className={styles.value_box}>
                                    C0
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -240, y: 0 }} className={styles.value_box}>
                                    2F
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -240, y: 0 }} className={styles.value_box}>
                                    93
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -240, y: 0 }} className={styles.value_box}>
                                    92
                                </motion.div>
                            </Grid>
                            {/* </motion.div> */}

                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -480, y: 0 }}
                                whileInView={{x:480}}
                                transition={{duration:2,delay:2}}
                                    className={styles.value_box}>
                                    AB
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -480, y: 0 }}
                                whileInView={{x:480}}
                                transition={{duration:2,delay:4}}
                                className={styles.value_box}>
                                    30
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -480, y: 0 }} className={styles.value_box}>
                                    AF
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -480, y: 0 }} className={styles.value_box}>
                                    C7
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -720, y: 0 }} 
                                whileInView={{x:240}}
                                transition={{duration:2,delay:2}}
                                    className={styles.value_box}>
                                    20
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -720, y: 0 }}
                                whileInView={{x:240}}
                                transition={{duration:2,delay:4}}
                                className={styles.value_box}>
                                    CB
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -720, y: 0 }}
                                whileInView={{x:240}}
                                transition={{duration:2,delay:6}}
                                className={styles.value_box}>
                                    2B
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div initial={{ x: -720, y: 0 }} className={styles.value_box}>
                                    A2
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
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    1
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
                                    1
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
                                <motion.div
                                    className={styles.value_box}>
                                    3
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2
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
                    }} style={{ width: '43%' }}>
                        <Grid container style={{ width: '100%' }}>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    63
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    EB
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    9F
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    A0
                                </motion.div>
                            </Grid>
                            {/* <motion.div> */}
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    2F
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    93
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    92
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    C0
                                </motion.div>
                            </Grid>
                            {/* </motion.div> */}
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    AF
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    C7
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    AB
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    30
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    A2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    20
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    CB
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    2B
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>


                    {/* Right Box */}
                    <motion.div initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                        opacity: 1
                    }} transition={{
                        delay: 1
                    }} style={{ width: '43%' }}>
                        <Grid container style={{ width: '100%' }} >
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    BA
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    84
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    E8
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    1B
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    75
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    A4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    8D
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    40
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    F4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    8D
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    06
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    7D
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    7A
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    32
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    0E
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    5D
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
                    }} style={{ width: '43%' }}>
                        <Grid container style={{ width: '100%' }}>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    BA
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    84
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    E8
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    1B
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    75
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    A4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    8D
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    40
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    F4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    8D
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    06
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    7D
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    7A
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    32
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    0E
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    5D
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
                    }} style={{ width: '43%' }}>
                        <Grid container style={{ width: '100%' }}>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    E2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    91
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    B1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    D6
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    32
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    12
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    59
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    79
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    FC
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    91
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    E4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    A2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    F1
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    88
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    E6
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    93
                                </motion.div>
                            </Grid>
                        </Grid>
                    </motion.div>


                    {/* Right Box */}
                    <motion.div initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                        opacity: 1
                    }} transition={{
                        delay: 1
                    }} style={{ width: '50%' }}>
                        <Grid container style={{ width: '100%' }} >
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    58
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    15
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    59
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    CD
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    47
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    B6
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    D4
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    39
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    08
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    1C
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    E2
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    DF
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div
                                    className={styles.value_box}>
                                    8B
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    BA
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    E8
                                </motion.div>
                            </Grid>
                            <Grid item lg={3} className={styles.box}>
                                <motion.div className={styles.value_box}>
                                    CE
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