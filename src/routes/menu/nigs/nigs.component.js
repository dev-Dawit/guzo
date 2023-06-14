import { useState } from "react";
import { BreadCrumbSection } from "../../../components/breadCrumb/breadCrumb"
import TableComponent from "../../../components/table/table"

import { Table, Button, Modal, Form, Input, Upload, message, Select, DatePicker, Descriptions } from 'antd';

import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import {
  FolderOpenOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import TabComponent from "../../../components/tabs/tab";
import AddNewNigsModal from "../../../components/modals/addNewNigs.component";
import TagChip from "../../../components/tagChip/tagChip.component";

import { EditIcon } from '../../../components/actionIcons/edit/editIcon.component';
import { DetailIcon } from '../../../components/actionIcons/openDetail/detailIcon.component';

const renderTags = (tags) => {
  return tags.map((tag) => (
    <TagChip key={tag.id} name={tag.name} description={tag.description} />
  ));
}


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

const nigsTableData = [
  {
    key: '01',
    name: 'ልደተ ክርስቶስ',
    nameOfKdus: 'ቅዱስ ላሊበላ',
    departureDate: '02/01/2023',
    tags: [
      { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
      { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
      { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
    ]
  },
  {
    key: '02',
    name: 'ልደተ ክርስቶስ',
    nameOfKdus: 'ቅዱስ ላሊበላ',
    departureDate: '02/01/2023',
    tags: [
      { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
      { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
      { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
    ]
  },
  {
    key: '03',
    name: 'ልደተ ክርስቶስ',
    nameOfKdus: 'ቅዱስ ላሊበላ',
    departureDate: '02/01/2023',
    tags: [
      { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
      { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
      { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
    ]
  },
  {
    key: '04',
    name: 'ልደተ ክርስቶስ',
    nameOfKdus: 'ቅዱስ ላሊበላ',
    departureDate: '02/01/2023',
    tags: [
      { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
      { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
      { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
    ]
  },
  {
    key: '05',
    name: 'ልደተ ክርስቶስ',
    nameOfKdus: 'ቅዱስ ላሊበላ',
    departureDate: '02/01/2023',
    tags: [
      { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
      { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
      { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
    ]
  },
  {
    key: '06',
    name: 'ልደተ ክርስቶስ',
    nameOfKdus: 'ቅዱስ ላሊበላ',
    departureDate: '02/01/2023',
    tags: [
      { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
      { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
      { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
    ]
  },
  {
    key: '07',
    name: 'ልደተ ክርስቶስ',
    nameOfKdus: 'ቅዱስ ላሊበላ',
    departureDate: '02/01/2023',
    tags: [
      { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
      { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
      { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
    ]
  },
  {
    key: '08',
    name: 'ልደተ ክርስቶስ',
    nameOfKdus: 'ቅዱስ ላሊበላ',
    departureDate: '02/01/2023',
    tags: [
      { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
      { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
      { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
    ]
  },
  {
    key: '09',
    name: 'ልደተ ክርስቶስ',
    nameOfKdus: 'ቅዱስ ላሊበላ',
    departureDate: '02/01/2023',
    tags: [
      { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
      { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
      { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
    ]
  },
];

const tagTableData = [
  {
    key: '01',
    name: '9ኙ አበይት በዓላት ',
    description: 'ልደተ ክርስቶስ፤ ግዝረት፤ ጥምቀት፤ ስቅለት፤ ትንሳኤ፤ እርገት፤  '
  },
  
]



const Nigs = (data, columns,onSave) => {
  const [selectedNigs, setselectedNigs] = useState(null)
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleDetailClick = (destination) => {
    setselectedNigs(destination);
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

  const nigsTableColumns = [
    {
      title: 'የበዓሉ ስም',
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
      title: 'የበዓሉ ቀን',
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
      title: 'የሚከብሩ ቅዱሳን',
      dataIndex: 'nameOfKdus',
      sorter: (a, b) => a.nameOfKdus.localeCompare(b.nameOfKdus),
      sortDirections: ['ascend', 'descend'],
      width: '10%',
      filterDropdown: ({ setSelectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            placeholder="Search name of saint"
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
      onFilter: (value, record) => record.nameOfKdus.toLowerCase().includes(value.toLowerCase()),
      filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    },
    { title: 'Tags', dataIndex: 'tags', key: 'tags', render: renderTags 
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
  
  const tabs = [
    {
      key: '1',
      title: 'ንግስ በዓላት ዝርዝር',
      content: <div>
        <TableComponent title = {'Nigs'} columns={nigsTableColumns} dataSource={nigsTableData} modal={AddNewNigsModal} />
      </div>,
    },
    {
      key: '2',
      title: 'Tag',
      content: <div>  
          <TableComponent columns={tagTableColumns} dataSource={tagTableData} modal={AddNewNigsModal} />
      </div>,
    },
  ];

    return (
      <div>
        <TabComponent tabs={tabs}/>
        <Modal
        title="Edit Nigs information"
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
        title="Nigs Details"
        footer={null}
      >
      {selectedNigs && (
          <div>
            {nigsTableColumns.map((column) => {
              if (column.dataIndex !== 'action') {
                return(
                  <Descriptions>
                    <Descriptions.Item key={column.dataIndex} label={column.title}>{selectedNigs[column.dataIndex]}</Descriptions.Item>
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
  
export default Nigs;