import { motion } from "framer-motion";
import containerVariant from "../variants";

const ContactIndex = () => {
    return (
        <motion.div variants = { containerVariant } initial = "init" animate = "animate" exit = "exit" className = "font-xl">
            "Contact Me"
        </motion.div>
    );
}

export default ContactIndex;