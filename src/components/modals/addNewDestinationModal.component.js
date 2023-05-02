// import { Modal, Form, Input, Radio, DatePicker } from 'antd';

// const AddNewDestinationModal = ({ visible, onCancel, onCreate }) => {
//   const [form] = Form.useForm();

//   const destinationTypeOptions = [
//     { label: 'ገዳማት', value: 'ገዳማት' },
//     { label: 'ጠበል', value: 'ጠበል' },
//     { label: 'ካቴድራል', value: 'ካቴድራል' },
//     { label: 'በአቅራቢያዎት ያለ ቤተክርስቲያን', value: 'በአቅራቢያዎት ያለ ቤተክርስቲያን' },
//   ];

//   return (
//     <Modal
//       visible={visible}
//       title="Add New Destination"
//       okText="Create"
//       cancelText="Cancel"
//       onCancel={onCancel}
//       onOk={() => {
//         form.validateFields().then((values) => {
//           form.resetFields();
//           onCreate(values);
//         });
//       }}
//     >
//       <Form
//         form={form}
//         layout="vertical"
//         name="add_new_destination_form"
//       >
//         <Form.Item
//           name="destinationName"
//           label="Name of Destination"
//           rules={[{ required: true, message: 'Please input the name of the destination!' }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="address"
//           label="Address"
//           rules={[{ required: true, message: 'Please input the address of the destination!' }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="destinationType"
//           label="Destination Type"
//           rules={[{ required: true, message: 'Please select a destination type!' }]}
//         >
//           <Radio.Group options={destinationTypeOptions} />
//         </Form.Item>
//         <Form.Item
//           name="distanceFromCapitalCity"
//           label="Distance from Capital City (in km)"
//           rules={[{ required: true, message: 'Please input the distance from the capital city!' }]}
//         >
//           <Input type="number" />
//         </Form.Item>
//         <Form.Item
//           name="description"
//           label="Description"
//           rules={[{ required: true, message: 'Please input a description of the destination!' }]}
//         >
//           <Input.TextArea rows={4} />
//         </Form.Item>
//         <Form.Item
//           name="specialDayToVisit"
//           label="Special Day to Visit"
//           rules={[{ required: true, message: 'Please select a special day to visit!' }]}
//         >
//           <DatePicker />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default AddNewDestinationModal;






import { Modal, Form, Input, Radio, DatePicker, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const AddNewDestinationModal = ({ visible, onCancel, onCreate }) => {
  const [form] = Form.useForm();

  const destinationTypeOptions = [
    { label: 'ገዳማት', value: 'ገዳማት' },
    { label: 'ጠበል', value: 'ጠበል' },
    { label: 'ካቴድራል', value: 'ካቴድራል' },
    { label: 'በአቅራቢያዎት ያለ ቤተክርስቲያን', value: 'በአቅራቢያዎት ያለ ቤተክርስቲያን' },
  ];

  const propsPictures = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const propsVideos = {
    name: 'file',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Modal
      visible={visible}
      title="Add New Destination"
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
        name="add_new_destination_form"
      >
        <Form.Item
          name="destinationName"
          label="Name of Destination"
          rules={[{ required: true, message: 'Please input the name of the destination!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true, message: 'Please input the location of the destination!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="destinationType"
          label="Destination Type"
          rules={[{ required: true, message: 'Please select a destination type!' }]}
        >
          <Radio.Group options={destinationTypeOptions} />
        </Form.Item>
        <Form.Item
          name="distanceFromCapitalCity"
          label="Distance from Capital City (in km)"
          rules={[{ required: true, message: 'Please input the distance from the capital city!' }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please input a description of the destination!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
        name="specialDayToVisit"
        label="Special Day to Visit"
        rules={[{ required: true, message: 'Please select a special day to visit!' }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="pictureAlbum"
        label="Picture Album"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
      >
        <Dragger {...propsPictures}>
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for multiple uploads.</p>
        </Dragger>
      </Form.Item>
      <Form.Item
        name="uploadVideos"
        label="Upload Videos"
        valuePropName="fileList"
        getValueFromEvent={(e) => e.fileList}
      >
        <Dragger {...propsVideos}>
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for only one upload.</p>
        </Dragger>
      </Form.Item>
    </Form>
  </Modal>
);
};

export default AddNewDestinationModal;

         













































































