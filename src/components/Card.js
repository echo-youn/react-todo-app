import { useState } from "react";


function Card(props) {
    const [selection, setSelection] = useState("todo");
    const [cardUpdate, setCardUpdate] = useState(props.card || '');

    function selectionChangeHandler(event) {
        setSelection(event.target.value);
    }
    
    function textChangeHandler(event) {
        setCardUpdate(event.target.value);
    }

    return (
        <div>
            <div>
                <select onChange={selectionChangeHandler} value={selection}>
                    <option value="todo">todo</option>
                    <option value="doing">doing</option>
                    <option value="done">done</option>
                </select>
                <input onChange={textChangeHandler} value={cardUpdate} />
                <button onClick={update}>수정</button>
                <button onClick={remove}>삭제</button>
            </div>
        </div>
    );
}



function remove() {
    
}

function update() {

}

export default Card;