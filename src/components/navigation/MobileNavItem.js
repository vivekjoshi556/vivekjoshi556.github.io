import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileNavItem = props =>  {
    const fadeInVariant = {
        initial: {
            opacity: 0,
            y: -50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: props.delay
            }
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: {
                delay: 0.5 - props.delay
            }
        }
    };

    return (
        <motion.div variants = { fadeInVariant }  className = "mb-4"
            initial = "initial" animate = "animate" exit = "exit">
            <Link onClick = { props.onClick } className = "text-white font-mono sm:text-4xl font-bold hover:px-2 text-4xl duration-500" to = { process.env.PUBLIC_URL + props.href }> 
                { ">> " + props.children }
            </Link>
        </motion.div>
    );
}

export default MobileNavItem;