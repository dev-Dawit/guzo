import { useState } from "react";

import { BreadCrumbSection } from "../../../components/breadCrumb/breadCrumb"

import { Table, Button, Modal, Form, Input, Tabs, DatePicker, Upload, message, Descriptions, Comment, Avatar } from 'antd';
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
import TableInModal from "../../../components/tableInModal/tableInModal";

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
        count: '20',
        activeTrips: [
          {
            id: 1,
            name: 'ልዩ የገና ጉዞ',
            destination: 'ሳማ ሰንበት',
            // Add more trip details as needed
          },
          {
            id: 2,
            name: 'ሳማ ሰንበት',
            destination: 'ሳማ ሰንበት',
            // Add more trip details as needed
          },
        ],
        comments: [
          {
            id: 1,
            nameOfPassenger: 'ሃብቶም',
            content: 'በጣም ደስ ብሎኛል',
            datetime: '12/02/23',
            // Add more trip details as needed
          },
        ],
        desputes: [
          {
            id: 1,
            nameOfPassenger: 'ሃብቶም',
            despute: 'ያልተገቡ ነገሮች አይቻለሁ',
            datetime: '12/02/23',
          }, 
          // Add more desputes as needed
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

    const tableInModalColumns = [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' },
      { key: 'destination', title: 'Destination' },
      { key: 'passengerCount', title: 'Passengers Count' },
      // Add more columns as needed
    ];

    const tableInModalColumnForCancledTrips = [
      { key: 'id', title: 'ID' },
      { key: 'name', title: 'Name' },
      { key: 'destination', title: 'Destination' },
      // Add more columns as needed
    ];

    const tableInModalColumnsForPassengersComments = [
      { key: 'id', title: 'ID' },
      { key: 'nameOfPassenger', title: 'Name of Passenger' },
      { key: 'comment', title: 'Comment' },
      { key: 'datetime', title: 'Date' },
      // Add more columns as needed
    ];

    const tableInModalColumnsForPassengersDesputes = [
      { key: 'id', title: 'ID' },
      { key: 'nameOfPassenger', title: 'Name of Passenger' },
      { key: 'despute', title: 'Despute' },
      { key: 'datetime', title: 'Date' },
      // Add more columns as needed
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
            label="Agent name"
            rules={[{ required: true, message: 'ስም' }]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item
            name="address"
            label="Address"
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

            <Tabs defaultActiveKey="basic">
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
                  <TableInModal columns={tableInModalColumns} data={selectedAgent.activeTrips} />
                </div>
            <br/>
            <div className="custom-modal-footer">
              <button className="custom-modal-button" onClick={handleDetailModalClose}>
                Close
              </button>
            </div>
              </TabPane>

            <TabPane tab="የተከናወኑ ጉዞዎች" key="3">
              <div className="table-container">
                <TableInModal columns={tableInModalColumns} data={selectedAgent.activeTrips} />
              </div>
              <br/>
              <div className="custom-modal-footer">
                <button className="custom-modal-button" onClick={handleDetailModalClose}>
                  Close
                </button>
              </div> 
            </TabPane>

            <TabPane tab="የተሰረዙ ጉዞዎች" key="4">
              <div className="table-container">
                <TableInModal columns={tableInModalColumnForCancledTrips} data={selectedAgent.activeTrips} />
              </div>
              <br/>
              <div className="custom-modal-footer">
                <button className="custom-modal-button" onClick={handleDetailModalClose}>
                  Close
                </button>
              </div>
            </TabPane>

            <TabPane tab="የምዕመናን አስተያየቶች" key="5">
              <div className="comments-tab">
                {selectedAgent.comments.map((comment) => (
                  <div className="comments-tab-content" key={comment.id}>
                    <TableInModal columns={tableInModalColumnsForPassengersComments} data={selectedAgent.comments} />
                  </div>
                ))}
                {selectedAgent.comments.length === 0 && <p>No comments available.</p>}
              </div>
            </TabPane>

            <TabPane tab="የምዕመናን ቅሬታዎች" key="6">
              <div className="comments-tab">
                {selectedAgent.desputes.map((despute) => (
                  <div className="comments-tab-content" key={despute.id}>
                    <TableInModal columns={tableInModalColumnsForPassengersDesputes} data={selectedAgent.desputes} />
                  </div>
                ))}
                {selectedAgent.desputes.length === 0 && <p>No desputes available.</p>}
              </div>
            </TabPane>
            </Tabs>
          </div>
        )}
      </Modal>
      </div>
    )
  }
  
  export default Agents;




