import { useState } from "react";

import { BreadCrumbSection } from "../../../components/breadCrumb/breadCrumb"

import { Table, Button, Modal, Form, Input, Tabs, DatePicker, Upload, message, Descriptions } from 'antd';
import { PlusOutlined, SearchOutlined, } from '@ant-design/icons';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  FolderOpenOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import AddNewAgentModal from "../../../components/modals/addNewAgent.component";
import TableComponent from "../../../components/table/table";
import '../../../components/actionIcons/openDetail/detailIcon.component';

import { EditIcon } from '../../../components/actionIcons/edit/editIcon.component';
import { DetailIcon } from '../../../components/actionIcons/openDetail/detailIcon.component';

const { TabPane } = Tabs;

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
    const [activeTab, setActiveTab] = useState('1');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [form] = Form.useForm();

    const handleEditClick = () => {
      setEditModalVisible(true);
    };
  
    const handleDetailClick = (record) => {
      setselectedAgent(record);
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

    const handleTabChange = (key) => {
      setActiveTab(key);
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      setUploadedFile(file);
    };

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
            <DetailIcon onClick={() => handleDetailClick(record)} />
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
        activeTrips: [
          {
            id: 1,
            name: 'Trip 1',
            destination: 'Destination A',
            // Add more trip details as needed
          },
          {
            id: 2,
            name: 'Trip 2',
            destination: 'Destination B',
            // Add more trip details as needed
          },
        ]
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
        footer={null}
        width= '70%'
      >
      {selectedAgent && (
          <div className="custom-modal-content" >
            <h2 className="custom-modal-title">{`Agent Detail${selectedAgent ? ` - ${selectedAgent.name}` : ''}`}</h2>
            <Tabs defaultActiveKey="basic" activeKey={activeTab} onChange={handleTabChange}>
              <TabPane tab="Basic" key="basic">
                <div className="basic-tab">
                  <h2 className="basic-tab-title">Basic Information</h2>
                  <div className="basic-tab-content">
                    <div className="basic-tab-field">
                      <label>Name:  </label>
                      <span>{selectedAgent.name}</span>
                    </div>
                    <div className="basic-tab-field">
                      <label>Contact Person:  </label>
                      <span>{selectedAgent.contactPerson}</span>
                    </div>
                    <div className="basic-tab-field">
                      <label>Contact Person Phone:  </label>
                      <span>{selectedAgent.phoneNo}</span>
                    </div>
                    <div className="basic-tab-field">
                      <label>ያደራጀው ሰ/ት/ቤት:  </label>
                      <span>{selectedAgent.name}</span>
                    </div>
                    <div className="basic-tab-field">
                      <label>Level:  </label>
                      <span>{selectedAgent.level}</span>
                    </div>
                    <div className="basic-tab-field">
                      <label>Status:  </label>
                      <span>{selectedAgent.status}</span>
                    </div>
                    <div className="basic-tab-field">
                      <label>Address:  </label>
                      <span>{selectedAgent.address}</span>
                    </div>
                    <div className="basic-tab-field">
                      <label>Date of Registration:  </label>
                      <span>{selectedAgent.dateOfReg}</span>
                    </div>
                    <div className="basic-tab-field">
                    <label>Uploaded File:</label>
                    {uploadedFile ? (
                      <span>{uploadedFile.name}</span>
                    ) : (
                      <input type="file" onChange={handleFileUpload} />
                    )}
                    </div>
                  </div>
                </div>
              </TabPane>

              <TabPane tab="በሂደት ላይ ያሉ ጉዞዎች" key="2">
              <div className="table-container">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Trip ID</th>
                      <th>Name</th>
                      <th>Destination</th>
                      {/* Add more table headers as needed */}
                    </tr>
                  </thead>
                  <tbody>
                    {selectedAgent.activeTrips.map((trip) => (
                      <tr key={trip.id}>
                        <td>{trip.id}</td>
                        <td>{trip.name}</td>
                        <td>{trip.destination}</td>
                        {/* Add more table cells for additional trip details */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            <br/>
            <div className="custom-modal-footer">
              <button className="custom-modal-button" onClick={handleDetailModalClose}>
                Close
              </button>
            </div>
              </TabPane>

              <TabPane tab="የተከናወኑ ጉዞዎች" key="3">
                
              </TabPane>

              <TabPane tab="የተሰረዙ ጉዞዎች" key="4">
              
              </TabPane>

              <TabPane tab="የምዕመናን አስተያየቶች" key="5">
              
              </TabPane>
            </Tabs>
          </div>
        )}
      </Modal>
      </div>
    )
  }
  
  export default Agents;




