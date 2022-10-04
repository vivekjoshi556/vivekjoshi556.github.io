import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { templateVariant, codeVariant } from "../variants";
import Console from "./Console";

const LearningFunc = () => {
    const [exec, runExec] = useState({executing: false, msg: ""});

    const execute = async () => {
        runExec({executing: true, msg: "Executing Your Code..."});
        await new Promise(r => setTimeout(r, 1000));
        runExec({executing: false, msg: "['Unemployed']"});
    }

    const clearConsole = () => {
        runExec({...exec, msg: ""});
    }

    return (
        <motion.div variants = { templateVariant } initial = "initial" animate = "animate" className = "text-gray-300 text-sm code">
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent0">1</span>
                <span className = "keyword">void </span>
                <span className = "function">Learnings</span>(
                <span className = "class">Developer</span> &dev_vivek)
            </motion.div>
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent1">2</span>
                dev_vivek->
                <span className = "function">learn</span>(HTML);
            </motion.div>
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent1">2</span>
                dev_vivek->
                <span className = "function">learn</span>(CSS);
            </motion.div>
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent1">2</span>
                dev_vivek->
                <span className = "function">learn</span>(JS Basics);
            </motion.div>
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent1">3</span>
                { "vivek_joshi->" }
                <span className = "function">study</span>();
            </motion.div>
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent1">4</span>
                { "vivek_joshi->" }
                <span className = "function">fun</span>();
            </motion.div>
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent1">5</span>
                <span className = "function">fastForward</span>(vivek_joshi, 20);
            </motion.div>
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent1">6</span>
                <span className = "class">Developer</span> *vivek_dev = new
                <span className = "class"> Developer</span>(vivek_joshi);
            </motion.div>
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent1">7</span>
                <span className = "keyword">delete</span> vivek_joshi;
            </motion.div>
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent1">8</span>
                <span className = "function">print</span>(
                <span className = "keyword"></span>
                { "vivek_joshi->" }
                <span className = "function">status</span>());
            </motion.div>
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent0">9</span>
                { "}" }
            </motion.div>
            <div className = "flex justify-end">
                <button onClick = { clearConsole } className = "bg-green-600 text-white hover:bg-green-700 duration-200 py-1 mt-1 px-3 ml-auto rounded mb-2">
                    Clear Console
                </button>
                {
                    !exec.executing && <button onClick = { execute } className = "bg-green-600 text-white hover:bg-green-700 duration-200 py-1 mt-1 px-3 ml-1 rounded mb-2">
                        Execute
                    </button>
                }
                {
                    exec.executing && 
                    <button className = "bg-green-600 opacity-60 text-white duration-200 py-1 px-3 block ml-1 rounded mb-2" disabled>
                        <FontAwesomeIcon className = "fa-spin w-4 mt-1 dark:text-gray-300" icon = { faGear }></FontAwesomeIcon> Execute
                    </button>
                }
            </div>
            <Console>{ exec.msg }</Console>
        </motion.div>
    );
}

export default LearningFunc;