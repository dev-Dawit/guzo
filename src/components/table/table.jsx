
import { useState } from 'react';
import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const TableComponent = (props) => {
  const [visible, setVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [form] = Form.useForm();

  const handleAdd = () => {
    setVisible(true);
  };

  const handleOk = () => {
    form.validateFields()
      .then((values) => {
        console.log('Received values:', values);
        form.resetFields();
        setImageUrl(null);
        setVisible(false);
      })
      .catch((errorInfo) => {
        console.log('Validation failed:', errorInfo);
      });
  };

  const handleCancel = () => {
    form.resetFields();
    setImageUrl(null);
    setVisible(false);
  };

  const handleImageUpload = (info) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setImageUrl(info.file.response.url);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div style={{ height: '100vh', paddingTop: '0px', marginTop: '0px'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem' }}>{props.title}</h1>
        <div style={{ display: 'flex' }}>
          <Search
            placeholder="Search"
            allowClear
            onSearch={(value) => console.log(value)}
            style={{ marginRight: '1rem' }}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            Add new item
          </Button>
        </div>
      </div>
      <Table
        columns={props.columns}
        dataSource={props.dataSource}
        pagination={{ pageSize: 10 }}
        scroll={{ y: 'calc(100vh - 190px)' }}
        title={() => {return props.title}}
      />

      <Modal
        title="Add new item"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please enter a name',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                required: true,
                message: 'Please enter an age',
              },
            ]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            name="address"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please enter an address',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="image"
            label="Image"
            rules={[
              {
                required: true,
                message: 'Please upload an image',
              },
            ]}
          >
            <Upload
              name="image"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType
              showUploadList={false}
              onChange={handleImageUpload}
            >
              <Button>Upload</Button>
              {imageUrl && (
                <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
              )}
            </Upload>
        </Form.Item>
      </Form>
      </Modal>
    </div>
  );
};

export default TableComponent;


          
          
