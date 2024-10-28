import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT } from '../constants'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1}}
        className="my-20 text-center text-4xl">About 
        <span className="text-neutral-500"> Me</span>
        </motion.h1>
        <div className="flex flex-wrap">
            <motion.div
            initial={{ opacity: 0, x:-100 }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{duration:0.5}}
            className="w-full lg:w-2/5 lg:p-8 opacity-70 "> 
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl" src={aboutImg} alt="About Me"/>
                </div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x:100 }}
            whileInView={{ opacity: 1, x:0 }}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start lg:ml-10">
                      <p className="my-20 max-w-xl py-6">{ABOUT_TEXT}</p>
        
                    </div>
              </motion.div>
        </div>
    </div>


  )
}

export default About