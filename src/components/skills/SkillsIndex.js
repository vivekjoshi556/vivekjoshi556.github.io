import { motion } from "framer-motion";
import { containerVariant } from "../variants";
import { skills } from "../skills/Loader";
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

    const loadSkill = async (loader) => {
        if(exec.executing) return;
        console.log(loader);
        var len = loader.length - 1;
        for(var i = 0; i < len; i++)
            await sendMessage(loader[i]["type"], loader[i]["msg"], loader[i]["waitFor"]);
        await sendMessage(loader[len]["type"], loader[len]["msg"], loader[len]["waitFor"], false);
    }

    const clearConsole = () => {
        runExec(temp => {
            return {...temp, msgs: []};
        });
    }

    const skillBoxVariant = {
        initial: {},
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
                staggerDirection: 1,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: skills.length * 0.05,
                staggerDirection: -1
            }
        }
    }

    return (
        <motion.div key = "aboutIndex" className = "h-screen w-11/12 mx-auto" variants = { containerVariant } initial = "initial" animate = "animate" exit = "exit">
            <div className = "w-full dark:bg-gray-800 h-full items-center flex justify-center gap-4 flex-wrap md:flex-nowrap">
                <div className = "lg:w-8/12 md:w-7/12 w-full flex items-center flex-wrap gap-x-4">
                    <div className="w-full mb-4">
                        <h2 className = "text-3xl font-bold glitch silkscreen text-gray-200 inline-block" data-text = "Skills.">Skills.</h2>
                    </div>
                    <motion.div variants = { skillBoxVariant } className = "w-full flex items-center flex-wrap gap-x-4">
                        {
                            skills.map((skill, i) =>
                                <SkillBox executing = { exec.executing } key = { "skill_" + i } delay = { i * 0.04 } onClick = { () => loadSkill(skill.loader) } src = { skill.src } name = { skill.name } />
                            )
                        }
                    </motion.div>
                </div>
                <div className = "lg:w-8/12 md:w-5/12 w-full">
                    <Console msgs = { exec.msgs } />
                    <div className = "flex justify-end">
                        <button onClick = { clearConsole } className = "bg-green-600 text-white hover:bg-green-700 duration-200 mt-1 py-2 px-3 ml-auto rounded mb-2">
                            Clear Console
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default SkillsIndex;