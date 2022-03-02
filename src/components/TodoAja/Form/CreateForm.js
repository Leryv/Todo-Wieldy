import React from "react";
import { Modal, Input, Form, message } from "antd";

const CreateForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            getContainer={false}
            visible={visible}
            title="New Task"
            okText="Create"
            cancelText="Cancel"
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                        message.success('Task Berhasil Ditambah');
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
            onCancel={onCancel}
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
                    name="todo"
                    rules={[
                        {
                            required: true,
                            message: 'Please Input Task',
                        },
                    ]}
                >
            <Input
              placeholder="Input Task"
              autoComplete="off"
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CreateForm;
