import {PROFILE} from "../constants"
import profilePic from "../assets/lily3.jpeg";
import {motion} from "framer-motion";

const HeroSection = () => {
    return (
        <>
            <div className="relative flex min-h-screen items-end justify-center"
            id="hero">
                <motion.img 
                    src={profilePic} 
                    alt={"Lily Zhang"} 
                    className="absolute inset-0 h-full w-full object-cover object-right"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}/>
                <motion.div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%"
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration: 1}}> 
                </motion.div>
                <motion.div 
                    initial={{opacity:0}}
                    animate={{opacity:1}}
                    transition={{duration: 1, delay:1}}
                    className="z-20 mx-4 max-w-3xl pb-20">
                    <h1 className="text-6xl font-thin uppercase tracking-wide md:text-9xl">
                        {PROFILE.firstName} 
                        {PROFILE.lastName}
                    </h1>
                    <p className="text-lg pt-5" >{PROFILE.info}</p>
                </motion.div>
            </div>
        </>
    )
}

export default HeroSection