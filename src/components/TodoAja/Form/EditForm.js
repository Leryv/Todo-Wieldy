import React from "react";
import { Modal, Input, Form,message } from "antd";

const EditForm = ({ visible, onUpdate, onCancel, todo }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="Edit Task"
            okText="Edit"
            cancelText="Cancel"
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        onUpdate(values);
                        message.success('Task Berhasil Diubah');
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
            onCancel={
                form.resetFields(),
                onCancel
            }
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}

            >
                <Form.Item
                    name="newTodo"
                    rules={[
                        {
                            required: true,
                            message: 'Todo cannot empty!',
                        },
                    ]}
                >
                    <Input
                        placeholder="Input todo..."
                        defaultValue={todo}
                    />
                </Form.Item>
            </Form>
        </Modal >
    );
};

export default EditForm;
