
import React from 'react';
import { Space } from 'antd';
import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import TableComponent from "../../../components/table/table"

import {
  FolderOpenOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import TabComponent from '../../../components/tabs/tab';
import AddNewDestinationModal from '../../../components/modals/addNewDestinationModal.component';

const items = [
  {
    key: '1',
    label: `Active Destinations`,
    // children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Archived Destinations`,
    // children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Recurring Destinations`,
    // children: `Content of Tab Pane 3`,
  },
];

const data = [
  {
    key: "01",
    id: "001",
    nameOfDestination: "Lalibela",
    location: "Lalibela",
    km: 400,
    destinationType: 'ጠበል'
  },
  {
    key: "02",
    id: "002",
    nameOfDestination: "Debre Libanos",
    location: "Fiche",
    km: 200,
    destinationType: 'ካቴድራል',
  },
  {
    key: "03",
    id: "003",
    nameOfDestination: "Seminesh Kidanemhret",
    location: "Semen Shewa",
    km: 110,
    destinationType: 'ገዳም',
  },
  {
    key: "04",
    id: "004",
    nameOfDestination: "Gishen Mariam",
    location: "Wello",
    km: 170,
    destinationType: 'ገዳም',
  },
  {
    key: "05",
    id: "005",
    nameOfDestination: "Aksum Tsion",
    location: "Aksum",
    km: 770,
    destinationType: 'ገዳም',
  },
  {
    key: "06",
    id: "006",
    nameOfDestination: "Tana Kirkos",
    location: "Tana",
    km: 600,
    destinationType: 'ገዳም',
  },
];

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: (a, b) => a.id.localeCompare(b.id),
    sortDirections: ['ascend', 'descend'],
    width: '10%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search id"
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
    onFilter: (value, record) => record.id.toLowerCase().includes(value.toLowerCase()),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'Name Of Destination',
    dataIndex: 'nameOfDestination',
    sorter: (a, b) => a.nameOfDestination - b.nameOfDestination,
    sortDirections: ['ascend', 'descend'],
    width: '20%',
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
    onFilter: (value, record) => record.nameOfDestination === parseInt(value),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'Location',
    dataIndex: 'location',
    sorter: (a, b) => a.location.localeCompare(b.location),
    sortDirections: ['ascend', 'descend'],
    width: '18%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search location"
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
    onFilter: (value, record) => record.location.toLowerCase().includes(value.toLowerCase()),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'Km from A.A',
    dataIndex: 'km',
    sorter: (a, b) => a.km.localeCompare(b.km),
    sortDirections: ['ascend', 'descend'],
    width: '15%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search km"
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
    onFilter: (value, record) => record.km.toLowerCase().includes(value.toLowerCase()),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'Type of Destination',
    dataIndex: 'destinationType',
    sorter: (a, b) => a.destinationType.localeCompare(b.destinationType),
    sortDirections: ['ascend', 'descend'],
    width: '20%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search Destination Type"
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
    onFilter: (value, record) => record.destinationType.toLowerCase().includes(value.toLowerCase()),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    width: '18%',
    render: (_, record) => (
    <span>
    <Button type="link" icon={<FolderOpenOutlined />} onClick={() => handleDetail(record)}></Button>
    <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)}></Button>
    </span>
    ),
  },
];

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

const Destination = () => {
  return (
    <div>
      <TabComponent items={items} />
      <TableComponent title={'Destinations'} columns={columns} dataSource={data} modal={AddNewDestinationModal } />
    </div>
  );
}

export default Destination;
