import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./index.module.css";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const showVariants = {
    hidden: {
        opacity: 0,
        x: '+50vw'
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


const KeyExpansion: React.FC = () => {

    // const [showText,setShowText] = useState(true);

    const [ref, inView] = useInView();
    const animation_switch_box = useAnimation();
    const animation_go_down = useAnimation();


    async function sequence() {
        await animation_go_down.start({ y: 0 });
        await animation_switch_box.start({ y: 0 })
        await animation_switch_box.start({ x: 0 })
        await animation_switch_box.start({
            x: 250,
            transition: {
                ease: "easeInOut",
                duration: 0.5,
            }
        });

        await animation_go_down.start({
            y: 125,
            transition: {
                ease: "easeInOut",
                duration: 0.5,
            }
        });
        await animation_switch_box.start({
            y: -375,
            transition: {
                ease: "easeInOut",
                duration: 0.5
            }
        });
        animation_switch_box.start({
            x: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.5
            }
        });
    }

    useEffect(() => {
        if (inView) {
            sequence();
        }
    }, [inView, animation_switch_box]);

    return (
        <React.Fragment>
            <section className={styles.top_section}>
                <motion.div variants={showVariants}
                    initial="hidden"
                    animate="visible" className={styles.key_expansion_container}>Key Expansion</motion.div>
            </section>
            <section className={styles.regular_section1}>
                <div className={styles.text_container}>
                    Original Key
                </div>
                <motion.div className={styles.main_container}>
                    <Grid container spacing={0} className={styles.grid_container}>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                r
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                o
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                w
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                1
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                r
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                o
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                w
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                2
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                r
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                o
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                w
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                3
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                r
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                o
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                w
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                4
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </section>
            <section className={styles.regular_section2}>
                <div className={styles.text_container}>
                    Seperating Last Col
                </div>
                <motion.div className={styles.main_container}>
                    <Grid container spacing={0} className={styles.grid_container}>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                r
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                o
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                w
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div transition={{ duration: 1 }} whileInView={{ x: 100, scale: 1.2 }} initial={{ x: 0 }} className={styles.value_box}>
                                1
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                r
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                o
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                w
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div transition={{ duration: 1 }} whileInView={{ x: 100, scale: 1.2 }} initial={{ x: 0 }} className={styles.value_box}>
                                2
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                r
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                o
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                w
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div transition={{ duration: 1 }} whileInView={{ x: 100, scale: 1.2 }} initial={{ x: 0 }} className={styles.value_box}>
                                3
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                r
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                o
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div className={styles.value_box}>
                                w
                            </motion.div>
                        </Grid>
                        <Grid item lg={3} className={styles.box}>
                            <motion.div transition={{ duration: 1 }} whileInView={{ x: 100, scale: 1.2 }} initial={{ x: 0 }} className={styles.value_box}>
                                4
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </section>
            <motion.section className={styles.regular_section1}>
                <div className={styles.text_container}>Updating the column</div>
                <motion.div className={styles.main_container}>
                    <Grid container spacing={0} className={styles.grid_container}>
                        <Grid item lg={12} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0 }} animate={animation_go_down} transition={{ duration: 1, delay: 2 }} className={styles.value_box_temp}>
                                1
                            </motion.div>
                        </Grid>
                        <Grid item lg={12} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0 }} animate={animation_go_down} transition={{ duration: 1, delay: 2 }} className={styles.value_box_temp}>
                                2
                            </motion.div>
                        </Grid>

                        <Grid item lg={12} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0 }} animate={animation_go_down} transition={{ duration: 1, delay: 2 }} className={styles.value_box_temp}>
                                3
                            </motion.div>
                        </Grid>
                        <Grid item lg={12} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0 }} animate={animation_switch_box} className={styles.value_box_temp}>
                                4
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </motion.section>
            <section className={styles.regular_section2}>
                <div className={styles.text_container}>S-Box the column</div>
                <motion.div className={styles.main_container}>
                    <Grid container className={styles.grid_container}>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                x: 75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }}
                                className={styles.value_box}>
                                1
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                x: -75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                <FontAwesomeIcon icon={faPlay} />
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                                opacity: 1
                            }} transition={{
                                delay: 1
                            }} className={styles.value_box}>
                                S1
                            </motion.div>
                        </Grid>

                        <Grid item lg={4} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                x: 75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                2
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                x: -75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                <FontAwesomeIcon icon={faPlay} />
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                                opacity: 1
                            }} transition={{
                                delay: 1
                            }} className={styles.value_box}>
                                S2
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0 }} whileInView={{
                                x: 75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                3
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0 }} whileInView={{
                                x: -75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                <FontAwesomeIcon icon={faPlay} />
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                                opacity: 1
                            }} transition={{
                                delay: 1
                            }} className={styles.value_box}>
                                S3
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0 }} whileInView={{
                                x: 75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                4
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0 }} whileInView={{
                                x: -75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                <FontAwesomeIcon icon={faPlay} />
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                                opacity: 1
                            }} transition={{
                                delay: 1
                            }} className={styles.value_box}>
                                S4
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </section>
            <section className={styles.regular_section1}>
                <AnimatePresence>
                    <motion.div className={styles.text_container}>
                        Round Constant
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} style={{ fontSize: '1rem' }} className={styles.text_container}>
                        Let's call this column =&gt; X
                    </motion.div>
                </AnimatePresence>


                <motion.div className={styles.main_container}>
                    <Grid container className={styles.grid_container}>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                x: 75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }}
                                className={styles.value_box}>
                                1
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                x: -75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                1
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                                opacity: 1
                            }} transition={{
                                delay: 1
                            }} className={styles.value_box}>
                                S1
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                x: 75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                2
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                x: -75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                <FontAwesomeIcon icon={faPlay} />
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                                opacity: 1
                            }} transition={{
                                delay: 1
                            }} className={styles.value_box}>
                                S2
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0 }} whileInView={{
                                x: 75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                3
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0 }} whileInView={{
                                x: -75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                <FontAwesomeIcon icon={faPlay} />
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                                opacity: 1
                            }} transition={{
                                delay: 1
                            }} className={styles.value_box}>
                                S3
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0 }} whileInView={{
                                x: 75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                4
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0 }} whileInView={{
                                x: -75,
                                opacity: 0
                            }} transition={{
                                duration: 1
                            }} className={styles.value_box}>
                                <FontAwesomeIcon icon={faPlay} />
                            </motion.div>
                        </Grid>
                        <Grid item lg={4} className={styles.box}>
                            <motion.div ref={ref} initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                                opacity: 1
                            }} transition={{
                                delay: 1
                            }} className={styles.value_box}>
                                S4
                            </motion.div>
                        </Grid>
                    </Grid>
                </motion.div>
            </section>
            <section className={styles.regular_section2}>
                <div className={styles.text_container}>New Key</div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', padding: '1rem' }}>
                    <div style={{ width: '40%' }}>
                        <Grid container style={{ width: '100%' }}>
                            <Grid item lg={4} className={styles.box}>
                                <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                    x: 75,
                                    opacity: 0
                                }} transition={{
                                    duration: 1
                                }}
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={4} className={styles.box}>
                                <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                    x: -75,
                                    opacity: 0
                                }} transition={{
                                    duration: 1
                                }} className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={4} className={styles.box}>
                                <motion.div initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                                    opacity: 1
                                }} transition={{
                                    delay: 1
                                }} className={styles.value_box}>
                                    S1
                                </motion.div>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ width: '40%' }}>
                        <Grid container style={{ width: '100%' }} >
                            <Grid item lg={4} className={styles.box}>
                                <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                    x: 75,
                                    opacity: 0
                                }} transition={{
                                    duration: 1
                                }}
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={4} className={styles.box}>
                                <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                    x: -75,
                                    opacity: 0
                                }} transition={{
                                    duration: 1
                                }} className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={4} className={styles.box}>
                                <motion.div initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                                    opacity: 1
                                }} transition={{
                                    delay: 1
                                }} className={styles.value_box}>
                                    S1
                                </motion.div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', padding: '1rem' }}>
                    <div style={{ width: '40%' }}>
                        <Grid container style={{ width: '100%' }}>
                            <Grid item lg={4} className={styles.box}>
                                <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                    x: 75,
                                    opacity: 0
                                }} transition={{
                                    duration: 1
                                }}
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={4} className={styles.box}>
                                <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                    x: -75,
                                    opacity: 0
                                }} transition={{
                                    duration: 1
                                }} className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={4} className={styles.box}>
                                <motion.div initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                                    opacity: 1
                                }} transition={{
                                    delay: 1
                                }} className={styles.value_box}>
                                    S1
                                </motion.div>
                            </Grid>
                        </Grid>
                    </div>
                    <div style={{ width: '40%' }}>
                        <Grid container style={{ width: '100%' }} >
                            <Grid item lg={4} className={styles.box}>
                                <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                    x: 75,
                                    opacity: 0
                                }} transition={{
                                    duration: 1
                                }}
                                    className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={4} className={styles.box}>
                                <motion.div initial={{ x: 0, y: 0 }} whileInView={{
                                    x: -75,
                                    opacity: 0
                                }} transition={{
                                    duration: 1
                                }} className={styles.value_box}>
                                    1
                                </motion.div>
                            </Grid>
                            <Grid item lg={4} className={styles.box}>
                                <motion.div initial={{ x: 0, y: 0, opacity: 0 }} whileInView={{
                                    opacity: 1
                                }} transition={{
                                    delay: 1
                                }} className={styles.value_box}>
                                    S1
                                </motion.div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default KeyExpansion;