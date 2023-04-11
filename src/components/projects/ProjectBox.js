const ProjectBox = props => {
    const project = props.project;
    const btnProps = "bg-[" + project.color + "A0] hover:bg-[" + project.color + "] duration-500 text-white px-4 py-2 mt-3 rounded-full focus:outline-none";
    return (
        <div className = "md:flex text-gray-200 rounded-xl p-8 md:p-0 aboveNoise mb-8 sm:mb-24 w-full">
            {
                props.left && 
                    <div className = "h-40 md:w-5/6 bg-center md:h-auto md:rounded-l-xl rounded-lg mx-auto bg-cover bg-no-repeat md:bg-center cursor-pointer mb-2" style = {{
                        "backgroundImage": `url(${process.env.PUBLIC_URL + project.img})`
                    }}></div>
            }
            {
                !props.left && 
                    <div className = "h-40 block md:hidden md:w-5/6 bg-center md:h-auto md:rounded-l-xl rounded-lg mx-auto bg-cover bg-no-repeat md:bg-center cursor-pointer" style = {{
                        "backgroundImage": `url(${process.env.PUBLIC_URL + project.img})`
                    }}></div>
            }
            <div className = "pt-4 md:pt-6 md:pb-6 md:px-8 text-justify md:text-left space-y-4" style = {{ "width": "inherit" }}>
                <div className = "pl-1">
                    <p className = "text-xl font-bold"> { project.name } </p>
                    <hr className = "relative right-1 mb-3" />
                    <p className=" "> { project.description } </p>
                </div>
                <div className = "font-medium pl-1">
                    <div className = "text-gray-300 mb-2">Keywords</div>
                    <div className = "flex items-center gap-2 flex-wrap">
                        {
                            project.tags.map((tag, i) => 
                                <span key = { "tag_" + i } className = "text-xs border rounded-lg px-3 bg-gray-200 py-1 text-slate-700"> { tag } </span>
                            )
                        }
                    </div>
                </div>
                <div className = "flex justify-start">
                    <button onClick = { () => props.modalHandler(project.codename) } className = { btnProps }> Read More... </button>
                </div>
            </div>
            {
                !props.left && 
                    <div className = "h-40 hidden md:block md:w-5/6 bg-center md:h-auto md:rounded-l-xl rounded-lg mx-auto bg-cover bg-no-repeat md:bg-center cursor-pointer" style = {{
                        "backgroundImage": `url(${process.env.PUBLIC_URL + project.img})`
                    }}></div>
            }
        </div>
    );
}

ProjectBox.defaultProps = {
    left: true,
}

export default ProjectBox;