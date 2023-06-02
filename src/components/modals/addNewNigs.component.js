import { useState } from 'react';
import { Modal, Form, Input, DatePicker, Select, Checkbox } from 'antd';

const destinations = ['ደብረ ሊባኖስ', 'ላሊበላ', 'አክሱም ጽዮን']
const agents = ['ማህበረ ቅዱሳን', 'ፍኖተ ጽድቅ', 'ግቢ ጉባኤ']

const { Option } = Select;

const AddNewNigsModal = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();

  return (
    <Modal
      visible={visible}
      title="Add New Nigs"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="add_trip_form">
        <Form.Item
          name="nameOfNigs"
          label="የበዓሉ ስም"
          rules={[
            {
              required: true,
              message: 'Please input the name of trip!',
            },
          ]}
        >
          <Input />
          </Form.Item>
        <Form.Item
          name="dateOfNigs"
          label="የበዓሉ ቀን"
          rules={[
            {
              required: true,
              message: 'Please select the date of departure!',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        
      </Form>
    </Modal>
  );
};

export default AddNewNigsModal;