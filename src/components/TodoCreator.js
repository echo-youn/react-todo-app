import { useState } from "react";

function TodoCreator() {
    const [creator, setCreator] = useState("");
    function createHandler(event) {
        setCreator(event.target.value);
    }
    return <div>
        <input onChange={createHandler} value={creator}></input>
    </div>;
}

export default TodoCreator;