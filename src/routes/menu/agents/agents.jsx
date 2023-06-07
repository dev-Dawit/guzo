import { useState } from "react";

import { BreadCrumbSection } from "../../../components/breadCrumb/breadCrumb"

import { Table, Button, Modal, Form, Input, DatePicker, Upload, message } from 'antd';
import { PlusOutlined, SearchOutlined, } from '@ant-design/icons';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  FolderOpenOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import AddNewAgentModal from "../../../components/modals/addNewAgent.component";
import TableComponent from "../../../components/table/table";

import { EditIcon } from '../../../components/actionIcons/edit/editIcon.component';
import { DetailIcon } from '../../../components/actionIcons/openDetail/detailIcon.component';


const handleDetail = (record) => {
  console.log('Detail', record);
};

const handleEdit = (record) => {
  console.log('Edit', record);
};

const handleDelete = (record) => {
  console.log('Delete', record);
};

const handleSearch = (value) => {
  // Implement search logic here
  console.log('Search', value);
};

const Agents = (data, columns,onSave) => {
    const [selectedAgent, setselectedAgent] = useState(null)
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [detailModalVisible, setDetailModalVisible] = useState(false);
    const [form] = Form.useForm();

    const handleEditClick = () => {
      setEditModalVisible(true);
    };
  
    const handleDetailClick = (destination) => {
      setselectedAgent(destination);
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

    const agentTableColumns = [
      {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        sortDirections: ['ascend', 'descend'],
        width: '18%',
        filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder="Search name"
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
        title: 'Phone No.',
        dataIndex: 'phoneNo',
        sorter: (a, b) => a.phoneNo - b.phoneNo,
        sortDirections: ['ascend', 'descend'],
        width: '15%',
        filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder="Search phone no."
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
        title: 'Address',
        dataIndex: 'address',
        sorter: (a, b) => a.address.localeCompare(b.address),
        sortDirections: ['ascend', 'descend'],
        width: '18%',
        filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder="Search address"
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
        onFilter: (value, record) => record.address.toLowerCase().includes(value.toLowerCase()),
        filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      },
      {
        title: 'Level',
        dataIndex: 'level',
        sorter: (a, b) => a.level.localeCompare(b.level),
        sortDirections: ['ascend', 'descend'],
        width: '18%',
        filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder="Search level"
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
        onFilter: (value, record) => record.level.toLowerCase().includes(value.toLowerCase()),
        filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        sorter: (a, b) => a.status - b.status,
        sortDirections: ['ascend', 'descend'],
        width: '18%',
        filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder="Search status"
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
        onFilter: (value, record) => record.status === parseInt(value),
        filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      },
      {
        title: 'Registration Date',
        dataIndex: 'regDate',
        sorter: (a, b) => a.regDate.localeCompare(b.regDate),
        sortDirections: ['ascend', 'descend'],
        width: '18%',
        filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              placeholder="Search registration date"
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
        onFilter: (value, record) => record.regDate.toLowerCase().includes(value.toLowerCase()),
        filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
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

    const agentTableData = [
      {
        key: '01',
        name: 'Mahbere Kidusan',
        phoneNo: '0911230032',
        address: 'ቦሌ መድሃኒአለም',
        level: '3 Star',
        status: 'Reliable',
        regDate: '01/01/2023',
      },
      {
        key: '02',
        name: 'Finote Tsidk',
        phoneNo: '0922232323',
        address: 'ቦሌ መድሃኒአለም',
        level: '3 Star',
        status: 'Reliable',
        regDate: '01/01/2023',
      },
      {
        key: '03',
        name: 'Kidst Arsema',
        phoneNo: '0910237390',
        address: 'ቦሌ መድሃኒአለም',
        level: '2 Star',
        status: 'Comfortable',
        regDate: '01/01/2023',
      },
      {
        key: '04',
        name: 'Mahbere Kidusan',
        phoneNo: '0911230032',
        address: 'ቦሌ መድሃኒአለም',
        level: '3 Star',
        status: 'Reliable',
        regDate: '01/01/2023',
      },
      {
        key: '05',
        name: 'Finote Tsidk',
        phoneNo: '0922232323',
        address: 'ቦሌ መድሃኒአለም',
        level: '3 Star',
        status: 'Reliable',
        regDate: '01/01/2023',
      },
      {
        key: '06',
        name: 'Kidst Arsema',
        phoneNo: '0910237390',
        address: 'ቦሌ መድሃኒአለም',
        level: '2 Star',
        status: 'Comfortable',
        regDate: '01/01/2023',
      },
      {
        key: '07',
        name: 'Mahbere Kidusan',
        phoneNo: '0911230032',
        address: 'ቦሌ መድሃኒአለም',
        level: '3 Star',
        status: 'Reliable',
        regDate: '01/01/2023',
      },
      {
        key: '08',
        name: 'Finote Tsidk',
        phoneNo: '0922232323',
        address: 'ቦሌ መድሃኒአለም',
        level: '3 Star',
        status: 'Reliable',
        regDate: '01/01/2023',
      },
      {
        key: '09',
        name: 'Kidst Arsema',
        phoneNo: '0910237390',
        address: 'ቦሌ መድሃኒአለም',
        level: '2 Star',
        status: 'Comfortable',
        regDate: '01/01/2023',
      },
    ];

    return (
      <div>
        <TableComponent title ={'Agents'} columns={agentTableColumns} dataSource={agentTableData} modal={AddNewAgentModal} />
        <Modal
        title="Edit Agent information"
        visible={editModalVisible}
        onCancel={handleEditModalClose}
        /* Other modal props and content */
        >
          <Form form={form}>
          <Form.Item
            name="name"
            label="የበዓሉ ስም"
            rules={[{ required: true, message: 'ስም' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
          name="dateOfDeparture"
          label="Date of Departure"
          rules={[
            {
              message: 'Please select the date of departure!',
            },
          ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            name="nameOfKdusan"
            label="የሚከብሩ ቅዱሳን"
            rules={[{ required: true, message: 'መዳረሻ' }]}
          >
            <input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        visible={detailModalVisible}
        onCancel={handleDetailModalClose}
        title="Agent Details"
        footer={null}
      >
      {selectedAgent && (
          <div>
            {agentTableColumns.map((column) => {
              if (column.dataIndex !== 'action') {
                return(
                  <p key={column.dataIndex}>
                    {column.title}: {selectedAgent[column.dataIndex]}
                  </p>
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
  
  export default Agents;




