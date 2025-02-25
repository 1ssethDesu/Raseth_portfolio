import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.jpg";
import { motion } from 'framer-motion';
import resume from "../assets/Resume.pdf"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 mb-4 lg:mb-0"> {/* Added mb-4 for small devices */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-4xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              Chhort Chhorraseth
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Data Science & AI Engineering Enthusiast
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-5 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center lg:justify-start w-full">
              <a href={resume}
                className="inline-block px-4 py-2 text-xl font-semibold text-white rounded-2xl border-2  hover:bg-blue-600 transition duration-300
                 sm:px-4 sm:py-2 sm:text-base sm:mb-8 ">
                Resume
              </a>
            </motion.div>

          </div>
        </div>

        <div className="w-full lg:w-2/5 lg:p-20 opacity-70">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="rounded-full"
              src={profilePic}
              alt="Raseth" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

