import React from "react";
import Member from "./Member";
import { motion } from "framer-motion";

const Section = () => {

    const container = {
        hidden: { scale: 0 },
        show: {
            scale: 1,
            transition: {
                staggerChildren: 0.15,
                ease: "easeInOut"
            }
        }
    }

    const item = {
        hidden: { scale: 0 },
        show: { scale: 1 }
    }

    return (
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-5 mx-auto mb-10" variants={container} initial="hidden" 
        whileInView="show" viewport={{ once: true }}>

            <motion.div variants={item}>
                <Member id="man1" name="John Well" email="johnW@email.com" />
            </motion.div>

            <motion.div variants={item}>
                <Member id="man2" name="Chris Maze" email="chris@email.com" />
            </motion.div>

            <motion.div variants={item}>
                <Member id="man3" name="Louies Venor" email="louies@email.com" />
            </motion.div>

            <motion.div variants={item}>
                <Member id="woman1" name="Claire Lee" email="claire@email.com" />
            </motion.div>

            <motion.div variants={item}>
                <Member id="woman2" name="Clarice Maden" email="clarice@email.com" />
            </motion.div>

            <motion.div variants={item}>
                <Member id="woman3" name="Lotus" email="lotus@email.com" />
            </motion.div>
        </motion.div>
    )
}

export default Section;