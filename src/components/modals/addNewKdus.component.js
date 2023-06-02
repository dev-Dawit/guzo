import { useState } from 'react';
import { Modal, Form, Input, DatePicker, Select, Checkbox } from 'antd';

const destinations = ['ደብረ ሊባኖስ', 'ላሊበላ', 'አክሱም ጽዮን']
const agents = ['ማህበረ ቅዱሳን', 'ፍኖተ ጽድቅ', 'ግቢ ጉባኤ']

const { Option } = Select;

const AddNewKdusModal = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [tripTypeModalities, setTripTypeModalities] = useState([]);

  const handleTripTypeChange = (value) => {
    setTripTypeModalities(value);
  };

  return (
    <Modal
      visible={visible}
      title="Add New Kdus"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values, tripTypeModalities);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="add_trip_form">
        <Form.Item
          name="nameOfTrip"
          label="Name of Trip"
          rules={[
            {
              required: true,
              message: 'Please input the name of trip!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="destination" label="የመሰረቷቸው ገዳማት" rules={[{ required: true, message: 'የገዳም ስም አላስገቡም' }]}>
          <Select placeholder="የገዳም ስም ያስገቡ">
            {destinations.map(destination => <Option value={destination} key={destination}>{destination}</Option>)}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddNewKdusModal;