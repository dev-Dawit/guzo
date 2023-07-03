import { Modal, Form, Input, Radio, DatePicker } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const AddNewTag = ({ visible, onCancel, onCreate }) => {
  const [form] = Form.useForm();


  return (
    <Modal
      visible={visible}
      title="Add New Tag"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          form.resetFields();
          onCreate(values);
        });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="add_new_agent_form"
      >
        <Form.Item
          name="tagName"
          label="Name of Tag"
          rules={[{ required: true, message: 'Please input the name of the agent!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please input the address of the agent!' }]}
        >
          <TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddNewTag;