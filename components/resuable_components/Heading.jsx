import React from 'react'
import { motion} from "framer-motion";

const MotionDiv = motion.create('div')

const Heading = ({data}) => {
  return (
          <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-heading bg-clip-text text-transparent">
           {data.title}
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
          {data.para}
          </p>
        </MotionDiv>
  )
}

export default Heading