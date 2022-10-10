import { AnimatePresence, motion } from "framer-motion";
import MobileNavItem from "./MobileNavItem";

const menuVariant = {
    initial: {
    },
    animate: {
        transition: {
            when: "beforeChildren",
        }
    },
    exit: {
        transition: {
            when: "afterChildren",
        }
    }
};

const childVariant = {
    initial: {
        clipPath: "circle(2% at 96% 4%)"
    },
    animate: {
        clipPath: "circle(200% at 98% 2%)",
        transition: {
            when: "beforeChildren",
            duration: 0.5,
            ease: "easeOut",
        }
    },
    exit: {
        clipPath: "circle(2% at 96% 4%)",
        transition: {
            duration: 0.5,
            delay: .6,
        }
    }
};



const Menu = (props) => {
    return (
        <AnimatePresence>
            {
                props.isOpen && <motion.div key = "menu" variants = { menuVariant } initial = "initial" animate = "animate" exit = "exit" className = "fixed top-0 right-0" style={{ "width": "98%", "height": "98%", "marginLeft": "1%", "marginRight": "1%", "marginTop": "1%", "marginBottom": "1%"}}>
                    <motion.div variants = { childVariant } className = "w-full p-2 bg5 h-full">
                        <div className = "flex justify-center h-full flex-col w-7/12 mx-auto">
                            <MobileNavItem delay = "0.1" onClick = { props.toggleMenuHandler } href = "/">Home</MobileNavItem>
                            <MobileNavItem delay = "0.2" onClick = { props.toggleMenuHandler } href = "/aboutMe">About Me</MobileNavItem>
                            <MobileNavItem delay = "0.3" onClick = { props.toggleMenuHandler } href = "/skills">Skills</MobileNavItem>
                            <MobileNavItem delay = "0.4" onClick = { props.toggleMenuHandler } href = "/projects">Projects</MobileNavItem>
                            <MobileNavItem delay = "0.5" onClick = { props.toggleMenuHandler } href = "/contactMe">Contact Me</MobileNavItem>
                        </div>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default Menu;