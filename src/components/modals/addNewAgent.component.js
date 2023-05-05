import { Modal, Form, Input, Radio, DatePicker } from 'antd';

const AddNewAgentModal = ({ visible, onCancel, onCreate }) => {
  const [form] = Form.useForm();


  return (
    <Modal
      visible={visible}
      title="Add New Agent"
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
          name="agentName"
          label="Name of Agent"
          rules={[{ required: true, message: 'Please input the name of the agent!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: 'Please input the address of the agent!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input the phone number of the agent' }]}
        >
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddNewAgentModal;