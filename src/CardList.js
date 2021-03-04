import { List, Button, Dropdown, Menu } from "antd";

import { PlusOutlined, EditOutlined } from '@ant-design/icons';

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

function CardList({ title, data, listID, addCard, archiveCard }) {
    if (data.length === 0) {
        // default antd behavior is to display "No Data" when the data is an empty array
        // override that to only display the header and footer
        return (<NoDataList title={title} />);
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
            header={<div style={{fontWeight: 600, marginLeft: 8}}>{title}</div>}
            footer={<AddCardButton message="Add another card" listID={listID} addCard={addCard} />}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Button className="card" block >
                        {item.title}
                    </Button>
                    <Dropdown overlay={menu(handleClick(item.uuid))}>
                        <Button icon={<EditOutlined />} />
                    </Dropdown>
                </List.Item>
            )}
        />
    );
}

function NoDataList({ title }) {
    return (
        <List
            size="small"
            bordered
            header={<div style={{fontWeight: 600, marginLeft: 8}}>{title}</div>}
            itemLayout="horizontal"
            dataSource={[{ title: "no data" }]}
            renderItem={item => (
                <List.Item>
                    <Button className="card" block icon={<PlusOutlined />} >Add a card</Button>
                </List.Item>
            )}
        />
    )
}

export default CardList;