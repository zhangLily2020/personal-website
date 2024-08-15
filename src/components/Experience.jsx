import { EXPERIENCE } from "../constants"
import {motion} from "framer-motion"
import { Briefcase } from 'tabler-icons-react';

const containerVariants ={
    hidden: {opacity:0, y: -20},
    visible: {
        opacity:1,
        y:0,
        transition: {
            duration: 0.5,
            staggerChildren:0.8,
        },
    },
}

const itemVariants = {
    hidden: { opacity:0, y:20},
    visible: {opacity:1, scale:1, transition: {duration:1}}
}

const Experience = () => {
    return(
        <div
        className="pt-7 bg-gradient-to-b from-teal-950 from-0%  to-black to-20%"
        // className="bg-gradient-to-b from-black from-0%  to-teal-950 to-15% pt-28 pb-20 text-white"
        >
            <div id="experience">
                {/* <div className=" inset-0 z-10 bg-gradient-to-b from-black from-60% to-sky-900 lg:from-30%"> </div> */}
                <motion.h2 
                    initial ="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{once: true}}
                    className="mt-20 text-center text-4xl font-semibold pb-10">
                    WORK EXPERIENCE
                </motion.h2>

                <div className="container mx-auto p-4 max-w-xl rounded-lg backdrop-blur-0
                    lg:flex">
                    
                    <motion.div 
                        initial = "hidden"
                        whileInView= "visible"
                        variants={containerVariants}
                        viewport={{once: true}}
                        className="relative max-w-3xl mx-auto">
                        <motion.div 
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration: 2.5, delay:0.2}}
                        className="border-l-2 border-gray-300 absolute left-6 h-full top-0"></motion.div>
                        <div>
                            {EXPERIENCE.map((Experience,index) =>(
                                <motion.div 
                                    variants={itemVariants}
                                    key={index} 
                                    className="relative flex items-start mb-10">
                                    
                                    <div className="relative flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-teal-600">
                                        <Briefcase size={24} color="white" />
                                    </div>
                                    
                                    <div className="ml-10">
                                        <h3 className="text-2xl font-semibold">
                                            {Experience.title}
                                            <br />
                                            <span className="text-lg">{Experience.company}</span>
                                            <br />
                                            <span className="text-lg font-normal">{Experience.period}</span>
                                        </h3>
                                        <p className="mt-2 text-lg font-normal">{Experience.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <div className="inset-x-0 bottom-0 pb-28 pt-7 bg-gradient-to-t from-teal-950 from-0%  to-black to-100% ">
                    
                </div>
            </div>
        </div>
    )
}


export default Experience