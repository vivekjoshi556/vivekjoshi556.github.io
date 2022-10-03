import { motion } from "framer-motion";

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
                delay: props.duration
            }
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: {
                delay: 0.6 - props.duration
            }
        }
    };

    return (
        <motion.a 
            className = "text-white text-5xl font-bold mb-4 hover:text-underline"
            variants = { fadeInVariant }
            onClick = { props.toggleMenuHandler }
            href = { props.href }
        >
            { props.children }
        </motion.a>
    );
}

export default MobileNavItem;