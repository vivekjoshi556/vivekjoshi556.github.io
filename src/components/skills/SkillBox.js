import { motion } from "framer-motion";

const SkillBox = props => {
    const boxVariant = {
        initial: {
            opacity: 0,
            y: 100
        }, 
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                delay: 1,
                duration: .1,
            }
        },
        exit: {
            opacity: 0,
            y: 100,
            transition: {
                duration: 1
            }
        }
    };

    return (
        <motion.div key = { props.src } variants = { boxVariant } initial = "initial" animate = "animate" exit = "exit" className = "w-full flex justify-center items-center cursor-pointer my-1 hover:scale-150 duration-300">
            <img className = "h-10 my-5 lg:my-8" src = { process.env.PUBLIC_URL + props.src } alt = "" />
        </motion.div>
    );
}

export default SkillBox;