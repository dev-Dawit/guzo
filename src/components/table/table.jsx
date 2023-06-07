
import { useState } from 'react';
import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Column } = Table;

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
    <div style={{display: 'flex',}}>
      <div  style={{  }}>
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
        style={{flex: 1, overflowY: 'auto', overflowX: 'auto'}}
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
        scroll={{ y: 'calc(100vh - 190px)' }}
        title={() => {return title}}
      />
      {columns.map((column) => (
        <Column key={column.dataIndex} {...column} />
      ))}
      <ModalComponent
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      </div>
      </div>
  );
};

export default TableComponent;


          
          
