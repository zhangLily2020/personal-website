import { PROJECTS } from "../constants"
import Card from "./Card"
import {motion} from "framer-motion"

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
    return (
        <div 
        // className="bg-gradient-to-b from-teal-950 from-0%  to-black to-15% pt-28 pb-20"
        >
            <div className="flex justify-center">
                <motion.h2 
                    id="projects" 
                    initial ="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{once: true}}
                    className="mt-20 text-center text-4xl font-semibold pb-">
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
                className="flex flex-wrap gap-x-24 gap-y-12 justify-center py-8">
                {PROJECTS.map((Projects,index) =>(
                    <motion.div 
                        variants={itemVariants}
                        key={index}>
                            <Card image={Projects.image}
                            title={Projects.title}
                            subtitle={Projects.subtitle}
                            links="#" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects