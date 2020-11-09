import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {Frame} from "./components/Frame";

const App = () => {
    return (
        <div className="App">
            <Frame>
                <TodoList/>
            </Frame>
        </div>
    );
}

export default App;
