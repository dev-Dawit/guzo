
import React from 'react';
import { Space } from 'antd';
import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';


import TableComponent from "../../../components/table/table"

import {
  FolderOpenOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import TabComponent from '../../../components/tabs/tab';
import AddNewDestinationModal from '../../../components/modals/addNewDestinationModal.component';

const itemsPerPage = 10;
const destinationTableColumns = [
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
    title: 'tags',
    dataIndex: 'tags',
    sorter: (a, b) => a.tags.localeCompare(b.tags),
    sortDirections: ['ascend', 'descend'],
    width: '18%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search tags"
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
    onFilter: (value, record) => record.tags.toLowerCase().includes(value.toLowerCase()),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    width: '18%',
    render: (_, record) => (
    <span>
    <Button type="link" icon={<OpenInNewIcon fontSize="small" />} onClick={() => handleDetail(record)}></Button>
    <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)}></Button>
    </span>
    ),
  },
];

const tagTableColumns = [
  {
    title: 'name',
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
    title: 'description',
    dataIndex: 'description',
    sorter: (a, b) => a.description.localeCompare(b.description),
    sortDirections: ['ascend', 'descend'],
    width: '18%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search description"
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
    onFilter: (value, record) => record.description.toLowerCase().includes(value.toLowerCase()),
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

const destinationTableData = [
  {
    key: "01",
    id: "001",
    nameOfDestination: "Lalibela",
    location: "Lalibela",
    tags: 'ገዳም፤ ውቅር አብያተ ክርስትያናት፤  በ UNISCO የተመዘገበ'
  },
  {
    key: "02",
    id: "002",
    nameOfDestination: "Debre Libanos",
    location: "Fiche",
    tags: 'ካቴድራል',
  },
  {
    key: "03",
    id: "003",
    nameOfDestination: "Seminesh Kidanemhret",
    location: "Semen Shewa",
    tags: 'ገዳም',
  },
  {
    key: "04",
    id: "004",
    nameOfDestination: "Gishen Mariam",
    location: "Wello",
    tags: 'ገዳም',
  },
  {
    key: "05",
    id: "005",
    nameOfDestination: "Aksum Tsion",
    location: "Aksum",
    tags: 'ገዳም',
  },
  {
    key: "06",
    id: "006",
    nameOfDestination: "Tana Kirkos",
    location: "Tana",
    tags: 'ገዳም',
  },
  {
    key: "07",
    id: "001",
    nameOfDestination: "Lalibela",
    location: "Lalibela",
    tags: 'ገዳም፤ ውቅር አብያተ ክርስትያናት፤  በ UNISCO የተመዘገበ'
  },
  {
    key: "08",
    id: "002",
    nameOfDestination: "Debre Libanos",
    location: "Fiche",
    tags: 'ካቴድራል',
  },
  {
    key: "09",
    id: "003",
    nameOfDestination: "Seminesh Kidanemhret",
    location: "Semen Shewa",
    tags: 'ገዳም',
  },
  {
    key: "10",
    id: "004",
    nameOfDestination: "Gishen Mariam",
    location: "Wello",
    tags: 'ገዳም',
  },
  {
    key: "11",
    id: "005",
    nameOfDestination: "Aksum Tsion",
    location: "Aksum",
    tags: 'ገዳም',
  },
  {
    key: "11",
    id: "006",
    nameOfDestination: "Tana Kirkos",
    location: "Tana",
    tags: 'ገዳም',
  },
];

const tagTableData = [
  {
    key: '01',
    name: 'ውቅር አብያት ክርስትያናት ',
    description: 'በላሊበላ 11 ውቅር አብያተ ክርስትያናት አሉ...  ',
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

const tabs = [
  {
    key: '1',
    title: 'የመዳረሻዎች ዝርዝር',
    content: <div>
      <TableComponent title = {'Destinations'} columns={destinationTableColumns} dataSource={destinationTableData} itemsPerPage= {itemsPerPage} modal={AddNewDestinationModal} />
    </div>,
  },
  {
    key: '2',
    title: 'Tag',
    content: <div>  
        <TableComponent columns={tagTableColumns} dataSource={tagTableData} modal={AddNewDestinationModal} />
    </div>,
  },
];

const Destination = () => {
  return (
    <TabComponent tabs={tabs}/>
  )
}

export default Destination;
