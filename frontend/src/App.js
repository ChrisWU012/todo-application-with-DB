import './App.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        To-do Application
        <br />
        <br />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
