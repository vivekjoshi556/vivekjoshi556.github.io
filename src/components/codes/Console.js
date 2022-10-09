const Console = props => {
    const className = "consoleScrollbar relative w-full bg-black text-gray-100 border border-black rounded-md p-2 overflow-y-scroll aboveNoise h-full " + props.className;
    return (
        <div className = { className } id = "console" style = {{ "minHeight": "150px", "maxHeight": "120px" }}>
            {
                (props.msgs.length !== 0) &&
                props.msgs.map((key, val) => {
                    return (
                        <div className = "pb-1 general" key = { val }> 
                            { ">> " }
                            { 
                                (key.type === "msg" && <span>{ key.msg }</span>) ||  
                                (key.type === "result" && <span>{ key.msg }</span>) || 
                                (key.type === "warning" && <span> { <span className = "bg-yellow-700 p-1 rounded text-xs">Warning:</span> } { " " +key.msg } </span>) ||
                                (key.type === "skill" && <span> { "Importing Skill: " } <span className = "bg-green-800 p-1 text-xs rounded">{ key.msg } </span></span>)
                            }
                        </div>
                    )
                })
            }
            <span className="general">{ ">> " }</span>
        </div>
    );
}

Console.defaultProps = {
    msgs: [],
}

export default Console;