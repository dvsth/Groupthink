import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons"

export default function TrashButton(props) {

    const styles = {
        backgroundColor: 'transparent',
        color: 'white',
        marginRight: '5px',
        height: '15px',
        borderWidth: 0,
        marginTop: '5px',
        fontSize: '18px'
    }

    return (
        <Button
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={props.click}
            style={styles}
        />
    )
}

