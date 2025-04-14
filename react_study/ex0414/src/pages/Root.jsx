import React from 'react';
import {Card, Col, Layout, Row} from "antd";
import styles from "./Root.module.css"

const {Content} = Layout;

function Root(props) {
    return (
        <>
            <Content className={styles.content}>
                <Row>
                    {/*xs: 화면 가장 작을 때*/}
                    <Col className={styles.col}
                         xs={24} sm={12} md={8}>
                        TEST
                    </Col>
                    <Col className={styles.col}
                         xs={24} sm={12} md={8}>
                        TEST
                    </Col>
                    <Col className={styles.col}
                         xs={24} sm={12} md={8}>
                        TEST
                    </Col>
                </Row>
            </Content>
        </>
    );
}

export default Root;