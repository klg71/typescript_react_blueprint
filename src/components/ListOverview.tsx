import {TodoList, TodoListView} from "../model/model";
import {ChangeEventHandler, useEffect, useState} from "react";
import {addTodoListCall, getTodoLists} from "../rest/todoListCalls";
import {AxiosResponse} from "axios";

export function ListOverview() {
    const [todoLists, setTodoLists] = useState<TodoListView[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [listInput, setListInput] = useState<string>("");

    useEffect(() => {
        if(loaded) {
            return;
        }
        getTodoLists()
            .then((response: AxiosResponse<TodoListView[]>) => {
                setTodoLists(response.data)
                setLoaded(true)
            })
            .catch((error) => {
                setLoaded(true)
            });
    });

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setListInput(event.target.value)
    }

    const addListItem = () => {
        addTodoListCall(listInput).then((response: AxiosResponse<TodoList>) => {
            const newTodoList: TodoListView = {
                id: response.data.id,
                description: response.data.description,
                entries: [],
            };
            setTodoLists([
                ...todoLists,
                newTodoList
            ]);
            setListInput("")
        });
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
                <button onClick={addListItem} disabled={listInput.trim().length === 0}>Anlegen</button>
            </div>
        </div>
    );
}
