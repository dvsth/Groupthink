import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons"

export default function AddButton(props) {

    const styles = {
        backgroundColor: 'white',
        color: 'blue',
        borderWidth: 0,
        fontSize: '24px'
    }

    return (
        <Button
            type="primary"
            shape="circle"
            value="Add Node"
            icon={<PlusOutlined />}
            onClick={props.click}
            style={styles}
        />
    )
}

