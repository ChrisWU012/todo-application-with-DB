import { useSelector, useDispatch } from "react-redux";
import { addTodo, clearTodo } from "../redux/todoSlice";
import { useState } from "react";

export default function LinksList() {
    const lists = useSelector((state) => state.todoStore.lists);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");

    return (
        <div>
            <label>todo:</label>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <br />
            <button onClick={() => dispatch(clearTodo())}>Clear Things</button>
            <button onClick={() => dispatch(addTodo({ todo }))}>
                Add Thing{" "}
            </button>
            {lists && lists.length > 0
                ? lists.map((link, i) => (
                    <div key={i}>
                        {link.todo}
                    </div>
                ))
                : "No lists causes error"}
        </div>
    );
}