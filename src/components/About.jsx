"use client";
import Particles from "./magicui/particles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {ABOUT} from "../constants"
import {motion} from "framer-motion"
// import Meteors from "/Users/zhang/personal-website/src/components/magicui/meteors.jsx";

const About = () => {
    const { theme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(theme === "dark" ? "#ffffff" : "#ffffff");
    }, [theme]);

    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
            <span className="justify-center z-10">
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
                        className="p-4 pt-6 text-6xl uppercase lg:text-[4rem] tracking-normal">
                        {ABOUT.text1}
                    </motion.h3>

                    <motion.p 
                        initial={{opacity:0,x:200}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:1}}
                        viewport={{once:true}}
                        className="mr-24 pl-4 text-xl leading-loose pb-32 tracking-wide">
                        {ABOUT.text2}
                    </motion.p>
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
    )
}

export default About