import { List, Button, Dropdown, Menu } from "antd";

import { CloseOutlined, EditOutlined } from '@ant-design/icons';

import AddCardButton from "./AddCardButton";

let menu = (handleClick) => {
    return (
        <Menu onClick={handleClick}>
            <Menu.Item disabled key="1"> Open Card </Menu.Item>
            <Menu.Item disabled key="2"> Move </Menu.Item>
            <Menu.Item key="3"> Archive </Menu.Item>
        </Menu>
    );
}

function CardList({ title, data, listID, addCard, archiveCard, archiveList }) {
    let renderItem = item => (
        <List.Item>
            <Button className="card" block >
                {item.title}
            </Button>
            <Dropdown overlay={menu(handleClick(item.uuid))}>
                <Button icon={<EditOutlined />} />
            </Dropdown>
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
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span style={{ fontWeight: 600, marginLeft: 8 }}>{title}</span>
                    <Button size="small" style={{ marginRight: 0 }} icon={<CloseOutlined />} onClick={()=> {archiveList(listID)}}/>
                </div>
            }
            footer={data.length? (<AddCardButton message="Add another card" listID={listID} addCard={addCard} />) : null}
            itemLayout="horizontal"
            dataSource={data.length? data : [{}]}
            renderItem={renderItem}
        />
    );
}

export default CardList;