import * as React from "react";
import axios from "axios";
import {useEffect, useState} from "react";

interface TodoListEntry {
    id: string;
    title: string;
}

export const TodoList = () => {

    const [loading, setLoading] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [todos, setTodos] = useState<TodoListEntry[]>();
    const [errors, setErrors] = useState<any>();

    useEffect(() => {
        if (loaded || loading) {
            return;
        }
        setLoading(true);
        axios.get("/entry.json").then(data => {
            console.log("data: ", data);

            setLoaded(true);
            setLoading(false);
            setErrors(undefined);
            const todoResponses: TodoListEntry[] = data.data.map((elem: any) => {
                return {
                    id: elem.id,
                    title: elem.title,
                };
            });
            setTodos(todoResponses);

        }).catch(e => {
            console.error("errors while getting todo entries: ", e);
            setLoaded(true);
            setLoading(false);
        })

    }, [loaded, loading, todos, errors]);

    return (
        <div>
            <h1>Todo List: </h1>:
            {
                loading && "loading..."
            }
            {
                loaded && errors && (
                    <div>
                    <pre>
                        <code>
                            {JSON.stringify(errors, null, 2)}
                        </code>
                    </pre>
                    </div>
                )
            }
            {
                loaded && todos && (

                    <div>
                    <pre>
                        <code>
                            {JSON.stringify(todos, null, 2)}
                        </code>
                    </pre>
                    </div>
                )
            }
        </div>
    )
}
