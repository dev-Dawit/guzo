import { BreadCrumbSection } from "../../../components/breadCrumb/breadCrumb"

import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import TableComponent from "../../../components/table/table";

import {
  FolderOpenOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import TabComponent from "../../../components/tabs/tab";
import AddNewTripModal from "../../../components/modals/addNewTrip.component";

const items = [
  {
    key: '1',
    label: `Active Trips`,
    // children: `Content of Tab Pane 1`,
  },
  {
    key: '2',
    label: `Archived Trips`,
    // children: `Content of Tab Pane 2`,
  },
  {
    key: '3',
    label: `Recurring Trips`,
    // children: `Content of Tab Pane 2`,
  },
];

const columns = [
  {
    title: 'የጉዞው ስም',
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
    title: 'መዳረሻዎች',
    dataIndex: 'destinations',
    sorter: (a, b) => a.destinations - b.destinations,
    sortDirections: ['ascend', 'descend'],
    width: '15%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search Destinations"
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
    onFilter: (value, record) => record.destinations === parseInt(value),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'አዘጋጅ',
    dataIndex: 'agent',
    sorter: (a, b) => a.agent.localeCompare(b.agent),
    sortDirections: ['ascend', 'descend'],
    width: '18%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search agent"
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
    onFilter: (value, record) => record.agent.toLowerCase().includes(value.toLowerCase()),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'ዋጋ',
    dataIndex: 'price',
    sorter: (a, b) => a.price.localeCompare(b.price),
    sortDirections: ['ascend', 'descend'],
    width: '10%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search price"
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
    onFilter: (value, record) => record.price.toLowerCase().includes(value.toLowerCase()),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'የጉዞ መነሻ ቀን',
    dataIndex: 'departureDate',
    sorter: (a, b) => a.departureDate - b.departureDate,
    sortDirections: ['ascend', 'descend'],
    width: '18%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search Date of Departure"
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
    onFilter: (value, record) => record.departureDate === parseInt(value),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'መመለሻ ቀን',
    dataIndex: 'arrivalDate',
    sorter: (a, b) => a.arrivalDate.localeCompare(b.arrivalDate),
    sortDirections: ['ascend', 'descend'],
    width: '18%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search arrival date"
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
    onFilter: (value, record) => record.arrivalDate.toLowerCase().includes(value.toLowerCase()),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'መነሻ ቦታ',
    dataIndex: 'placeOfDeparture',
    sorter: (a, b) => a.placeOfDeparture.localeCompare(b.placeOfDeparture),
    sortDirections: ['ascend', 'descend'],
    width: '18%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search Place of Departure"
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
    onFilter: (value, record) => record.placeOfDeparture.toLowerCase().includes(value.toLowerCase()),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'ጥቅል',
    dataIndex: 'packages',
    sorter: (a, b) => a.packages.localeCompare(b.packages),
    sortDirections: ['ascend', 'descend'],
    width: '18%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search Packages"
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
    onFilter: (value, record) => record.packages.toLowerCase().includes(value.toLowerCase()),
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

const data = [
  {
    key: '01',
    name: 'ልዩ የገና ጉዞ',
    destinations: 'ላሊበላ',
    agent: 'ማህበረ ቅዱሳን',
    price: '500.00',
    departureDate: '02/01/2023',
    arrivalDate: '01/03/2023',
  },
  {
    key: '01',
    name: 'ልዩ የገና ጉዞ',
    destinations: 'ላሊበላ',
    agent: 'ማህበረ ቅዱሳን',
    price: '500.00',
    departureDate: '02/01/2023',
    arrivalDate: '01/03/2023',
  },
  {
    key: '01',
    name: 'ልዩ የገና ጉዞ',
    destinations: 'ላሊበላ',
    agent: 'ማህበረ ቅዱሳን',
    price: '500.00',
    departureDate: '02/01/2023',
    arrivalDate: '01/03/2023',
  },
  {
    key: '01',
    name: 'ልዩ የገና ጉዞ',
    destinations: 'ላሊበላ',
    agent: 'ማህበረ ቅዱሳን',
    price: '500.00',
    departureDate: '02/01/2023',
    arrivalDate: '01/03/2023',
  },
  {
    key: '01',
    name: 'ልዩ የገና ጉዞ',
    destinations: 'ላሊበላ',
    agent: 'ማህበረ ቅዱሳን',
    price: '500.00',
    departureDate: '02/01/2023',
    arrivalDate: '01/03/2023',
  },
  {
    key: '01',
    name: 'ልዩ የገና ጉዞ',
    destinations: 'ላሊበላ',
    agent: 'ማህበረ ቅዱሳን',
    price: '500.00',
    departureDate: '02/01/2023',
    arrivalDate: '01/03/2023',
  },
  {
    key: '01',
    name: 'ልዩ የገና ጉዞ',
    destinations: 'ላሊበላ',
    agent: 'ማህበረ ቅዱሳን',
    price: '500.00',
    departureDate: '02/01/2023',
    arrivalDate: '01/03/2023',
  },
  {
    key: '01',
    name: 'ልዩ የገና ጉዞ',
    destinations: 'ላሊበላ',
    agent: 'ማህበረ ቅዱሳን',
    price: '500.00',
    departureDate: '02/01/2023',
    arrivalDate: '01/03/2023',
  },
  {
    key: '01',
    name: 'ልዩ የገና ጉዞ',
    destinations: 'ላሊበላ',
    agent: 'ማህበረ ቅዱሳን',
    price: '500.00',
    departureDate: '02/01/2023',
    arrivalDate: '01/03/2023',
  },
];


const Trip = () => {
    return (
      <div>
        <TabComponent items={items}/>
        <TableComponent title ={'Trips'} columns={columns} dataSource={data} modal={AddNewTripModal} />
      </div>
    )
  }
  
  export default Trip