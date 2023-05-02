
import { useState } from 'react';
import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const TableComponent = ({ title, dataSource, columns, modal: ModalComponent }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAdd = () => {
    setIsModalVisible(true);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div style={{ height: '100vh', paddingTop: '0px', marginTop: '0px'}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '1.5rem' }}>{title}</h1>
        <div style={{ display: 'flex' }}>
          <Search
            placeholder="Search"
            allowClear
            onSearch={(value) => console.log(value)}
            style={{ marginRight: '1rem' }}
          />
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            {title}
          </Button>
        </div>
      </div>
      <Table
          style={{ width: '100%', overflowX: 'auto' }}
          columns={columns}
          dataSource={dataSource}
          pagination={{ pageSize: 10 }}
          scroll={{ y: 'calc(100vh - 190px)' }}
          title={() => {return title}}
        />

        <ModalComponent
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        />
      </div>
    
  );
};

export default TableComponent;


          
          
