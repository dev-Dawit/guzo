import React from 'react'
import TableComponent from '../../../components/table/table';
import TabComponent from '../../../components/tabs/tab';

import { Table, Button, Modal, Form, Input, Upload, message } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import {
  FolderOpenOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import AddNewKdusModal from "../../../components/modals/addNewKdus.component";


const kdusanTablecolumns = [
  {
    title: 'የቅዱሳን ስም',
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
    title: 'የተሰጣቸው ቃልኪዳን',
    dataIndex: 'kalkidan',
    sorter: (a, b) => a.kalkidan - b.kalkidan,
    sortDirections: ['ascend', 'descend'],
    width: '18%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search type of kalkidan"
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
    onFilter: (value, record) => record.kalkidan === parseInt(value),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'የመሰረቷቸው ገዳማት',
    dataIndex: 'nameofBaet',
    sorter: (a, b) => a.nameofBaet.localeCompare(b.nameofBaet),
    sortDirections: ['ascend', 'descend'],
    width: '10%',
    filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder="Search name the holy place"
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
    onFilter: (value, record) => record.nameofBaet.toLowerCase().includes(value.toLowerCase()),
    filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    width: '18%',
    render: (_, record) => (
    <span>
    <Button type="link" icon={<OpenInNewIcon fontSize='small' />} onClick={() => handleDetail(record)}></Button>
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

const kdusanTableData = [
  {
    key: '01',
    name: 'አቡነ ተክለሃይማኖት',
    nameofBaet: 'ደብረ ሊባኖስ',
    kalkidan: '25ኛው ካህናተ ሰማይ',
  },
  {
    key: '02',
    name: 'አቡነ ተክለሃይማኖት',
    nameofBaet: 'ደብረ ሊባኖስ',
    kalkidan: '25ኛው ካህናተ ሰማይ',
  },
  {
    key: '03',
    name: 'አቡነ ተክለሃይማኖት',
    nameofBaet: 'ደብረ ሊባኖስ',
    kalkidan: '25ኛው ካህናተ ሰማይ',
  },
  {
    key: '04',
    name: 'አቡነ ተክለሃይማኖት',
    nameofBaet: 'ደብረ ሊባኖስ',
    kalkidan: '25ኛው ካህናተ ሰማይ',
  },
  {
    key: '05',
    name: 'አቡነ ተክለሃይማኖት',
    nameofBaet: 'ደብረ ሊባኖስ',
    kalkidan: '25ኛው ካህናተ ሰማይ',
  },
  {
    key: '06',
    name: 'አቡነ ተክለሃይማኖት',
    nameofBaet: 'ደብረ ሊባኖስ',
    kalkidan: '25ኛው ካህናተ ሰማይ',
  },
  {
    key: '07',
    name: 'አቡነ ተክለሃይማኖት',
    nameofBaet: 'ደብረ ሊባኖስ',
    kalkidan: '25ኛው ካህናተ ሰማይ',
  },
  {
    key: '08',
    name: 'አቡነ ተክለሃይማኖት',
    nameofBaet: 'ደብረ ሊባኖስ',
    kalkidan: '25ኛው ካህናተ ሰማይ',
  },
  {
    key: '09',
    name: 'አቡነ ተክለሃይማኖት',
    nameofBaet: 'ደብረ ሊባኖስ',
    kalkidan: '25ኛው ካህናተ ሰማይ',
  },
];

const tagTableData = [
  {
    key: '01',
    name: '9ኙ አበይት በዓላት ',
    description: 'ልደተ ክርስቶስ፤ ግዝረት፤ ጥምቀት፤ ስቅለት፤ ትንሳኤ፤ እርገት፤  '
  },
  
]

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
    title: 'ንግስ በዓላት ዝርዝር',
    content: <div>
      <TableComponent title = {'Kdusan'} columns={kdusanTablecolumns} dataSource={kdusanTableData} modal={AddNewKdusModal} />
    </div>,
  },
  {
    key: '2',
    title: 'Tag',
    content: <div>  
        <TableComponent columns={tagTableColumns} dataSource={tagTableData} modal={AddNewKdusModal} />
    </div>,
  },
];

const Kdusan = () => {
  return (
    <TabComponent tabs={tabs}/>
  )
}

export default Kdusan;