import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavItem = props => {
    const fadeInVariant = {
        initial: {
            opacity: 0,
            y: -50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delay: props.duration,
                duration: .6,
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
        <motion.li variants = { fadeInVariant }  className = "lg:flex"
            initial = "initial" animate = "animate" exit = "exit">
            <Link onClick = { props.onClick } className = "block py-2 px-4 text-xs text-gray-900 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-indigo-100 hover:bg-gray-50 hover:text-indigo-500 rounded" to = { props.link }> 
                { props.children }
            </Link>
        </motion.li>
    );
}

NavItem.defaultProps = {
    link: "#",
    children: "Please set link for this nav item.",
}

export default NavItem;