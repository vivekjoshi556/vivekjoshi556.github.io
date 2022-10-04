import { AnimatePresence, motion } from "framer-motion";
import { containerVariant } from "../variants";
import SkillBox from "./SkillBox";
import Console from "../codes/Console";
import LearningFunc from "../codes/LearningFunc"

const SkillsIndex = () => {
    return (
        // <AnimatePresence>
        //     <motion.div key = "skillIndex" variants = { containerVariant } initial = "initial" animate = "animate" exit = "exit"  className = "pl-2 h-screen flex items-center justify-center mx-auto">
        //         <div className = "w-1/4 dark:bg-gray-800 grid grid-cols-5 gap-x-2">
        //             <div className = "col-span-1 flex justify-center flex-col items-center">
        //                 <SkillBox delay = ".1" src = "/img/c.png" />
        //             </div>
        //             <div className = "col-span-1 flex justify-center flex-col items-center">
        //                 <SkillBox delay = ".1" src = "/img/cpp.png" />
        //                 <SkillBox delay = ".5" src = "/img/js.png" />
        //             </div>
        //             <div className = "col-span-1 flex justify-center flex-col items-center">
        //                 <SkillBox delay = ".1" src = "/img/reactjs.png" />
        //                 <SkillBox delay = ".5" src = "/img/laravel.svg" />
        //                 <SkillBox delay = ".9" src = "/img/expressjs.png" />
        //             </div>
        //             <div className = "col-span-1 flex justify-center flex-col items-center">
        //                 <SkillBox delay = ".1" src = "/img/git.png" />
        //                 <SkillBox delay = ".5" src = "/img/github.png" />
        //             </div>
        //             <div className = "col-span-1 flex justify-center flex-col items-center">
        //                 <SkillBox delay = ".1" src = "/img/python.png" />
        //             </div>
        //         </div>
        //         <div className = "w-2/4 text-white">
        //             <Console />
        //         </div>
        //     </motion.div>
        // </AnimatePresence>
        <AnimatePresence>
            <motion.div key = "aboutIndex" className = "w-screen h-screen w-11/12 mx-auto" variants = { containerVariant } initial = "initial" animate = "animate" exit = "exit">
                <div className = "w-full dark:bg-gray-800 h-full items-center flex justify-center">
                    <img className = "hidden md:block" src = { process.env.PUBLIC_URL + "/img/anonymous.png" } alt = "profile_not_found" width = "300px" height = "300px" />
                    <div className = "w-10/12 md:w-7/12 flex justify-center justify flex-col">
                        <h2 className = "text-xl font-bold mb-4 font-mono silkscreen text-gray-200">About Me.</h2>
                        <LearningFunc />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default SkillsIndex;