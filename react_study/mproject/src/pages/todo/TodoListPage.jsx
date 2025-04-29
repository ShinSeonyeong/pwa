import React, {useEffect, useState} from 'react';
import {Button, message, Table, Tag} from "antd";
import {useNavigate} from "react-router-dom";

function TodoListPage(props) {
    const [todos, setTodos] = useState([
        {"id": 1, "todo": "Do something nice for someone you care about", "completed": false, "userId": 152},
        {"id": 2, "todo": "Do something nice", "completed": true, "userId": 152}
    ]);
    const navigate = useNavigate();
    const [selectedRowkeys, setSelectedRowKeys] = useState([]);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            width: 50,
        },
        {
            title: '할일',
            dataIndex: 'todo',
            key: 'todo'
        },
        {
            title: '완료여부',
            dataIndex: 'completed',
            key: 'completed',
            render: (completed, record) => (
                // <select>
                //     {completed ? (<option>완료</option>): (<option>미완료</option>)}
                // </select>
                <Tag color={String(completed) === 'true' ? "green" : "volcano"}>
                    {String(completed) === 'true' ? "완료" : "미완료"}
                </Tag>
            )
        },
        {
            title: '사용자',
            dataIndex: 'userId',
            key: 'userId',
        }
    ];

    const rowSelection = {
        selectedRowkeys: selectedRowkeys,
        onChange: (newselectedRowKeys) => {
            setSelectedRowKeys(newselectedRowKeys)
        },
    }

    const LoadData = async () => {
        fetch('https://6809e0631f1a52874cde2b73.mockapi.io/todos')
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => b.id - a.id);
                setTodos(sortedData);
            })
    }

    return (
        <div>
            <h1>Todo, List Page</h1>
            <div style={{display: "flex", gap: "0.5rem"}}>
                <Button type="primary" style={{margin: '1rem 0'}} onClick={LoadData}>조회</Button>
                <Button type="primary" style={{margin: '1rem 0'}} onClick={() => {
                    console.log(selectedRowkeys);
                    if (selectedRowkeys.length !== 1) {
                        message.warning('한개의 행만 선택하세요.');
                        return;
                    }
                    navigate(`/todo/modify/${selectedRowkeys[0]}`);
                }}>수정</Button>
                <Button type="primary" style={{margin: '1rem 0'}} onClick={() => {
                }}>삭제</Button>
            </div>
            <Table rowSelection={rowSelection} dataSource={todos} rowKey="id" columns={columns}></Table>
            {
                todos.map(todo => {
                    return (<h1 key={todo.id}>{todo.todo}</h1>)
                })
            }
        </div>
    );
}

export default TodoListPage;