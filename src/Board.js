import { Breadcrumb, Space, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CardList from "./CardList";
import React from 'react';

const DEFAULT_CARDS = {
    "asdf": {
        uuid: "asdf",
        title: "laundry",
        list: "1234",
        archived: false,
    },
    "hjkl": {
        uuid: "hjkl",
        title: "vacuum",
        list: "5678",
        archived: false,
    },
    "uiop": {
        uuid: "uiop",
        title: "feed cats",
        list: "1234",
        archived: false,
    }
}

const DEFAULT_LISTS = {
    "1234": {
        uuid: "1234",
        title: "To Do",
        archived: false,
    },
    "5678": {
        uuid: "5678",
        title: "Doing",
        archived: false,
    },
    "9900": {
        uuid: "9900",
        title: "Done",
        archived: false,
    },
}

const DEFAULT_LIST_ORDER = [
    "1234",
    "5678",
    "9900",
]

class Board extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            cards: DEFAULT_CARDS,
            lists: DEFAULT_LISTS,
            listOrder: DEFAULT_LIST_ORDER,
        }
    }
    render() {
        let AllLists = this.state.listOrder.map(
            listID => {
                let list = this.state.lists[listID];
                let cards = Object.values(this.state.cards).filter(
                    card => (card.list === listID)
                );
                return (
                    <CardList title={list.title} data={cards} />
                )
            }
        )
        return (
            <>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Space align="start">
                    {AllLists}
                    <Button style={{ width: "240px", marginLeft: 8 }} icon={<PlusOutlined />}>Add another list</Button>
                </Space>
            </>
        )
    };
};

export default Board;