import { motion } from "framer-motion";
import containerVariant from "../variants";

const ProjectsIndex = () => {
    return (
        <motion.div variants = { containerVariant } initial = "init" animate = "animate" exit = "exit" className = "font-xl">
            "Project Index"
        </motion.div>
    );
}

export default ProjectsIndex;