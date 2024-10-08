import { SOCIAL_MEDIA_LINKS } from "../constants"
import {motion} from "framer-motion"

const Footer = () => {
    return (
        <div className="mt-20  bg-zinc-900 ">
            <div className="flex items-center justify-center pt-4 pb-1">
                <motion.div
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:1, delay:0.3}}>
                    <div className="text-2xl font-extrabold ">LILY ZHANG</div>
                    <div className="mb-4 h-3 w-12 bg-teal-400">
                    </div>
                </motion.div>
            </div>
            <div className="flex items-center justify-center gap-8 pb-4">
                {SOCIAL_MEDIA_LINKS.map((link, index)=>(
                    <motion.a 
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        viewport={{once: true}}
                        transition={{duration:0.1, delay:0.3*index}}
                        key={index} href={link.href} target="_blank" rel="noopner noreferrer">
                        {link.icon}
                    </motion.a>
                ))}
            </div>
        </div>
    )
}

export default Footer