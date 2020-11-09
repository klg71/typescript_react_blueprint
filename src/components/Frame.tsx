import * as React from "react";
import {Card, Col, Row} from "antd";
import {ReactNode} from "react";

export interface FrameProps {
    readonly children: ReactNode
}

export const Frame = (props: FrameProps) => {
    return (
        <div style={{paddingTop: "50px"}}>
        <Row>
            <Col span={8} offset={8} >
                <Card>
                {props.children}
                </Card>
            </Col>
        </Row>
        </div>
    )
}
