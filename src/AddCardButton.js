import { Button, Input, Space } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import React from 'react';

const { TextArea } = Input;

class AddCardButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            cardTitle: "",
        }
    }

    open = () => {
        this.setState({open: true});
    }

    close = () => {
        this.setState({open: false});
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
        let { message, title } = this.props;
        if (this.state.open){
            return (
                <Space direction="vertical" style={{width: "100%"}}>
                    <TextArea style={{display: "block", width: "100%"}} placeholder="Enter a title for this card..." value={title} onChange={this.handleTextInput}/>
                    <Space>
                        <Button type="primary" onClick={this.addCard}>Add Card</Button>
                        <Button shape="circle" icon={<CloseOutlined />} onClick={this.close}/>
                    </Space>
                </Space>
            )
        }

        return (
            <Button className="card" block icon={<PlusOutlined />} onClick={this.open} >{message}</Button>
        );
    }
};

export default AddCardButton;