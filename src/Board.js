import { Breadcrumb, Space, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import CardList from "./CardList";
import AddListButton from "./AddListButton";
import React from 'react';
import { v4 as makeUUID } from "uuid";

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
    constructor(props) {
        super(props);
        this.state = {
            cards: DEFAULT_CARDS,
            lists: DEFAULT_LISTS,
            listOrder: DEFAULT_LIST_ORDER,
        }
    }
    addCard = (title, listID) => {
        let uuid = makeUUID();
        let card = {
            uuid,
            title,
            list: listID,
            archived: false,
        }
        let newCards = { ...this.state.cards, [uuid]: card }; // copies the old cards and adds the new one
        this.setState({ cards: newCards });
    }

    archiveCard = (cardID) => {
        // copy the object so state never gets mutated directly
        let card = Object.assign({}, this.state.cards[cardID]);
        card.archived = true;

        let newCards = { ...this.state.cards, [cardID]: card }; // copies the old cards but updates the "archived" property of the card matching the uuid
        this.setState({ cards: newCards });
    }

    addList = (title) => {
        let uuid = makeUUID();
        let list = {
            uuid,
            title,
            archived: false,
        }
        let newLists = { ...this.state.lists, [uuid]: list }; // copies the old lists and adds the new one
        let newListOrder = [...this.state.listOrder, uuid]; // copies the old list order and adds the new one to the end
        this.setState({ lists: newLists, listOrder: newListOrder })
    }

    archiveList = (listID) => {
        // copy the object so state never gets mutated directly
        let list = Object.assign({}, this.state.cards[listID]);
        list.archived = true;

        let newLists = { ...this.state.lists, [listID]: list }; // copies the old cards but updates the "archived" property of the card matching the uuid
        let newListOrder = this.state.listOrder.filter(listID => {
            return newLists[listID].archived === false
        });
        this.setState({ lists: newLists, listOrder: newListOrder })
    }

    render() {
        // make an array of all cards so you can filter it by list later
        let filterableCards = Object.values(this.state.cards);

        let allLists = this.state.listOrder.map(
            listID => {
                let list = this.state.lists[listID];
                let cardsForThisList = filterableCards.filter(
                    card => (card.list === listID && card.archived === false)
                );
                return (
                    <CardList
                        title={list.title}
                        data={cardsForThisList}
                        listID={listID}
                        addCard={this.addCard}
                        archiveCard={this.archiveCard}
                        archiveList={this.archiveList}
                    />
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
                    {allLists}
                    <AddListButton addList={this.addList} />
                </Space>
            </>
        )
    };
};

export default Board;