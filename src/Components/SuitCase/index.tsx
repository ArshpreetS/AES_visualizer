import React from 'react';
import styles from "./index.module.css";
import { motion } from 'framer-motion';
import { Grid } from '@mui/material';




const SuitCase: React.FC = () => {
    return (
        <motion.div className={styles.main_container}>
            <Grid container spacing={0} className={styles.grid_container}>
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
                    <motion.div transition={{ duration: 1 }} whileInView={{ x: 100 }} initial={{ x: 0 }} className={styles.value_box}>
                        4
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
                    <motion.div transition={{ duration: 1 }} whileInView={{ x: 100 }} initial={{ x: 0 }} className={styles.value_box}>
                        4
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
                    <motion.div transition={{ duration: 1 }} whileInView={{ x: 100 }} initial={{ x: 0 }} className={styles.value_box}>
                        4
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
                    <motion.div transition={{ duration: 1 }} whileInView={{ x: 100 }} initial={{ x: 0 }} className={styles.value_box}>
                        4
                    </motion.div>
                </Grid>
            </Grid>
        </motion.div>
    )
}

export default SuitCase;