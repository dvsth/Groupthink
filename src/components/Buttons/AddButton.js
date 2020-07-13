import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons"

export default function AddButton(props) {
    console.log(props)
    return (
        <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={props.click}
        />
    )
}

