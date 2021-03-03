import { Breadcrumb, Space, Button, List } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CardList from "./CardList";
import React from 'react';

const LIST_ONE_DATA = [
    {
        title: 'card 1',
    },
    {
        title: 'card 2',
    },
    {
        title: 'card 3',
    },
    {
        title: 'card 4',
    },
];

const LIST_TWO_DATA = [
    {
        title: 'card 1',
    },
    {
        title: 'card 2',
    },
];

class Board extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            cards: {},
            lists: {},
            listOrder: [],
        }
    }
    render() {
        return (
            <>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Space align="start">
                    <CardList title="To Do" data={LIST_ONE_DATA} />
                    <CardList title="Doing" data={LIST_TWO_DATA} />
                    <CardList title="Done" data={[]} />
                    <Button style={{ width: "272px" }} style={{ marginLeft: 8 }} icon={<PlusOutlined />}>Add another list</Button>
                </Space>

            </>
        )
    };
};

export default Board;