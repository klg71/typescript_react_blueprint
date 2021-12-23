import {TodoList, TodoListView} from "../model/model";
import {ChangeEventHandler, useEffect, useState} from "react";
import {addTodoListCall, getTodoLists} from "../rest/todoListCalls";
import {AxiosResponse} from "axios";

export function ListOverview() {
    const [todoLists, setTodoLists] = useState<TodoListView[]>([]);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (loaded) {
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

    const addListItem = (description: string) => {
        addTodoListCall(description).then((response: AxiosResponse<TodoList>) => {
            const newTodoList: TodoListView = {
                id: response.data.id,
                description: response.data.description,
                entries: [],
            };
            setTodoLists([
                ...todoLists,
                newTodoList
            ]);
        });
    }

    return (
        <div>
            <h1>Todo List Übersicht</h1>
            {
                todoLists.map((todoList) => {
                    return (
                        <TodoListEntry todoListEntry={todoList} key={todoList.id}/>
                    )
                })
            }

            <DescriptionInputLine onAddButtonClick={addListItem}/>

        </div>
    );
}

interface TodoListEntryProps {
    readonly todoListEntry: TodoListView
}

const TodoListEntry = (props: TodoListEntryProps) => {
    const todoList = props.todoListEntry
    return (
        <div>
            <h2>{todoList.description}</h2>
            {todoList.entries.length} Aufgaben vorhanden
            <ul>
                {todoList.entries.map((entry) => {
                    return (
                        <li key={entry.id}>{entry.description}</li>
                    )
                })}
            </ul>
        </div>
    )
}

interface DescriptionInputLineProps {
    readonly onAddButtonClick: (description: string) => void;
}

const DescriptionInputLine = (props: DescriptionInputLineProps) => {
    const onAddButtonClick = props.onAddButtonClick

    const [listInput, setListInput] = useState<string>("");

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setListInput(event.target.value);
        setListInput("")
    }
    return (
        <div>
            <input type="text" onChange={onInputChange} value={listInput}/>
            <button onClick={() => onAddButtonClick(listInput) } disabled={listInput.trim().length === 0}>Anlegen</button>
        </div>
    )
}
