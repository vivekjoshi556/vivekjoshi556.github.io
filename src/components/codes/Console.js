const Console = props => {
    const className = "w-full bg-black text-gray-100 p-2 overflow-y-scroll h-full " + props.className;
    return (
        <div className = { className } id = "console" style = {{ "minHeight": "150px", "maxHeight": "120px" }}>
            {
                (props.msgs.length != 0) &&
                props.msgs.map((key, val) => {
                    console.log(key.type, key.msg);
                    return (
                        <div key = { val }> 
                            { ">> " }
                            { 
                                (key.type === "msg" && <span>{ key.msg }</span>) ||  
                                (key.type === "result" && <span>{ key.msg }</span>) || 
                                (
                                    key.type === "warning" && 
                                    <span>
                                        { <span className = "bg-yellow-700 p-1 rounded">Warning:</span> }
                                        { " " +key.msg }
                                    </span>
                                )
                            }
                        </div>
                    )
                })
            }
            { ">> " }
        </div>
    );
}

export default Console;