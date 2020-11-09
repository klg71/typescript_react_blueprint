import * as React from "react";
import axios from "axios";
import {useEffect, useState} from "react";
import {TodoListEntry} from "../model/model";
import {TodoListEntryComponent} from "./TodoListEntryComponent";
import {CreateTodoListEntry} from "./CreateTodoListEntry";
import {Alert} from "antd";


export const TodoList = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [todos, setTodos] = useState<TodoListEntry[]>();
    const [errors, setErrors] = useState<any>();
    const [failed, setFailed] = useState<boolean>(false);


    const getTodosFromServer = () => {
        setLoading(true);
        axios.get("/todos").then(data => {
            console.log("data: ", data);

            setLoaded(true);
            setLoading(false);
            setFailed(false);
            const todoResponses: TodoListEntry[] = data.data.map((elem: any) => {
                return {
                    id: elem.id,
                    name: elem.name,
                };
            });
            setTodos(todoResponses);

        }).catch(e => {
            setLoaded(true);
            setLoading(false);
            setFailed(true)
        })
    }

    useEffect(() => {
        if (loaded || loading) {
            return;
        }
        getTodosFromServer()

    }, [loaded, loading, todos, errors]);

    return (
        <div>
            <h1>Todo List: </h1>
            {
                loading && "loading..."
            }
            {
                loaded && failed && <Alert type="error" message="Beim Laden sind Fehler aufgetreten."/>
            }
            {
                loaded && todos && (
                    <div>
                        {
                            todos.length == 0 && "Es gibt zur Zeit nichts zu tun."
                        }
                        {
                            todos.length > 0 && (
                                <ul>
                                    {
                                        todos.map((todo, index) => <TodoListEntryComponent entry={todo} key={index}
                                                                                           onDelete={getTodosFromServer}/>)
                                    }
                                </ul>
                            )
                        }
                    </div>
                )
            }

            <CreateTodoListEntry onSubmit={getTodosFromServer}/>
        </div>
    )
}
