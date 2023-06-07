import { useState } from "react";
import { BreadCrumbSection } from "../../../components/breadCrumb/breadCrumb"

import { Table, Progress, Button, Modal, Form, Input, Upload, message, Select, DatePicker } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import TableComponent from "../../../components/table/table";

import {
  FolderOpenOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import TabComponent from "../../../components/tabs/tab";
import AddNewTripModal from "../../../components/modals/addNewTrip.component";
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

const tagTableData = [
  {
    key: '01',
    name: '9ኙ አበይት በዓላት ',
    description: 'ልደተ ክርስቶስ፤ ግዝረት፤ ጥምቀት፤ ስቅለት፤ ትንሳኤ፤ እርገት፤  '
  },
  
]


const Trip = (data, columns,onSave) => {
  const [selectedTrip, setselectedTrip] = useState(null)
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleDetailClick = (destination) => {
    setselectedTrip(destination);
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

  const tripTablecolumns = [
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
      title: 'ማህበር',
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
      title: 'Progress',
      dataIndex: 'progress',
      key: 'progress',
      width: '18%',
      render: (value) => (
        <Progress percent={value} size="small" />
      ),
    },
    {
      title: 'Modality',
      dataIndex: 'modality',
      key: 'modality',
      width: '18%',
    },
    { title: 'Tags',
      dataIndex: 'tags', 
      key: 'tags', 
      width: '18%',
      render: renderTags 
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

  const tripTabledata = [
    {
      key: '01',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      progress: '20',
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '01',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      progress: '30',
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '01',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      progress: '20',
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '01',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      progress: '54',
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '01',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      progress: '23',
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '01',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      progress: '3',
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '01',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      progress: '100',
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '01',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      progress: '20',
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '01',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      progress: '20',
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
  ];
  
  const tabs = [
    {
      key: '1',
      title: 'በመካሄድ ላይ ያሉ ጉዞዎች',
      content: <div>
        <TableComponent title = {'Trips'} columns={tripTablecolumns} dataSource={tripTabledata} modal={AddNewTripModal} />
      </div>,
    },
    {
      key: '2',
      title: 'የተካሄዱ ጉዞዎች',
      content: <div>
        <TableComponent title = {'Trips'} columns={tripTablecolumns} dataSource={tripTabledata} modal={AddNewTripModal} />
      </div>,
    },
    {
      key: '3',
      title: 'የሚደጋገሙ ጉዞዎች',
      content: <div>
        <TableComponent title = {'Trips'} columns={tripTablecolumns} dataSource={tripTabledata} modal={AddNewTripModal} />
      </div>,
    },
    {
      key: '4',
      title: 'Tag',
      content: <div>  
          <TableComponent title = {'Trips'} columns={tagTableColumns} dataSource={tagTableData} modal={AddNewTripModal} />
      </div>,
    },
  ];

    return (
      <div>
        <TabComponent tabs={tabs}/>
        <Modal
        title="Edit Trip information"
        visible={editModalVisible}
        onCancel={handleEditModalClose}
        /* Other modal props and content */
        >
          <Form form={form}>
          <Form.Item
            name="name"
            label="የጉዞው ስም"
            rules={[{ required: true, message: 'ስም' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="destinations"
            label="መዳረሻዎች"
            rules={[{ required: true, message: 'ስም' }]}
          >
            <Select mode="tags" style={{width: '100%'}} placeholder="መዳረሻ ይምረጡ"/>
          </Form.Item>
          <Form.Item
            name="mahber"
            label="ማህበር"
            rules={[{ required: true, message: 'ማህበር ይምረጡ' }]}
          >
            <Select mode="tags" style={{width: '100%'}} placeholder="ማርበር ይምረጡ"/>
          </Form.Item>
          <Form.Item
            name="price"
            label="ዋጋ"
            rules={[{ required: true, message: 'ስም' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="leavingFrom"
            label="መነሻ ቦታ"
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
          name="dateOfarrival"
          label="Date of Arrival"
          rules={[
            {
              message: 'Please select the date of arrival!',
            },
          ]}
          >
            <DatePicker />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        visible={detailModalVisible}
        onCancel={handleDetailModalClose}
        title="Trip Details"
        footer={null}
      >
      {selectedTrip && (
          <div>
            {tripTablecolumns.map((column) => {
              if (column.dataIndex !== 'action') {
                return(
                  <p key={column.dataIndex}>
                    {column.title}: {selectedTrip[column.dataIndex]}
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
  
  export default Trip