import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { containerVariant } from "../variants";
import ProjectBox from "./ProjectBox";
import { projects } from "./Projects";

const ProjectsIndex = () => {
    const [modal, toggleModal] = useState("");
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const modalHandler = async project_name => {
        const modalBox = document.getElementById("modal");
        const doc = document.getElementsByTagName("body")[0];
        const backdrop = document.getElementById("backdrop");

        if(project_name !== "") { // open
            backdrop.style.zIndex = "3";
            await sleep(10);
            backdrop.style.transitionDuration = ".5s";
            modalBox.style.transitionDelay = ".6s";
            modalBox.style.transitionDuration = ".5s";
            
            backdrop.style.backgroundColor = "#00000080"
            modalBox.style.top = "0%";
            modalBox.overflowY = "scroll";
            doc.style.overflowY = "hidden";
        }
        else { // close
            modalBox.style.transitionDelay = "0s";
            modalBox.style.transitionDuration = ".3s";
            backdrop.style.transitionDuration = ".2s";
            
            modalBox.style.top = "100%";
            modalBox.overflowY = "hidden";
            backdrop.style.backgroundColor = "#00000000";
            backdrop.style.zIndex = "-1";
            doc.style.overflowY = "scroll";
            backdrop.style.transitionDuration = "0ms";
        }
        toggleModal(project_name);
    }

    useEffect(() => {
        document.title = "My Projects";
        
        // Removing modal 
        const keyDownEventHandler = event => {
            if (event.key === "Escape") modalHandler("");
        }
        
        const scrollEventHandler = event => {
            if(event.target.scrollTop >= 45) {
                document.getElementById("modalContent").classList.remove("rounded-t-[40px]", "md:rounded-t-[100px]");
                document.getElementById("closingBtn").classList.add("border", "border-gray-300", "shadow-lg", "shadow-gray-300", "rounded-full");
            }
            else {
                document.getElementById("modalContent").classList.add("md:rounded-t-[100px]", "rounded-t-[40px]");
                document.getElementById("closingBtn").classList.remove("border", "border-gray-300", "shadow-lg", "shadow-gray-300", "rounded-full");
            }
        }

        document.getElementById("modal").addEventListener("scroll", scrollEventHandler);
        document.addEventListener("keydown", keyDownEventHandler);
        
        return () => {
            document.removeEventListener("keydown", keyDownEventHandler);
        }
    }, []);

    return (
        <motion.div className = "min-h-screen mx-auto relative" variants = { containerVariant } initial = "initial" animate = "animate" exit = "exit">
            <div className = "w-full dark:bg-gray-800 md:px-10 lg:px-32 px-8 h-full pt-24 md:pt-32 items-center flex flex-col">
                <h2 className = "text-3xl font-bold md:mb-4 font-mono silkscreen glitch text-white w-full" data-text = "Project Index">Project Index</h2>
                <div className="flex flex-wrap">
                    {
                        projects.map((project, i) => 
                            <ProjectBox modalHandler = { modalHandler } key = { "project_" + i } project = { project } pos = { i } left = { Boolean(i % 2) } />
                        )
                    }
                </div>
            </div>
            <div id = "backdrop" onClick = { () => modalHandler("") } className = "fixed w-full h-full top-0" style = {{ "zIndex": "-1", }}></div>
            <div id = "modal" className = "fixed min-h-screen h-full w-full overflow-y-scroll scroll" style = {{ "top": "100%", "zIndex": "10" }}>
                <div id="modalContent" className = "bg-white aboveNoise min-h-full w-full duration-200 border-top rounded-t-[40px] md:rounded-t-[100px] pb-20 pt-10 mt-24"> 
                    <div className = "flex justify-end md:mr-4 mr-2 sticky md:top-24 top-16">
                        <motion.button 
                            id = "closingBtn" 
                            title = "Press Esc" 
                            className = "md:text-4xl text-3xl duration-100 md:h-12 md:w-12 w-10 h-10 relative md:left-0 left-1" 
                            onClick = { () => modalHandler("") }
                            whileHover = {{ scale: 1.2 }}
                            transition = {{ type: "spring", stiffness: 1000, damping: 5 }}
                        >
                            <span className = "relative bottom-1">&times;</span>
                        </motion.button>
                    </div>
                    <div className = "md:px-20 px-16">
                        { modal !== "" && projects.find((project) => project.codename === modal)?.render }
                    </div>
                    
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectsIndex;