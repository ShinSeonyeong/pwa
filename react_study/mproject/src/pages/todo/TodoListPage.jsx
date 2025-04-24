import React, {useEffect, useState} from 'react';
import {Button, Table, Tag} from "antd";

function TodoListPage(props) {
    const [todos, setTodos] = useState([
        {"id": 1, "todo": "Do something nice for someone you care about", "completed": false, "userId": 152},
        {"id": 2, "todo": "Do something nice", "completed": true, "userId": 152}
    ]);

    useEffect(() => {
        // console.log(todos);
    }, []);

    const LoadData = () => {
        fetch('https://dummyjson.com/todos')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTodos(data.todos);0
            })
    }

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
                <Tag color={completed ? "green" : "volcano"}>
                    {completed ? "완료" : "미완료"}
                </Tag>
            )
        },
        {
            title: '사용자',
            dataIndex: 'userId',
            key: 'userId',
        }
    ]

    return (
        <div>
            <h1>Hi, List Page</h1>
            {
                todos.map(todo => {
                    return (<h1 key={todo.id}>{todo.todo}</h1>)
                })
            }
            <Button type="primary" style={{margin: '1rem 0'}} onClick={LoadData}>조회</Button>
            <Table dataSource={todos} rowKey="id" columns={columns}></Table>
        </div>
    );
}

export default TodoListPage;