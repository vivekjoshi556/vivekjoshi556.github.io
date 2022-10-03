import { motion } from "framer-motion";
import containerVariant from "../variants";
import SkillBox from "./SkillBox";

const SkillsIndex = () => {
    
    return (
        <motion.div variants = { containerVariant } className = "pl-2 h-screen flex items-center justify-center flex-col">
            <div className = "w-3/5 dark:bg-gray-800 grid grid-cols-5 gap-x-2">
                <div className = "col-span-1 flex justify-center flex-col items-center">
                    <SkillBox duration = ".1" src = "/img/c.png" />
                </div>
                <div className = "col-span-1 flex justify-center flex-col items-center">
                    <SkillBox duration = ".1" src = "/img/cpp.png" />
                    <SkillBox duration = ".3" src = "/img/js.png" />
                </div>
                <div className = "col-span-1 flex justify-center flex-col items-center">
                    <SkillBox duration = ".1" src = "/img/reactjs.png" />
                    <SkillBox duration = ".3" src = "/img/laravel.svg" />
                    <SkillBox duration = ".5" src = "/img/expressjs.svg" />
                </div>
                <div className = "col-span-1 flex justify-center flex-col items-center">
                    <SkillBox duration = ".1" src = "/img/git.png" />
                    <SkillBox duration = ".3" src = "/img/github.png" />
                </div>
                <div className = "col-span-1 flex justify-center flex-col items-center">
                    <SkillBox duration = ".1" src = "/img/python.png" />
                </div>
            </div>
        </motion.div>
    );
}

export default SkillsIndex;