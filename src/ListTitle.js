import { Button, Input } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import React, { useState } from "react";

function ListTitle({ title, listID, archiveList, editList }) {
    let [edit, setEdit] = useState(false);
    let [text, setText] = useState(title);

    let inputRef = React.useRef(null);

    let handleChange = e => {
        setText(e.target.value);
    }

    let open = () => {
        setEdit(true);
        console.log(inputRef.current);
        inputRef.current.focus({cursor: "end"});
    };

    let update = () => {
        editList(listID, text)
        setEdit(false);
    }

    let close = () => {
        setEdit(false);
        setText(title);
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontWeight: 600, marginTop: 4, flexGrow: 1, marginLeft: 8, visibility: edit ? "hidden" : "initial" }} onClick={open}>{title}</div>
            <Input
                ref={inputRef}
                style={{ position: "absolute", width: 210, zIndex: edit ? 99 : -99 }}
                value={text}
                onChange={handleChange}
                onPressEnter={update}
                onBlur={close}
            />
            <Button size="small" style={{ marginRight: 0, marginTop: 4 }} icon={<CloseOutlined />} onClick={() => { archiveList(listID) }} />
        </div>
    )
}

export default ListTitle;