import { AnimatePresence, motion } from "framer-motion";
import { containerVariant } from "../variants";
import SkillBox from "./SkillBox";
import Console from "../codes/Console";
import { useEffect, useState } from "react";

const SkillsIndex = () => {
    useEffect(() => {
        document.title = "My Skills";
    }, []);

    const [exec, runExec] = useState({executing: false, count: 0, msgs: []});

    const sendMessage = async(type, msg, waitFor = 1000, executing = true) => {
        runExec((temp) => {
            temp.msgs[temp.count] = {
                "type": type,
                "msg": msg
            };
            temp.count = temp.count + 1;
            temp.executing = executing;
            return { ...temp };
        });
        const localConsole = document.getElementById("console");
        await new Promise(r => setTimeout(r, waitFor));
        if(localConsole)
            localConsole.scrollTop = localConsole.scrollHeight;
    }

    const loadSkill = async (val) => {
        await sendMessage("skill", val);
    }

    const clearConsole = () => {
        runExec(temp => {
            return {...temp, msgs: []};
        });
    }

    return (
        <AnimatePresence>
            <motion.div key = "aboutIndex" className = "h-screen w-11/12 mx-auto" variants = { containerVariant } initial = "initial" animate = "animate" exit = "exit">
                <div className = "w-full dark:bg-gray-800 h-full items-center flex justify-center gap-4 flex-wrap md:flex-nowrap">
                    <div className = "lg:w-8/12 md:w-7/12 w-full flex items-center flex-wrap gap-x-4">
                        <div className="w-full mb-4">
                            <h2 className = "text-3xl font-bold glitch silkscreen text-gray-200 inline-block" data-text = "Skills.">Skills.</h2>
                        </div>
                        <SkillBox delay = "0.1" onClick = { () => loadSkill("C++ Programming") } src = "/img/cpp.png" name = "C++ Programming" />
                        <SkillBox delay = "0.3" onClick = { () => loadSkill("C Programming") } src = "/img/c.png" name = "C Programming" />
                        <SkillBox delay = "0.5" onClick = { () => loadSkill("Javascript") } src = "/img/js.png" name = "Javascript" />
                        <SkillBox delay = "0.7" onClick = { () => loadSkill("Python") } src = "/img/python.png" name = "Python" />
                        <SkillBox delay = "0.9" onClick = { () => loadSkill("Git") } src = "/img/git.png" name = "Git" />
                        <SkillBox delay = "1.1" onClick = { () => loadSkill("Github") } src = "/img/github.png" name = "Github" />
                        <SkillBox delay = "1.3" onClick = { () => loadSkill("ThunderClient") } src = "/img/thunderclient.png" name = "ThunderClient" />
                        <SkillBox delay = "1.5" onClick = { () => loadSkill("Laravel") } src = "/img/laravel.svg" name = "Laravel" />
                        <SkillBox delay = "1.7" onClick = { () => loadSkill("Reactjs") } src = "/img/reactjs.png" name = "Reactjs" />
                        <SkillBox delay = "1.9" onClick = { () => loadSkill("Expressjs") } src = "/img/expressjs.png" name = "ExpressJS" />
                        <SkillBox delay = "2.1" onClick = { () => loadSkill("Machine Learning") } src = "/img/ml_dark.png" name = "Machine Learning" />
                    </div>
                    <div className = "lg:w-8/12 md:w-5/12 w-full">
                        <Console msgs = { exec.msgs } />
                        <div className = "flex justify-end">
                            <button onClick = { clearConsole } className = "bg-green-600 text-white hover:bg-green-700 duration-200 py-1 mt-1 py-2 px-3 ml-auto rounded mb-2">
                                Clear Console
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

export default SkillsIndex;