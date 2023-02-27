import React from "react";
import { motion } from "framer-motion";

const Container = () => {

    const container = {
        hidden: { opacity: 0.2 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    }

    return (
        <div className="min-h-screen w-full bg-black text-white font-bold flex flex-col items-center justify-center">
            <div className="mx-10 md:mx-60">
                <motion.div className="mt-10 mb-16" variants={container} initial="hidden" whileInView="show">
                    <h1 className="text-4xl md:text-6xl text-center md:text-left">
                        We know our tools inside out.
                    </h1>
                </motion.div>

                <motion.div className="mb-16" variants={container} initial="hidden" whileInView="show">
                    <h1 className="text-4xl md:text-6xl text-center md:text-left">
                        Our team has contributed 143 commits to React Native core, powering thousands of apps worldwide. 
                    </h1>
                </motion.div>

                <motion.div className="mb-16" variants={container} initial="hidden" whileInView="show">
                    <h1 className="text-4xl md:text-6xl text-center md:text-left">
                        We're maintaining some of the most popular open-source projects, with over 1,234 downloads.
                    </h1>
                </motion.div>
            </div>
        </div>

    )
};

export default Container;