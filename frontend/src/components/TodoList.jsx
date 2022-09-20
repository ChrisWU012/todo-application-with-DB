import { useSelector, useDispatch } from "react-redux";
import { addTodoThunk, clearTodoThunk, getTodoThunk } from "../redux/todoSlice";
import { useState, useEffect } from "react";

export default function LinksList() {
    const lists = useSelector((state) => state.todoStore.lists);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");

    useEffect(() => { dispatch(getTodoThunk()) }, [dispatch]);

    return (
        <div>
            <label>todo:</label>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button onClick={() => dispatch(addTodoThunk({ todo }))}>
                Add Thing{" "}
            </button>
            <br />
            <button onClick={() => dispatch(clearTodoThunk())}>Clear Things</button>

            {/* get todo_list from the server */}
            <br />
            <br />
            <h3>Todo List:</h3>
            {
                lists && lists.length > 0
                    ? lists.map((link, i) => (
                        <div key={i}>
                            {i + 1}: {link.todo}
                        </div>
                    ))
                    : "Nothing to do right now"
            }
        </div >
    );
}