import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons"

export default function AddButton(props) {

    const styles = {
        backgroundColor: 'transparent',
        color: 'whitesmoke',
        borderWidth: 0,
        fontSize: '20px'
    }

    return (
        <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={props.click}
            style={styles}
        >
            Add Node
        </Button>
    )
}

