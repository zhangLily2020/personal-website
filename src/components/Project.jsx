"use client";
import Particles from "./magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { PROJECTS } from "../constants"
import Card from "./Card"
import {motion} from "framer-motion"
// import Meteors from "./magicui/meteors";


const containerVariants ={
    hidden: {opacity:0, y: -20},
    visible: {
        opacity:1,
        y:0,
        transition: {
            duration: 0.5,
            staggerChildren:0.4,
        },
    },
}

const itemVariants = {
    hidden: { opacity:0, y:20},
    visible: {opacity:1, scale:1, transition: {duration:0.7}}
}



const Projects = () => {

    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#ffffff");
    }, [theme]);


    return (
    <div>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg tracking-normal bg-background md:shadow-xl">
            <span className="justify-center z-10">
                <div className="flex justify-center pb-3">
                    <motion.h2 
                        id="projects" 
                        initial ="hidden"
                        whileInView="visible"
                        variants={containerVariants}
                        viewport={{once: true}}
                        className="mt-20 text-center text-4xl font-semibold">
                        PROJECTS
                        <div className="pb-1"></div>
                        <div className="h-1.5 min-w-full bg-teal-400"></div>
                    </motion.h2>
                </div>
                <motion.div 
                    initial = "hidden"
                    whileInView= "visible"
                    variants={containerVariants}
                    viewport={{once: true}}
                    className="flex flex-wrap gap-x-20 gap-y-12 justify-center py-8 mx-1">
                    {PROJECTS.map((Projects,index) =>(
                        <motion.div 
                            variants={itemVariants}
                            key={index}>
                                <Card image={Projects.image}
                                title={Projects.title}
                                subtitle={Projects.subtitle}
                                link={Projects.link} />
                        </motion.div>
                    ))}
                </motion.div>
            </span>
            <Particles
                    className="absolute inset-0"
                    quantity={200}
                    ease={110}
                    color={color}
                    refresh
            />
        </div>
    </div>
    )
}

export default Projects