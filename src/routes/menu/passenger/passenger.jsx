import React, { useState } from 'react';
import { Table, Button, Modal, Form, Input, Upload, message, Select, Descriptions  } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import TableComponent from "../../../components/table/table";
import AddNewPassenger from '../../../components/modals/addNewPassenger';
import { EditIcon } from '../../../components/actionIcons/edit/editIcon.component';
import { DetailIcon } from '../../../components/actionIcons/openDetail/detailIcon.component';
import GlobalSearch from '../../../components/global search/globalSearch.component';


const handleDetail = (record) => {
  console.log('Detail', record);
};

const handleEdit = (record) => {
  console.log('Edit', record);
};


const Passenger = (data, columns, onSave) => {
  const [selectedPassenger, setselectedPassenger] = useState(null)
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleDetailClick = (destination) => {
    setselectedPassenger(destination);
    setDetailModalVisible(true);
  };

  const handleEditModalClose = () => {
    setEditModalVisible(false);
  };

  const handleDetailModalClose = () => {
    setDetailModalVisible(false);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      onSave(values);
    });
  }
  const passengerTableColumns = [
    {
      title: 'name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ['ascend', 'descend'],
      width: '18%',
      filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="search name"
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.name.toLowerCase().includes(value.toLowerCase()),
      filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    },
    {
      title: 'Telephone',
      dataIndex: 'phoneNo',
      sorter: (a, b) => a.phoneNo - b.phoneNo,
      sortDirections: ['ascend', 'descend'],
      width: '15%',
      filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="search telephone"
            onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => confirm()}
            style={{ width: 188, marginBottom: 8, display: 'block' }}
          />
          <Button
            type="primary"
            onClick={() => confirm()}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90, marginRight: 8 }}
          >
            Search
          </Button>
          <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </div>
      ),
      onFilter: (value, record) => record.phoneNo === parseInt(value),
      filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    },
    {
      title: 'email',
      dataIndex: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
    },
    {
      title: 'Date of birth',
      dataIndex: 'dob',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: '18%',
      render: (_, record) => (
      <span>
        <DetailIcon onClick={handleDetailClick} />
        <EditIcon onClick={handleEditClick} />
      </span>
      ),
    },
  ];
  
  const passengerTableData = [
    {
      key: '01',
      name: 'ሃብቶም ወ/አብ',
      phoneNo: '0910237390',
      email: 'habtom@gamil.com',
      gender: 'Male',
      dob: '12/11/2023',
    },
    {
      key: '02',
      name: 'ሃብቶም ወ/አብ',
      phoneNo: '0910237390',
      email: 'habtom@gamil.com',
      gender: 'Male',
      dob: '12/11/2023',
    },
    {
      key: '03',
      name: 'ሃብቶም ወ/አብ',
      phoneNo: '0910237390',
      email: 'habtom@gamil.com',
      gender: 'Male',
      dob: '12/11/2023',
    },
    {
      key: '04',
      name: 'ሃብቶም ወ/አብ',
      phoneNo: '0910237390',
      email: 'habtom@gamil.com',
      gender: 'Male',
      dob: '12/11/2023',
    },
    {
      key: '05',
      name: 'ሃብቶም ወ/አብ',
      phoneNo: '0910237390',
      email: 'habtom@gamil.com',
      gender: 'Male',
      dob: '12/11/2023',
    },
    {
      key: '06',
      name: 'ሃብቶም ወ/አብ',
      phoneNo: '0910237390',
      email: 'habtom@gamil.com',
      gender: 'Male',
      dob: '12/11/2023',
    },
    {
      key: '07',
      name: 'ሃብቶም ወ/አብ',
      phoneNo: '0910237390',
      email: 'habtom@gamil.com',
      gender: 'Male',
      dob: '12/11/2023',
    },
    {
      key: '08',
      name: 'ሃብቶም ወ/አብ',
      phoneNo: '0910237390',
      email: 'habtom@gamil.com',
      gender: 'Male',
      dob: '12/11/2023',
    },
    {
      key: '09',
      name: 'ሃብቶም ወ/አብ',
      phoneNo: '0910237390',
      email: 'habtom@gamil.com',
      gender: 'Male',
      dob: '12/11/2023',
    },
  ];

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
      <GlobalSearch style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'right' }}/>
      <TableComponent title ={'Passenger'} columns={passengerTableColumns} dataSource={passengerTableData} modal={AddNewPassenger} />
      </div>
      
      <Modal
        title="Edit Passenger information"
        visible={editModalVisible}
        onCancel={handleEditModalClose}
        /* Other modal props and content */
        >
        <Form form={form}>
      <Form.Item
        name="name"
        label="ስም"
        rules={[{ required: true, message: 'ስም' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="email"
        label="email"
        rules={[{ required: true, message: 'መዳረሻ' }]}
      >
        <Input />
      </Form.Item>
    </Form>
      </Modal>

      <Modal
        visible={detailModalVisible}
        onCancel={handleDetailModalClose}
        title="Passenger Details"
        footer={null}
      >
      {selectedPassenger && (
          <div>
          {passengerTableColumns.map((column) => {
            if (column.dataIndex !== 'action') {
              return(
                <Descriptions>
                  <Descriptions.Item key={column.dataIndex} label={column.title}>{selectedPassenger[column.dataIndex]}</Descriptions.Item>
                </Descriptions>
              )
            }  
          })
          }
          </div>
        )}
      </Modal>
    </div>
    )
  }
  

export default Passenger;