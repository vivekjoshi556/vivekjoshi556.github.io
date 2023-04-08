import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { containerVariant } from "../variants";
import ProjectBox from "./ProjectBox";
import { projects } from "./Projects";
import Checkerz from "./projects/Checkerz";
import MusicGenre from "./projects/MusicGenre";
import ServicePro from "./projects/ServicePro";

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
            if(event.target.scrollTop >= 45) document.getElementById("modalContent").classList.remove("rounded-t-[100px]");
            else document.getElementById("modalContent").classList.add("rounded-t-[100px]");
        }

        document.getElementById("modal").addEventListener("scroll", scrollEventHandler);

        document.addEventListener("keydown", keyDownEventHandler);
        
        return () => {
            document.removeEventListener("keydown", keyDownEventHandler);
        }
    }, []);

    return (
        <motion.div className = "min-h-screen mx-auto relative" variants = { containerVariant } initial = "initial" animate = "animate" exit = "exit">
            {/*  */}
            <div className = "w-full dark:bg-gray-800 md:px-10 lg:px-32 px-8 h-full pt-32 items-center flex flex-col">
                <h2 className = "text-2xl font-bold mb-4 font-mono silkscreen glitch text-white w-full" data-text = "Project Index">Project Index</h2>
                <br />
                <div className="flex flex-wrap">
                    {
                        projects.map((project, i) => 
                            <ProjectBox modalHandler = { modalHandler } key = { "project_" + i } project = { project } pos = { i } left = { Boolean(i % 2) } />
                        )
                    }
                </div>
            </div>
            <div id = "backdrop" onClick = { () => modalHandler("") } className = "fixed w-full h-full top-0" style = {{ "zIndex": "-1", }}></div>
            <div id = "modal" className = "fixed min-h-screen h-full w-full overflow-y-scroll scroll" style = {{ "top": "100%", "zIndex": "3" }}>
                <div id="modalContent" className = "bg-white min-h-full duration-200 border-top rounded-t-[100px] px-24 py-20 mt-24">
                    {
                        (modal === "checkerz" && <Checkerz />) ||
                        (modal === "musicGenre" && <MusicGenre />) ||
                        (modal === "servicePro" && <ServicePro />)
                    }
                </div>
            </div>
        </motion.div>
    );
}

export default ProjectsIndex;