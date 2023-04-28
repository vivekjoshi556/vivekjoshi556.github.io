import Prism from "prismjs"
import { useEffect } from "react";
import "./prism.css";

export default function Editor({ code, language }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <pre>
            <code className = {`language-${language}`}>
                { code }
            </code>
        </pre>
    );
}

// <Editor code = "    npm install checkerz" language = "sh" />
// <Editor code = { init } language = "javascript" /> <br/>
// <Editor code = { working } language = "javascript" />