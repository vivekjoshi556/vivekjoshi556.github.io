import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { templateVariant, codeVariant } from "../variants";
import Console from "./Console";

const MainFunc = () => {
    const [exec, runExec] = useState({executing: false, count: 0, msgs: []});

    const sendMessage = async(type, msg, waitFor = 1000, executing = true) => {
        runExec(exec => {
            exec.msgs[exec.count] = {
                "type": type,
                "msg": msg
            };
            exec.count = exec.count + 1;
            exec.executing = executing;
            return { ...exec };
        });
        const localConsole = document.getElementById("console");
        await new Promise(r => setTimeout(r, waitFor));
        localConsole.scrollTop = localConsole.scrollHeight;
    }

    const execute = async () => {
        await sendMessage("msg", "Executing Your Code...");
        await sendMessage("msg", "Studying", 500);
        await sendMessage("msg", "Playing Games");
        await sendMessage("warning", "['Unemployed']", 1000, false);
    }

    const clearConsole = () => {
        console.log("called to clear console");
        runExec(temp => {
            return {...temp, msgs: []};
        });
    }

    return (
        <motion.div variants = { templateVariant } initial = "initial" animate = "animate" className = "text-gray-200 text-sm code aboveNoise">
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent0">1</span>
                <span className = "keyword">void </span>
                <span className = "function">main</span>("03-06-1999"); 
            </motion.div>
            <motion.div variants = { codeVariant }>
                <span className = "text-gray-400 indent1">2</span>
                <span className = "class">Person </span> 
                *vivek_joshi = new <span className = "class">Person</span>("03-06-1999"); 
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
                <span className = "class">Developer</span> *dev_vivek = new
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
                <button onClick = { clearConsole } className = "bg-green-600 text-white hover:bg-green-700 duration-200 py-1 mt-1 py-2 px-3 ml-auto rounded mb-2">
                    Clear Console
                </button>
                {
                    !exec.executing && <button onClick = { execute } className = "bg-green-600 text-white hover:bg-green-700 duration-200 py-1 mt-1 px-3 ml-1 rounded mb-2 aboveNoise">
                        Execute
                    </button>
                }
                {
                    exec.executing && 
                    <button className = "bg-green-600 text-white hover:bg-green-600 opacity-60 py-1 mt-1 px-3 ml-1 rounded mb-2 cursor-not-allowed aboveNoise">
                        <FontAwesomeIcon className = "fa-spin w-4 dark:text-gray-300" icon = { faGear }></FontAwesomeIcon> Execute
                    </button>
                }
            </div>
            <Console msgs = { exec.msgs }></Console>
        </motion.div>
    );
}

export default MainFunc;