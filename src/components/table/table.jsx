
import { useState } from 'react';
import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import GlobalSearchComponent from '../global search/globalSearch.component';
import GlobalSearch from '../global search/globalSearch.component';

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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Controls the title and add new modal */}
        <h1 style={{ fontSize: '1rem' }}>{title}</h1>
        <div style={{ display: 'flex' }}>
          <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
            {title}
          </Button>
        </div>
      </div>
    <div style={{ flex: '1', overflow: 'auto' }}>
      <div style={{ height: '100%', overflow: 'auto' }}>
        <Table
          style={{ minWidth: '100%', overflow: 'auto' }}
          columns={columns}
          dataSource={dataSource}
          pagination={{ pageSize: 5 }}
          scroll={{ y: '100%', x: '100%' }}
          title={() => title}
        />
      </div>
    </div>
    {columns.map((column) => (
      <Column key={column.dataIndex} {...column} />
    ))}
    <ModalComponent
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    />
  </div>
  )

}

export default TableComponent;


          
          
