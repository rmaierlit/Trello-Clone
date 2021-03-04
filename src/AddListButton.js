import { Button, Input, Space } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import React from 'react';

const { TextArea } = Input;

class AddListButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            ListTitle: "",
        }
    }

    open = () => {
        this.setState({open: true});
    }

    close = () => {
        this.setState({open: false});
    }

    addList = () => {
        let title = this.state.title;

        this.props.addList(title);
        // addCard prop is from Board.js

        this.close();
    }

    handleTextInput = (event) => {
        let title = event.target.value;
        this.setState({title});
    }


    render() {
        let { title } = this.state;
        if (this.state.open){
            return (
                <Space direction="vertical" style={{width: "100%", backgroundColor: "#ebecf0"}}>
                    <TextArea style={{display: "block", width: "100%"}} placeholder="Enter list title..." value={title} onChange={this.handleTextInput}/>
                    <Space>
                        <Button type="primary" onClick={this.addList}>Add List</Button>
                        <Button shape="circle" icon={<CloseOutlined />} onClick={this.close}/>
                    </Space>
                </Space>
            )
        }

        return (
            <Button className="card" style={{ width: 240, marginLeft: 8 }} icon={<PlusOutlined />} onClick={this.open} >Add another list</Button>
        );
    }
};

export default AddListButton;