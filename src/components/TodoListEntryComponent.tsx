import * as React from "react";
import {TodoListEntry} from "../model/model";
import {Alert, Button, Card} from "antd";
import axios from "axios";
import {useState} from "react";

export interface TodoListEntryProps {
    readonly entry: TodoListEntry
    readonly onDelete: () => void;
}

export const TodoListEntryComponent = (props: TodoListEntryProps) => {
    const {entry, onDelete} = props;
    const [failed, setFailed] = useState<boolean>(false);
    const onClick = () => {
        axios.delete(`/todos/${entry.id}`).then(() => {
            onDelete();
            setFailed(false);
        }).catch(e => {
            setFailed(true);
        });
    }
    return (
        <li>
            {props.entry.name}
            <Button type="link" style={{color: "#E00"}} onClick={onClick}>löschen</Button>
            {
                failed &&  <Alert type="error" message="Beim Löschen sind Fehler aufgetreten."/>
            }
        </li>
    );
}
