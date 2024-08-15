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
            <motion.h2 
                id="projects" 
                initial ="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{once: true}}
                className="mt-20 text-center text-4xl font-semibold">
                Projects
            </motion.h2>
            <motion.div 
                initial = "hidden"
                whileInView= "visible"
                variants={containerVariants}
                viewport={{once: true}}
                className="flex flex-wrap justify-center py-8">
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