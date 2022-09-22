import { useSelector, useDispatch } from "react-redux";
import { addTodoThunk, clearTodoThunk, getTodoThunk } from "../redux/todoSlice";
import { useState, useEffect } from "react";
import "./TodoList.scss"

export default function LinksList() {
    const lists = useSelector((state) => state.todoStore.lists);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");

    useEffect(() => { dispatch(getTodoThunk()) }, [dispatch]);

    return (
        <div>
            <div className="card">
                <h2>Regular</h2>
                <label className="input">
                    <input className="input__field" type="text" placeholder=" " onChange={(e) => setTodo(e.target.value)} value={todo} />
                    <span className="input__label">Some Fancy Label</span>
                </label>
                <div className="button-group">
                    <button onClick={() => dispatch(addTodoThunk({ todo }))}>Send</button>
                    <button onClick={() => dispatch(clearTodoThunk())}>Reset All</button>
                </div>
            </div>

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