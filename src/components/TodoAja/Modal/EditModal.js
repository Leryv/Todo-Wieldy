import React, { useState } from "react";
// import { Modal, Input, Button, Form, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { updateTodo } from "../Todos";
import EditForm from "../Form/EditForm";

// getContainer={false};
const EditModal = ({ id, todo }) => {

    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);

    const onUpdate = (values) => {
        console.log('Received values of form: ', values);
        dispatch(
            updateTodo({
                id: id,
                todo: values.newTodo,
            })
        );
        setVisible(false);
    };

    return (
        <div>

            <a
                onClick={() => {
                    setVisible(true);
                }}
            >
                Edit
            </a>
            <EditForm
                todo={todo}
                visible={visible}
                onUpdate={onUpdate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div >
    );
};

export default EditModal;
