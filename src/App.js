import { Route, Routes, useLocation } from 'react-router-dom';

import HomeIndex from './components/home/HomeIndex';
import AboutIndex from './components/about/AboutIndex';
import SkillsIndex from './components/skills/SkillsIndex';
import ProjectsIndex from './components/projects/ProjectsIndex';
import ContactIndex from './components/contact/ContactIndex';
import NavIndex from './components/navigation/NavIndex';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();
	return (
		<div className="App bg0">
			<div className="noise"></div>
			<NavIndex />
			<AnimatePresence mode="wait">
				<Routes location={location} key={location.pathname}>
					<Route exact path="/" element={<HomeIndex />} />
					<Route exact path="/aboutMe" element={<AboutIndex />} />
					<Route exact path="/skills" element={<SkillsIndex />} />
					<Route exact path="/projects" element={<ProjectsIndex />} />
					<Route exact path="/contactMe" element={<ContactIndex />} />
					{/* <Route path = "*" element = { <NotFound /> } /> */}
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default App;
