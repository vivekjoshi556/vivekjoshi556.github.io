const ProjectBox = props => {
    const project = props.project;
    return (
        <div className = "md:flex text-gray-200 rounded-xl p-8 md:p-0 aboveNoise mb-10">
            {
                props.left && 
                    <div className = "h-40 md:w-5/6 bg-center md:h-auto md:rounded-l-xl rounded-lg mx-auto bg-cover bg-no-repeat md:bg-center cursor-pointer" style = {{
                        "backgroundImage": `url(${process.env.PUBLIC_URL + project.img})`
                    }}></div>
            }
            <div className = "pt-4 md:pt-6 md:pb-6 md:px-8 text-center md:text-left space-y-4">
                <div className = "pl-1">
                    <p className = "text-lg font-medium"> { project.name } </p>
                    <hr className = "relative right-1 mb-3" />
                    <p className=" "> { project.description } </p>
                </div>
                <div className = "font-medium pl-1">
                    <div className = "text-gray-300 mb-2">Tech Used</div>
                    <div className = "flex items-center gap-2 flex-wrap">
                        {
                            project.tags.map((tag, i) => 
                                <span key = { "tag_" + i } className = "text-xs border rounded-lg px-3 bg-gray-200 py-1 text-slate-700"> { tag } </span>
                            )
                        }
                    </div>
                </div>
                <div className = "flex justify-end">
                    <a href = { project.link } target = "_blank" className = "border border-orange-200 bg-orange-400 hover:bg-orange-500 duration-500 text-white px-4 py-2 rounded-full">Read More...</a>
                </div>
            </div>
            {
                !props.left && 
                    <div className = "h-40 md:w-5/6 bg-center md:h-auto md:rounded-l-xl rounded-lg mx-auto bg-cover bg-no-repeat md:bg-center cursor-pointer" style = {{
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