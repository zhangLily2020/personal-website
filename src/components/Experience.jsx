"use client";
import Particles from "./magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { EXPERIENCE } from "../constants"
import {motion} from "framer-motion"
import { Briefcase } from 'tabler-icons-react';

const containerVariants ={
    hidden: {opacity:0, y: -20},
    visible: {
        opacity:1,
        y:0,
        transition: {
            duration: 0.7,
            staggerChildren:0.7,
        },
    },
}

const itemVariants = {
    hidden: { opacity:0, y:20},
    visible: {opacity:1, scale:1, transition: {duration:0.5}}
}

const Experience = () => {
    
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#ffffff");
    }, [theme]);

    return(
        
    <div   className="pt-7 bg-gradient-to-b from-teal-950 from-0%  to-black to-20%">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
            <span className="justify-center z-10 ">
                <div>
                    {/* <div className=" inset-0 z-10 bg-gradient-to-b from-black from-60% to-sky-900 lg:from-30%"> </div> */}
                    <div className="flex justify-center">
                        <motion.h2 id="experience"
                            initial ="hidden"
                            whileInView="visible"
                            variants={containerVariants}
                            viewport={{once: true}}
                            className="mt-20 text-center text-4xl font-semibold pb-10">
                            WORK EXPERIENCE
                            <div className=" h-1.5 min-w-full bg-teal-400"></div>
                        </motion.h2>
                    </div>

                    <div className="container mx-auto p-4 max-w-2xl rounded-lg backdrop-blur-0 tracking-normal
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
                            className="border-l-2 border-gray-300 absolute left-6 h-full top-0 ml-20"></motion.div>
                            <div>
                                {EXPERIENCE.map((Experience,index) =>(
                                    <motion.div 
                                        variants={itemVariants}
                                        key={index} 
                                        className="relative flex items-start mb-10 ml-20">
                                        
                                        <div className="relative flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-teal-600">
                                            <Briefcase size={24} color="white" />
                                        </div>
                                        
                                        <div className="ml-10 pb-3">
                                            <h3 className="text-2xl font-semibold pb-3">
                                                {Experience.title}
                                                <br />
                                                <span className="text-lg">{Experience.company}</span>
                                                <br />
                                                <span className="text-lg font-normal tracking-wide">{Experience.period}</span>
                                            </h3>
                                        
                                            <p className="mt-2 text-lg font-normal tracking-wide">{Experience.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                    
                </div>
            </span>
                <Particles
                    className="absolute inset-0"
                    quantity={200}
                    ease={110}
                    color={color}
                    refresh
                />
        </div>
        <div className="inset-x-0 bottom-0 pb-28 pt-7 bg-gradient-to-t from-teal-950 from-0%  to-black to-100% "></div>
    </div>
        
    )
}


export default Experience