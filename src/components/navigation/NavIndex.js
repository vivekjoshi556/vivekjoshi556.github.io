import { useState } from "react";
import { motion } from "framer-motion";
import NavItem from "./NavItem";
import Menu from "./Menu";

const rollInVariant = {
    initial: {
        x: 100,
    },
    animate: {
        x: 0,
        transform: "rotate(-180deg)",
        transition: {
            delay: .6,
        }
    },
}

const NavIndex = () => {
    const [isOpen, toggleMenu] = useState(false);
    const toggleMenuHandler = () => {
        toggleMenu(!isOpen);
        if(isOpen) 
            document.getElementsByTagName("body")[0].style.overflow = "visible";
        else
            document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
    
    return (
        <>
            <nav style = {{ "width": "98%", "marginLeft": "1%", "marginRight": "1%", "marginTop": "1%", "zIndex": "10" }} className = "fixed flex text-gray-600 xl:px-10 bg-[#2b2f38d1]">
                <div className = "hidden md:flex p-2 justify-center items-center w-full">
                    <a className = "text-2xl leading-none" href="http://localhost:3000/">
                        <img src="/images/profile.png" alt="" width="auto" style= {{"height": "3rem"}} />
                    </a>
                    <ul className = "md:ml-auto md:mr-6 md:items-center md:space-x-2 flex justify-center items-center">
                        <li>
                            <ul className = "md:ml-auto md:items-center md:space-x-2 flex justify-center items-center">
                                <NavItem duration = "0.1" link = "/">Home</NavItem>
                                <NavItem duration = "0.2" link = "/aboutMe">About Me</NavItem>
                                <NavItem duration = "0.3" link = "/skills">Skills</NavItem>
                                <NavItem duration = "0.4" link = "/projects">Projects</NavItem>
                                <NavItem duration = "0.5" link = "/contactMe">Contact Me</NavItem>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className = "w-full block md:hidden relative p-2">
                    <motion.button variants = { rollInVariant } initial = "initial" animate = "animate" className = "duration-75 ease-in-out flex items-center rounded-full focus:outline-none relative top-px ml-auto border border-gray-400 p-2 px-3" onClick = { toggleMenuHandler } id = "menuBtn" style = {{ zIndex: 9 }}>
                        <svg className = "block h-5 w-3 text-gray-800" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="white">
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </motion.button>
                    <Menu isOpen = { isOpen } toggleMenuHandler = { toggleMenuHandler } />
                </div>
            </nav>
        </>
    );
}

export default NavIndex;