import * as React from "react";
import {useState} from "react";
import {Alert, Button, Col, Input, Row} from "antd";
import axios from "axios";

export interface CreateTodoListEntryProps {
    readonly onSubmit: () => void;
}

export const CreateTodoListEntry = (props: CreateTodoListEntryProps) => {
    const [title, setTitle] = useState<string>();
    const [failed, setFailed] = useState<boolean>(false);

    const onChange = (event: any) => {
        setTitle(event.target.value);
    }

    const onSubmit = () => {
        axios.post("/todos", title, {
            headers: {
                "Content-Type": "text/plain"
            }
        }).then(() => {
            setFailed(false);
            props.onSubmit();
        }).catch(e => {
            setFailed(true);
        });
    }

    const isSubmitEnabled = title && title.trim().length > 0;
    return (
        <div>
            <Input.Group>
                <Row gutter={8}>
                    <Col span={10}>
                        <Input value={title} onChange={onChange}/>
                    </Col>
                    <Col span={6}>
                        <Button type="primary" disabled={!isSubmitEnabled} onClick={onSubmit}>Anlegen</Button>
                    </Col>
                </Row>
            </Input.Group>
            {
                failed && <Alert type="error" message="Beim Speichern sind Fehler aufgetreten."/>
            }
        </div>
    );
}
