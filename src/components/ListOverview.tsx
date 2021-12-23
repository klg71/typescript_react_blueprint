import {dummyTodoLists, TodoListView} from "../model/model";
import {ChangeEventHandler, useState} from "react";

export function ListOverview() {

    const [todoLists, setTodoLists] = useState<TodoListView[]>(dummyTodoLists);
    const [listInput, setListInput] = useState<string>("");

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setListInput(event.target.value)
    }

    const addListItem = () => {
        console.log("button clicked", listInput)
        const newTodoList: TodoListView = {
            id: todoLists.length + 1,
            description: listInput,
            entries: [],
        };
        setTodoLists([
            ...todoLists,
            newTodoList
        ]);
        setListInput("")
    }

    return (
        <div>
            <h1>Todo List Übersicht</h1>
            {
                todoLists.map((todoList) => {
                    return (
                        <div key={todoList.id}>
                            <h2>{todoList.description}</h2>
                            {todoList.entries.length} Aufgaben vorhanden
                        </div>
                    )
                })
            }

            <div>
                <input type="text" onChange={onInputChange} value={listInput}/>
                <button onClick={addListItem}>Anlegen</button>
            </div>
        </div>
    );
}
