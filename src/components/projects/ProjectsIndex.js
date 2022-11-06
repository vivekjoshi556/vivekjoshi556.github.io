import { motion } from "framer-motion";
import { useEffect } from "react";
import { containerVariant } from "../variants";
import ProjectBox from "./ProjectBox";
import { projects } from "./Projects";

const ProjectsIndex = () => {
    useEffect(() => {
        document.title = "My Projects";
    }, []);
    return (
        <motion.div className = "min-h-screen w-4/5 mx-auto" variants = { containerVariant } initial = "initial" animate = "animate" exit = "exit">
            <div className = "w-full dark:bg-gray-800 h-full pt-32 items-center flex flex-col">
                <h2 className = "text-2xl font-bold mb-4 font-mono silkscreen glitch text-white w-full" data-text = "Project Index">Project Index</h2>
                <br />
                <div className="flex flex-wrap">
                    {
                        projects.map((project, i) => 
                            <ProjectBox key = { "project_" + i } project = { project } pos = { i } left = { Boolean(i % 2) } />
                        )
                    }
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectsIndex;