import { useSelector, useDispatch } from "react-redux";
import { addLink, clearLinks, getLinkThunk } from "../redux/todoSlice";
import { useState } from "react";

export default function LinksList() {
    const links = useSelector((state) => state.linksStore.links);
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");
    const [priority, setPriority] = useState("");

    return (
        <div>
            <label>todo:</label>
            <input
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <br />
            <label>priority:</label>
            <input type="text" value={priority} onChange={(e) => setPriority(e.target.value)} />
            <br />
            <button onClick={() => dispatch(clearLinks())}>Clear Things</button>
            <button onClick={() => dispatch(addLink({ todo, priority }))}>
                Add Thing{" "}
            </button>
            {links && links.length > 0
                ? links.map((link, i) => (
                    <div key={i}>
                        {link.todo} - {link.priority}
                    </div>
                ))
                : "No links causes error"}

            <button onClick={() => { dispatch(getLinkThunk()) }}> getLinkThunk</button>
        </div>
    );
}