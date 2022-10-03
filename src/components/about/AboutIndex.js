import { motion } from "framer-motion";
import containerVariant from "../variants";

const AboutIndex = () => {
    return (
        <motion.div className = "w-screen h-screen w-4/5 mx-auto" variants = { containerVariant } initial = "init" animate = "animate" exit = "exit">
            <div className = "w-full dark:bg-gray-800 h-full items-center flex justify-center">
                <img src = "/img/anonymous.png" alt = "profile_not_found" width = "300px" height = "300px" />
                <div className = "w-7/12 flex justify-center justify flex-col">
                    <h2 className = "text-xl font-bold mb-4 font-mono silkscreen text-gray-700">About Me.</h2>
                    <p>
                        Hello! My name is Vivek and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to earn some extra bucks — turned out hacking together a custom reblog button taught me a lot about HTML & CSS! <br /><br />
                        Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.<br /><br />
                        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default AboutIndex;