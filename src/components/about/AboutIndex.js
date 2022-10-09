import { AnimatePresence, motion } from "framer-motion";
import MainFunc from "../codes/MainFunc";
import { containerVariant } from "../variants";

const AboutIndex = () => {
    return (
        <AnimatePresence>
            <motion.div key = "aboutIndex" className = "h-screen w-4/5 mx-auto" variants = { containerVariant } initial = "initial" animate = "animate" exit = "exit">
                <div className = "w-full dark:bg-gray-800 h-full items-center flex justify-center">
                    <img className = "hidden md:block aboveNoise" src = { process.env.PUBLIC_URL + "/img/anonymous.png" } alt = "profile_not_found" width = "300px" height = "300px" />
                    <div className = "w-10/12 md:w-7/12 flex justify-center justify flex-col">
                        <h2 className = "text-2xl font-bold mb-4 font-mono silkscreen glitch text-white" data-text = "About Me.">About Me.</h2>
                        <MainFunc />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default AboutIndex;