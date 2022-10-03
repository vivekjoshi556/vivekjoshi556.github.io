// import { motion, AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

import HomeIndex from "./components/home/HomeIndex"
import AboutIndex from "./components/about/AboutIndex"
import SkillsIndex from "./components/skills/SkillsIndex";
import ProjectsIndex from "./components/projects/ProjectsIndex"
import ContactIndex from "./components/contact/ContactIndex"
import NavIndex from "./components/navigation/NavIndex";


function App() {
    const location = useLocation();
    return (
        <div className = "App">
            <NavIndex />
            {/* <AnimatePresence> */}
                <Routes location = { location } key = { location.key }>
                    <Route path = { process.env.PUBLIC_URL + "/" } element = { <HomeIndex /> } />
                    <Route path = { process.env.PUBLIC_URL + "/aboutMe"} element = { <AboutIndex /> } />
                    <Route path = { process.env.PUBLIC_URL + "/skills"} element = { <SkillsIndex /> } />
                    <Route path = { process.env.PUBLIC_URL + "/projects"} element = { <ProjectsIndex /> } />
                    <Route path = { process.env.PUBLIC_URL + "/contactMe"} element = { <ContactIndex /> } />
                    {/* <Route path = "/login" element = { !authCntxt.isLoggedIn ? <LoginIndex /> : <Navigate to = "/" /> } /> */}
                    {/* <Route path = "*" element = { <NotFound /> }></Route> */}
                </Routes>
            {/* </AnimatePresence> */}
        </div>
    );
}

export default App;
