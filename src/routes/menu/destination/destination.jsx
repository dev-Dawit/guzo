
import {useState} from 'react';
import { Space } from 'antd';
import { Table, Button, Modal, Form, Input, Upload, message, Descriptions, Popconfirm, Divider } from 'antd';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';


import TableComponent from "../../../components/table/table"

import TabComponent from '../../../components/tabs/tab';
import AddNewDestinationModal from '../../../components/modals/addNewDestinationModal.component';

import { EditIcon } from '../../../components/actionIcons/edit/editIcon.component';
import { DetailIcon } from '../../../components/actionIcons/openDetail/detailIcon.component';
import { Delete } from '../../../components/actionIcons/delete/delete';
import AddNewTag from '../../../components/modals/addNewTag.component';
import TagChip from "../../../components/tagChip/tagChip.component";
import TextArea from 'antd/es/input/TextArea';

const itemsPerPage = 10;

const renderTags = (tags) => {
  return tags.map((tag) => (
    <TagChip key={tag.id} name={tag.name} description={tag.description} />
  ));
}

const Destination = (data, columns, onSave, onDelete, onCancel) => {
  const [selectedDestination, setSelectedDestination] = useState(null)
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [destinationData, setDestinationData] = useState([]);
  const [form] = Form.useForm();

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleDetailClick = (record) => {
    setSelectedDestination(record);
    setDetailModalVisible(true);
  };


  const handleEditModalClose = () => {
    setEditModalVisible(false);
  };

  const handleDetailModalClose = () => {
    setDetailModalVisible(false);
  };

  const handleDelete = (id) => {
    const updatedData = destinationData.filter((destination) => destination.id !== id);
    setDestinationData(updatedData);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      onSave(values);
    });
  }

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
      title: 'ንግስ በአላት',
      dataIndex: 'nigs',
      sorter: (a, b) => a.nigs.localeCompare(b.nigs),
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
      onFilter: (value, record) => record.nigs.toLowerCase().includes(value.toLowerCase()),
      filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,

    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      width: '40%', 
      key: 'tags', 
      render: renderTags  
    },
    {
      title: 'Action',
      dataIndex: 'action',
      width: '18%',
      render: (_, record) => (
      <span>
        <DetailIcon onClick={() => handleDetailClick(record) } />
        <EditIcon onClick={handleEditClick} />
        <Popconfirm
          title="Are you sure you want to delete this destination?"
          onConfirm={() => handleDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Delete />
        </Popconfirm>
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
        <DetailIcon onClick={() => handleDetailClick(record)} />
        <EditIcon onClick={handleEditClick} />
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
      photos:[
        {
          id: 1,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
        {
          id: 2,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
      ],
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      description: "The 11 churches at Lalibela, Ethiopia, are regarded as one of the wonders of the world, excavated from solid rock with an immense underground maze of tunnels and passages. There are two main groups of churches, with another church dedicated to Saint George a short distance away.",
      registrationDate: '2022-10-01',
      latitude: 123.456, // Example latitude value
      longitude: 789.012, // Example longitude value
    },
    {
      key: "02",
      id: "002",
      nameOfDestination: "Debre Libanos",
      location: "Fiche",
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      photos:[
        {
          id: 1,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
        {
          id: 2,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
      ],
      description: "The 11 churches at Lalibela, Ethiopia, are regarded as one of the wonders of the world, excavated from solid rock with an immense underground maze of tunnels and passages. There are two main groups of churches, with another church dedicated to Saint George a short distance away.",
    },
    {
      key: "03",
      id: "003",
      nameOfDestination: "Seminesh Kidanemhret",
      location: "Semen Shewa",
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      photos:[
        {
          id: 1,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
        {
          id: 2,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
      ],
      description: "The 11 churches at Lalibela, Ethiopia, are regarded as one of the wonders of the world, excavated from solid rock with an immense underground maze of tunnels and passages. There are two main groups of churches, with another church dedicated to Saint George a short distance away.",
    },
    {
      key: "04",
      id: "004",
      nameOfDestination: "Gishen Mariam",
      location: "Wello",
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      photos:[
        {
          id: 1,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
        {
          id: 2,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
      ],
      description: "The 11 churches at Lalibela, Ethiopia, are regarded as one of the wonders of the world, excavated from solid rock with an immense underground maze of tunnels and passages. There are two main groups of churches, with another church dedicated to Saint George a short distance away.",
    },
    {
      key: "05",
      id: "005",
      nameOfDestination: "Aksum Tsion",
      location: "Aksum",
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      photos:[
        {
          id: 1,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
        {
          id: 2,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
      ],
      description: "The 11 churches at Lalibela, Ethiopia, are regarded as one of the wonders of the world, excavated from solid rock with an immense underground maze of tunnels and passages. There are two main groups of churches, with another church dedicated to Saint George a short distance away.",
    },
    {
      key: "06",
      id: "006",
      nameOfDestination: "Tana Kirkos",
      location: "Tana",
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      photos:[
        {
          id: 1,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
        {
          id: 2,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
      ],
      description: "The 11 churches at Lalibela, Ethiopia, are regarded as one of the wonders of the world, excavated from solid rock with an immense underground maze of tunnels and passages. There are two main groups of churches, with another church dedicated to Saint George a short distance away.",
    },
    {
      key: "07",
      id: "001",
      nameOfDestination: "Lalibela",
      location: "Lalibela",
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      photos:[
        {
          id: 1,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
        {
          id: 2,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
      ],
      description: "The 11 churches at Lalibela, Ethiopia, are regarded as one of the wonders of the world, excavated from solid rock with an immense underground maze of tunnels and passages. There are two main groups of churches, with another church dedicated to Saint George a short distance away.",
    },
    {
      key: "08",
      id: "002",
      nameOfDestination: "Debre Libanos",
      location: "Fiche",
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      photos:[
        {
          id: 1,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
        {
          id: 2,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
      ],
      description: "The 11 churches at Lalibela, Ethiopia, are regarded as one of the wonders of the world, excavated from solid rock with an immense underground maze of tunnels and passages. There are two main groups of churches, with another church dedicated to Saint George a short distance away.",
    },
    {
      key: "09",
      id: "003",
      nameOfDestination: "Seminesh Kidanemhret",
      location: "Semen Shewa",
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      photos:[
        {
          id: 1,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
        {
          id: 2,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
      ],
      description: "The 11 churches at Lalibela, Ethiopia, are regarded as one of the wonders of the world, excavated from solid rock with an immense underground maze of tunnels and passages. There are two main groups of churches, with another church dedicated to Saint George a short distance away.",
    },
    {
      key: "10",
      id: "004",
      nameOfDestination: "Gishen Mariam",
      location: "Wello",
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      photos:[
        {
          id: 1,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
        {
          id: 2,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
      ],
      description: "The 11 churches at Lalibela, Ethiopia, are regarded as one of the wonders of the world, excavated from solid rock with an immense underground maze of tunnels and passages. There are two main groups of churches, with another church dedicated to Saint George a short distance away.",
    },
    {
      key: "11",
      id: "005",
      nameOfDestination: "Aksum Tsion",
      location: "Aksum",
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      photos:[
        {
          id: 1,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
        {
          id: 2,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
      ],
      description: "The 11 churches at Lalibela, Ethiopia, are regarded as one of the wonders of the world, excavated from solid rock with an immense underground maze of tunnels and passages. There are two main groups of churches, with another church dedicated to Saint George a short distance away.",
    },
    {
      key: "12",
      id: "006",
      nameOfDestination: "Tana Kirkos",
      location: "Tana",
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      photos:[
        {
          id: 1,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
        {
          id: 2,
          url: '../../../assets/ethiopia-lalibela-church-ehtiopia-thumbnail.jpg',
          caption: 'ethiopia'
        },
      ],
      description: "The 11 churches at Lalibela, Ethiopia, are regarded as one of the wonders of the world, excavated from solid rock with an immense underground maze of tunnels and passages. There are two main groups of churches, with another church dedicated to Saint George a short distance away.",
    },
  ];

  const tagTableData = [
    {
      key: '01',
      name: 'ውቅር አብያት ክርስትያናት ',
      description: 'በላሊበላ 11 ውቅር አብያተ ክርስትያናት አሉ...  ',
    },
  ];

  const tabs = [
    {
      key: '1',
      title: 'የመዳረሻዎች ዝርዝር',
      content: <div>
        <TableComponent 
          title = {'Destinations'} 
          columns={destinationTableColumns} 
          dataSource={destinationTableData} 
          itemsPerPage= {itemsPerPage} 
          modal={AddNewDestinationModal} 
          onDelete={handleDelete} 
        />
      </div>,
    },
    {
      key: '2',
      title: 'Tag',
      content: <div>  
          <TableComponent columns={tagTableColumns} dataSource={tagTableData} modal={AddNewTag} />
      </div>,
    },
  ];
  
  return (
    <div>
        <TabComponent tabs={tabs}/>
        <Modal
        title="Edit Destination information"
        visible={editModalVisible}
        onCancel={handleEditModalClose}
        /* Other modal props and content */
        >
          <Form form={form}>
          <Form.Item
            name="nameOfDestination"
            label="የመዳረሻ ስም"
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="addressOfDestination"
            label="የመዳረሻ አድራሻ"
          >
            <Input />
          </Form.Item>
        </Form>
        <Divider />

          {/* Edit Tags */}
          <h3>Edit Tags</h3>
          <Form form={form}>
            <Form.Item
              name="nameOfTag"
              label="Name of Tag"
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="description of tag"
              label="የመዳረሻ አድራሻ"
            >
              <TextArea />
            </Form.Item>
          </Form>

          {/* Save and Cancel buttons */}
          <div>
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={onCancel}>Cancel</Button>
          </div>
      </Modal>

      <Modal
        title={`Destination detail${selectedDestination ? ` - ${selectedDestination.nameOfDestination}` : ''}`}
        visible={detailModalVisible}
        onCancel={handleDetailModalClose}
        footer={null}
        width={800}
      >
      {selectedDestination && (
        <>
          <div className="modal-content">
            <h2>{selectedDestination.nameOfDestination}</h2>
            <p>Destination: {selectedDestination.nameOfDestination}</p>
            <p>Description: {selectedDestination.description}</p>
            <p>Date of Registration: {selectedDestination.registrationDate}</p>
            <MapContainer center={[selectedDestination.latitude, selectedDestination.longitude]} zoom={13} style={{ height: '400px' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[selectedDestination.latitude, selectedDestination.longitude]} />
            </MapContainer>

          </div>

          {selectedDestination.photos && (
            <div className="modal-content">
              <h3>Photo Gallery</h3>
              <div className="photo-gallery">
                {selectedDestination.photos.map((photo) => (
                  <img key={photo.id} src={photo.url} alt={photo.caption} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
      </Modal>
    </div>     
  )
  
}

export default Destination;
