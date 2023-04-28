// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRecycle, faCode, faFeather, faHandPointer, faHeartbeat, faBroom } from "@fortawesome/free-solid-svg-icons";

const MusicGenre = () => {
    return (
        <div>
            <h2 className = "text-xl font-bold glitch inline-block" data-text = "This&nbsp;Part&nbsp;is&nbsp;Under&nbsp;Construction.">This Part is Under Construction.</h2>
            {/* <h2 className = "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Problem Statement:</h2>
            <p className = "pl-8 text-sm">
                The problem was to train a model using Machine Learning techniques that could take in an music audio file and find out the genre of the song. This project was done as a coursework project in my Master's degree Machine Learning course with a team of three individuals. The main goal was to get idea an idea on how to work on Machine Learning Projects and various parts of the process.
            </p>
            <br/>

            <h2 className = "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Proposed Solution:</h2>
            <p className = "pl-8 text-sm">
                So, I decided to work on a NPM package that can do these sort of validation. 
            </p>
            <br />
            <img className = "w-full md:w-3/4 mx-auto border border-gray-100 shadow-md rounded-xl" src = "/img/Projects/checkerz/homepage.png" alt = "" />
            <br/>

            <h2 className = "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Features:</h2>
            <div className = "space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div className = "bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
                    <div className = "flex p-4 mt-2 mb-3 justify-center items-center rounded-full bg-purple-100 text-purple-800 w-fit mx-auto">
                        <FontAwesomeIcon className = "text-4xl dark:text-gray-300" icon = { faRecycle }></FontAwesomeIcon>
                    </div>
                    <h3 className = "mb-2 general text-center text-xl font-bold dark:text-white">Reusable Rules and Validators</h3>
                    <p className = "text-gray-500 text-center dark:text-gray-400 text-sm">A validator once created can be used to validate multiple objects.</p>
                </div>
                <div className = "bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
                    <div className = "flex px-3 py-4 mt-2 mb-3 justify-center items-center rounded-full bg-orange-100 text-orange-800 w-fit mx-auto">
                        <FontAwesomeIcon className = "text-4xl dark:text-gray-300" icon = { faCode }></FontAwesomeIcon>
                    </div>
                    <h3 className = "mb-2 general text-center text-xl font-bold dark:text-white">ES5 and ES6 Support</h3>
                    <p className = "text-gray-500 text-center dark:text-gray-400 text-sm">Supports inclusion as both ES5 & ES6 syntax depending on requirements.</p>
                </div>
                <div className = "bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
                    <div className = "flex p-4 mt-2 mb-3 justify-center items-center rounded-full bg-green-100 text-green-800 w-fit mx-auto">
                        <FontAwesomeIcon className = "text-4xl dark:text-gray-300" icon = { faFeather }></FontAwesomeIcon>
                    </div>
                    <h3 className = "mb-2 general text-center text-xl font-bold dark:text-white">Lightweight</h3>
                    <p className = "text-gray-500 text-center dark:text-gray-400 text-sm">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                </div>
                <div className = "bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
                    <div className = "flex p-4 mt-2 mb-3 justify-center items-center rounded-full bg-yellow-100 text-yellow-800 w-fit mx-auto">
                        <FontAwesomeIcon className = "text-4xl dark:text-gray-300" icon = { faHandPointer }></FontAwesomeIcon>
                    </div>
                    <h3 className = "mb-2 general text-center text-xl font-bold dark:text-white">Easy to Use</h3>
                    <p className = "text-gray-500 text-center dark:text-gray-400 text-sm">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
                </div>
                <div className = "bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
                    <div className = "flex p-4 mt-2 mb-3 justify-center items-center rounded-full bg-teal-100 text-teal-800 w-fit mx-auto">
                        <FontAwesomeIcon className = "text-4xl dark:text-gray-300" icon = { faHeartbeat }></FontAwesomeIcon>
                    </div>
                    <h3 className = "mb-2 general text-center text-xl font-bold dark:text-white">Continious Support</h3>
                    <p className = "text-gray-500 text-center dark:text-gray-400 text-sm">Plan it, create it, launch it. Collaborate seamlessly with all  the organization and hit your marketing goals every month with our marketing plan.</p>
                </div>
                <div className = "bg-white p-8 rounded-xl border border-gray-50 shadow-xl">
                    <div className = "flex p-4 mt-2 mb-3 justify-center items-center rounded-full bg-sky-100 text-sky-800 w-fit mx-auto">
                        <FontAwesomeIcon className = "text-4xl dark:text-gray-300" icon = { faBroom }></FontAwesomeIcon>
                    </div>
                    <h3 className = "mb-2 general text-center text-xl font-bold dark:text-white">Clear Error Messages</h3>
                    <p className = "text-gray-500 text-center dark:text-gray-400 text-sm">Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.</p>
                </div>
            </div>
            <br/><br/>
            
            <h2 className = "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Technologies Used:</h2>
            <ul className = "pl-8 list-disc">
                <li>Language: Package is purely built using <b>Javascript</b> language.</li>
                <li>Compiler: <b>Babel</b> is used with Webpack to create ES5 bundle.</li>
                <li>Bundler: <b>Webpack</b> is used to build ES5 & ES6 compatible bundles of the library.</li>
                <li>Testing: <b>JestJS</b> is used for testing package before build and publish.</li>
                <li>Version Control: <b>Github</b> is used to maintain package version and contributions.</li>
                <li>Deployment: <b>Github Actions</b> is used to automatically deploy NPM package when any new changes are pushed and all the tests pass.</li>
            </ul>
            <br/>

            <h2 className = "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">New Experiences:</h2>
            <ul className = "pl-8 list-disc">
                <li>To work both as ES5 and ES6 module I had to use a compiler. Not having worked with JS bundlers and compilers it was difficult to set them up.</li>
                <li>I want to setup linting in project to help me maintain formatting and make it easier to write a contribution guide. Not having worked with linters before this is a challenge.</li>
            </ul>
            <br/>

            <h2 className = "mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Future Plans:</h2>
            <ul className = "pl-8 list-disc">
                <li>To add well documented Contribution Rules.</li>
                <li>To create a proper documentation platform.</li>
                <li>Pick & Place option so you don't have to format the object before sending it for Validation.</li>
                <li>Option to use automatic typecasting of values if the types don't match.</li>
            </ul> */}

        </div>
    );
}

export default MusicGenre;