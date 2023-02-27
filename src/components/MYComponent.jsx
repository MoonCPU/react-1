import React from "react"
import { motion } from "framer-motion";
import { useRef } from "react";
import { useElementScroll } from "framer-motion";

export const MyComponent = () => {
    const ref = useRef()
    const { scrollYProgress } = useElementScroll(ref)
  
    return (
      <div ref={ref}>
        <motion.div style={{ scaleX: scrollYProgress }} />
      </div>
    )
}

export default MyComponent;