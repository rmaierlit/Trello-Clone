import { List, Button } from "antd";

import { PlusOutlined } from '@ant-design/icons';

function CardList({title, data}) {
    if (data.length === 0) {
        // default antd behavior is to display "No Data" when the data is an empty array
        // override that to only display the header and footer
        return (<NoDataList title={title}/>);
    }
    return (
        <List
            size="small"
            bordered
            header={<div>{title}</div>}
            footer={<Button block icon={<PlusOutlined />} >Add another card</Button>}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={item => (
                <List.Item>
                    <Button block >{item.title}</Button>
                </List.Item>
            )}
        />
    );
}

function NoDataList({title}) {
    return(
        <List
            size="small"
            bordered
            header={<div>{title}</div>}
            itemLayout="horizontal"
            dataSource={[{title: "no data"}]}
            renderItem={item => (
                <List.Item>
                    <Button block icon={<PlusOutlined />} >Add a card</Button>
                </List.Item>
            )}
        />
    )
}

export default CardList;