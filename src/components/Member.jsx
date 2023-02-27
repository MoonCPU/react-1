import React from "react";
import { motion } from "framer-motion";

const Member = (props) => {
    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="mb-2">
                <img src={`/team/${props.id}.png`} alt="images" height={212} width={212}/>
            </div>
            <div className="mb-1">
                <h1 className="font-bold text-3xl">
                    {props.name}
                </h1>       
            </div>
            <div className="mb-1">
                <motion.button 
                whileHover={{scale: 1.1}} 
                whileTap={{scale: 0.9}}>
                <h2 className="text-xl">
                    {props.email}
                </h2>
                </motion.button>
            </div>
        </div>
    )
}

export default Member;