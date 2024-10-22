
import {RiReactjsLine} from 'react-icons/ri'
import { SiPandas } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTableau } from "react-icons/si";
import { motion} from 'framer-motion'

const iconVariants=(duration) =>({
      initial:{y:-10},
      animate:{
        y:[10,-10],
        transition:{
          ease:"linear",
          duration:duration,
          repeat:Infinity,
          repeatType:"reverse",
        }

      }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:2}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
          <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-500 ' />
          </motion.div>
          <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNumpy className='text-7xl' style={{ color: 'rgb(77, 119, 207)' }} />
        </motion.div>

          <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPandas className='text-7xl' style={{ color: 'rgb(255, 255, 255)' }} />
          </motion.div>
          <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className='text-7xl text-sky-700 ' />
          </motion.div>
          <motion.div 
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTableau className='text-7xl text-sky-500 ' />
          </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies