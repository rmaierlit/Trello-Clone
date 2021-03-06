import { Button, Input, Space } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import React from 'react';

class AddCardButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            title: "",
        }
    }

    open = () => {
        this.setState({open: true});
    }

    close = () => {
        this.setState({open: false, title: ""});
    }

    addCard = () => {
        let listID = this.props.listID;
        let title = this.state.title;

        this.props.addCard(title, listID);
        // addCard prop is from Board.js

        this.close();
    }

    handleTextInput = (event) => {
        let title = event.target.value;
        this.setState({title});
    }


    render() {
        let { message } = this.props;
        let { title } = this.state;
        if (this.state.open){
            return (
                <Space direction="vertical" style={{width: "100%"}}>
                    <Input
                        autoFocus
                        style={{display: "block", width: "100%"}}
                        placeholder="Enter a title for this card..."
                        value={title}
                        onChange={this.handleTextInput}
                        onPressEnter={this.addCard}
                    />
                    <Space>
                        <Button type="primary" onClick={this.addCard}>Add Card</Button>
                        <Button shape="circle" icon={<CloseOutlined />} onClick={this.close}/>
                    </Space>
                </Space>
            )
        }

        return (
            <Button className="card" style={{marginBottom: 4}} block icon={<PlusOutlined />} onClick={this.open} >{message}</Button>
        );
    }
};

export default AddCardButton;