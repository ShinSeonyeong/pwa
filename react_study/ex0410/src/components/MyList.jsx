import React from 'react';
import {Avatar, Divider, List} from "antd";

function MyList(props) {

    const data = [
        {
            title: 'Racing car sprays burning fuel into crowd.',
            description: '안녕하세요. 나는 홍길동입니다.',
        },
        {
            title: 'Japanese princess to wed commoner.',
            description: '안녕하세요. to wed commoner',
        },
        {
            title: 'Australian walks 100km after outback crash.',
            description: '안녕하세요. lian walks 100km after ',
        },
        {
            title: 'Man charged over missing wedding girl.',
            description: '안녕하세요. ssing wedding gir',
        },
        {
            title: 'Los Angeles battles huge wildfires.',
            description: '안녕하세요. battles huge wildf.',
        },

    ];

    return (
        <div className={'p-5'}>
            <h1 className={'text-4xl underline p-3 bg-gray-500 font-bold text-white'}>MyList</h1>
            <Divider>ant design 실습</Divider>
            <div className={'p-5'}>
                <List
                    header={<><h1 className={'text-3xl p-3'}>리뷰리스트</h1></>}
                    footer={<><h1 className={'text-3xl p-3'}>리뷰리스트끝</h1></>}
                    bordered
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                title={item.title}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default MyList;