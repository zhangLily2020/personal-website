import {ABOUT} from "../constants"
import {motion} from "framer-motion"
const About = () => {
    return (
        <div className="container mx-auto ">
            <div className="flex justify-center mb-7">
                <motion.h2 id="about"
                    initial={{opacity:0, y:-20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration:0.5}}
                    viewport={{once:true}}
                    className="mt-16 text-center text-4xl font-semibold ">
                    ABOUT ME
                    <div className=" h-1.5 min-w-full bg-teal-400"></div>
                </motion.h2> 
            </div>
            
            <motion.h3 
                initial = {{opacity:0, x:-200}}
                whileInView={{opacity:1 ,x:0}}
                transition={{duration: 1}}
                viewport={{once: true}}
                className="p-4 pt-6 text-6xl uppercase lg:text-[4rem]">
                {ABOUT.text1}
            </motion.h3>
            <motion.p 
                initial={{opacity:0,x:200}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:1}}
                viewport={{once:true}}
                className="mr-24 pl-4 text-xl leading-loose pb-32">
                {ABOUT.text2}
            </motion.p>
         </div>
    )
}

export default About