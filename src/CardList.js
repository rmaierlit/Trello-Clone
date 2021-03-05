import { List, Button, Dropdown, Menu } from "antd";

import { CloseOutlined, EditOutlined } from '@ant-design/icons';

import AddCardButton from "./AddCardButton";
import ListTitle from "./ListTitle";

let menu = (handleClick) => {
    return (
        <Menu onClick={handleClick}>
            <Menu.Item disabled key="1"> Open Card </Menu.Item>
            <Menu.Item disabled key="2"> Move </Menu.Item>
            <Menu.Item key="3"> Archive </Menu.Item>
        </Menu>
    );
}

function CardList({ title, data, listID, addCard, archiveCard, archiveList, editList }) {
    let renderItem = item => (
        <List.Item>
            <Button style={{display:"flex", justifyContent: "space-between", overflow: "hidden"}} className="card" block >
                {item.title}
            <Dropdown overlay={menu(handleClick(item.uuid))}>
                <EditOutlined style={{position: "relative", left: 8, top: 4}} />
            </Dropdown>
            </Button>
        </List.Item>
    ) 

    if (data.length === 0) {
        // default antd behavior is to display "No Data" when the data is an empty array
        // override that to display the Add Card button
        renderItem = () => (
            <List.Item>
                <AddCardButton message="Add another card" listID={listID} addCard={addCard} />
            </List.Item>
        )
    }

    let handleClick = uuid => e => {
        if (e.key === "3") {
            archiveCard(uuid);
        }
    }
    return (
        <List
            size="small"
            bordered
            header={
                <ListTitle title={title} listID={listID} archiveList={archiveList} editList={editList} />
            }
            footer={data.length? (<AddCardButton message="Add another card" listID={listID} addCard={addCard} />) : null}
            itemLayout="horizontal"
            dataSource={data.length? data : [{}]}
            renderItem={renderItem}
        />
    );
}

export default CardList;