import { SKILLS } from "../constants"
import {motion} from "framer-motion"

const containerVariants = {
    hidden: {opacity:0, y:20},
    visible: {
        opacity: 1,
        y:0,
        transition: {
            duration:1,
            staggerChildren: 0.6,
        },
    },
}

const itemVariants ={
    hidden: {opacity:0, x:-20},
    visible:{opacity:1, x: 0, transition: {duration: 0.3}}
}

const Skills = () =>{
    return(
        <div className="Container mx-auto">
            <div className="flex justify-center mb-16">
                <motion.h2 id= "skills"
                    initial={{opacity:0, y:-20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration:0.5}}
                    viewport={{once:true}}
                    className="mt-16 text-center text-4xl font-semibold ">
                    SKILLS
                    <div className=" h-1.5 min-w-full bg-teal-400"></div>
                </motion.h2> 
            </div>
            
            
            <motion.div 
                initial = "hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{once:true}}
                className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-teal-950 px-4 py-10 lg:px-20">
                {SKILLS.map((skill,index) => (
                    <motion.div 
                    variants={itemVariants}
                    key={index} className="mb-8 flex items-center justify-between">
                        <div className="flex items-center">
                            {skill.icon}
                            <h3 className="px-6 text-xl lg:text-3xl">
                                {skill.name}
                            </h3>
                        </div>
                        <div className="text-md border-b-2 border-teal-400 font-semibold lg:text-xl">
                            <span> {skill.experience}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Skills