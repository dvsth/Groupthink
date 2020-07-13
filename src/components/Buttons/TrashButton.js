import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons"

export default function TrashButton(props) {
    return (
        <Button
            type="primary"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={props.click}
        />
    )
}

