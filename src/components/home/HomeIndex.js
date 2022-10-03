import { motion } from "framer-motion";
import containerVariant from "../variants";

import { Link } from "react-router-dom";

const HomeIndex = () => {
    return (
        <motion.div className = "w-screen h-screen" variants = { containerVariant } initial = "init" animate = "animate" exit = "exit">
            <div className = "float-left w-full dark:bg-gray-800 h-full flex justify-center items-center">
                <div className = "w-5/12">
                    <div className = "font-bold font-mono silkscreen text-gray-700 mb-5">Hey, I'm Vivek Joshi (𝒱𝒾𝓋𝑒𝓀𝒥𝑜𝓈𝒽𝒾).</div>
                    <h2 className = "text-5xl font-black text-gray-700 mb-5">
                        <div className = "mb-1">My passion is</div>
                        bringing ideas to Life.
                    </h2>
                    <p className = "mb-6 text-sm w-3/4 text-gray-700">
                        Currently I'm a student at IIIT Allahabad. My passion is working on unique ideas to make complex looking problems simpler.
                    </p>
                    <Link to = "/aboutMe" className = "justify-center py-3 px-5 bg-orange-500 text-white rounded-full hover:bg-orange-600 duration-300 cursor-pointer inline-block">
                        Find Out More?
                    </Link>
                </div>
                <img className = "inline float-left right-5" src = "/img/profile.png" alt = "profile_not_found" width = "300px" height = "300px" />
            </div>
        </motion.div>
    );
}

export default HomeIndex;