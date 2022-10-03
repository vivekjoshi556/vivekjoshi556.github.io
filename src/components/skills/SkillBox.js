import { motion, AnimatePresence } from "framer-motion";

const SkillBox = props => {
    const variant = {
        initial: {
            opacity: 0,
            y: 100
        }, 
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: props.duration,
                duration: 1,
            }
        },
        exit: {
            // 
        }
    };

    return (
        <AnimatePresence>
            <motion.div variants = { variant } initial = "initial" animate = "animate" className = "w-full flex justify-center cursor-pointer my-1">
                <img className = "h-14 hover:scale-150 duration-300 my-5 lg:my-8" src = { process.env.PUBLIC_URL + props.src } alt = "" />
            </motion.div>
        </AnimatePresence>
    );
}

export default SkillBox;