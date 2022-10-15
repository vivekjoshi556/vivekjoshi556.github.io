import { motion } from "framer-motion";

const SkillBox = props => {
    const boxVariant = {
        initial: {
            opacity: 0,
            x: 50
        }, 
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                delay: .7 + parseFloat(props.delay),
                duration: .1,
            }
        },
        exit: {
            opacity: 0,
            x: 50,
            transition: {
                delay: .48 - parseFloat(props.delay),
                duration: .03,
            }
        }
    };

    return (
        <motion.div variants = { boxVariant } initial = "initial" animate = "animate" exit = "exit" className = "flex px-6 justify-center items-center cursor-pointer my-1 hover:scale-150 duration-300 text-white border border-gray-600 rounded-lg flex-col" onClick = { props.onClick }>
            <img className = "h-10 mt-2 mb-1" src = { process.env.PUBLIC_URL + props.src } alt = "" />
            <span className = "text-white text-semibold text-center mb-2">{ props.name }</span>
        </motion.div>
    );
}

export default SkillBox;