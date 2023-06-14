import { useState } from "react";
import { BreadCrumbSection } from "../../../components/breadCrumb/breadCrumb"

import { Table, Progress, Button, Modal, Form, Input, Upload, message, Select, DatePicker, Descriptions, Checkbox, Tag, } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import TableComponent from "../../../components/table/table";

import {
  FolderOpenOutlined,
 
  DeleteOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import TabComponent from "../../../components/tabs/tab";
import AddNewTripModal from "../../../components/modals/addNewTrip.component";
import TagChip from "../../../components/tagChip/tagChip.component";

import { EditIcon } from '../../../components/actionIcons/edit/editIcon.component';
import { DetailIcon } from '../../../components/actionIcons/openDetail/detailIcon.component';
import { AddIcon, AddNewIcon } from '../../../components/actionIcons/add/addIcon.component';
import GlobalSearch from "../../../components/global search/globalSearch.component";
import { ListIcon } from "../../../components/actionIcons/list/listIcon.component";

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
    <Button type="link" icon={<EditIcon />} onClick={() => handleEdit(record)}></Button>
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

const { Option } = Select;

const Trip = (data, columns,onSave) => {
  const [selectedTrip, setselectedTrip] = useState(null)
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [detailModalVisible, setDetailModalVisible] = useState(false);
  const [addPassengerModalVisible, setAddPassengerModalVisible] = useState(false);
  const [tripTypeModalities, setTripTypeModalities] = useState([]);
  const [isPassengersModalVisible, setIsPassengersModalVisible] = useState(false);
  const [form] = Form.useForm();

  const calculateDuration = (arrivalDate, departureDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // Number of milliseconds in one day

    const arrival = new Date(arrivalDate);
    const departure = new Date(departureDate);

    const diffInDays = Math.round(Math.abs((arrival - departure) / oneDay));

    return diffInDays;
  };

  const handleTripTypeChange = (value) => {
    setTripTypeModalities(value);
  };

  const handleViewPassengers = (trip) => {
    setselectedTrip(trip);
    setIsPassengersModalVisible(true);
  };

  const handleModalClose = () => {
    setIsPassengersModalVisible(false);
  };


  const handleAddPassenger = (record) => {
    // Handle the add passenger action
    console.log('Add passenger clicked for record:', record);
    setAddPassengerModalVisible(true);
  };

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

  const handleAddPassengerModalClose = () => {
    setAddPassengerModalVisible(false);
  };

  const handleAddPassengerSubmit = (values) => {
    // Handle the form submission and add the new passenger
    console.log('Form values:', values);
    // Add logic to add the new passenger to your data or API
    setAddPassengerModalVisible(false); // Close the modal
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
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
      width: '18%',
      
      render: (text, record) => (
       <div> {calculateDuration(record.arrivalDate, record.departureDate)} days </div> 
      ),
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
      render: (text, record) => (
        <Tag >{record.sitsOccupied} / {record.totalSits}</Tag>
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
      width: '20%',
      render: (_, record) => (
      <span>
        <AddNewIcon onClick={handleAddPassenger}/>
        <DetailIcon onClick={handleDetailClick} />
        <EditIcon onClick={handleEditClick} />
        <ListIcon onClick={() => handleViewPassengers(record)} />
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
      sitsOccupied: 5,
      totalSits: 100,
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ],
      destination: {
        destinationName: 'Destination A',
        photos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg'],
        price: '$1000',
      },
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
      sitsOccupied: 5,
      totalSits: 100,
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
      sitsOccupied: 5,
      totalSits: 100,
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
      sitsOccupied: 5,
      totalSits: 100,
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '02',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      sitsOccupied: 5,
      totalSits: 100,
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '03',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      sitsOccupied: 5,
      totalSits: 100,
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '04',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      sitsOccupied: 5,
      totalSits: 100,
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '06',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      sitsOccupied: 5,
      totalSits: 100,
      modality: 'አዳር ፤ ምግብ ያለው ፤ ማደርያ የተዘጋጀ',
      tags: [
        { id: 1, name: 'Tag 1', description: 'Short description for Tag 1' },
        { id: 2, name: 'Tag 2', description: 'Short description for Tag 2' },
        { id: 3, name: 'Tag 3', description: 'Short description for Tag 3' },
      ]
    },
    {
      key: '06',
      name: 'ልዩ የገና ጉዞ',
      destinations: 'ላሊበላ',
      agent: 'ማህበረ ቅዱሳን',
      price: '500.00',
      departureDate: '02/01/2023',
      arrivalDate: '01/03/2023',
      placeOfDeparture: '5 ኪሎ ቅድስት ማርያም',
      sitsOccupied: 5,
      totalSits: 100,
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
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Search Trips"
          optionFilterProp="children"
          onSelect={handleSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          >
          <Option value="destination">Search by Destination</Option>
          <Option value="modalities">Search by Modalities</Option>
          <Option value="departureDate">Search by Departure Date</Option>
        </Select>

        <Input.Search
          style={{ width: 200, marginLeft: 10 }}
          placeholder="Enter search query"
          onSearch={value => handleSearch(value, { value: 'global' })}
        />
        <TableComponent title = {'Trips'} columns={tripTablecolumns} dataSource={tripTabledata} modal={AddNewTripModal} />
      </div>,
    },
    {
      key: '2',
      title: 'የተካሄዱ ጉዞዎች',
      content: <div>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Search Trips"
          optionFilterProp="children"
          onSelect={handleSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          >
          <Option value="destination">Search by Destination</Option>
          <Option value="modalities">Search by Modalities</Option>
          <Option value="departureDate">Search by Departure Date</Option>
        </Select>

        <Input.Search
          style={{ width: 200, marginLeft: 10 }}
          placeholder="Enter search query"
          onSearch={value => handleSearch(value, { value: 'global' })}
        />
        <TableComponent title = {'Trips'} columns={tripTablecolumns} dataSource={tripTabledata} modal={AddNewTripModal} />
      </div>,
    },
    {
      key: '3',
      title: 'Tag',
      content: <div> 
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Search Trips"
          optionFilterProp="children"
          onSelect={handleSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          >
          <Option value="destination">Search by Destination</Option>
          <Option value="modalities">Search by Modalities</Option>
          <Option value="departureDate">Search by Departure Date</Option>
        </Select>

        <Input.Search
          style={{ width: 200, marginLeft: 10 }}
          placeholder="Enter search query"
          onSearch={value => handleSearch(value, { value: 'global' })}
        />
        <TableComponent title = {'Trips'} columns={tagTableColumns} dataSource={tagTableData} modal={AddNewTripModal} />
      </div>,
    },
  ];

    return (
      <div>
        <TabComponent tabs={tabs}/>

        <Modal
        visible={addPassengerModalVisible}
        onCancel={handleAddPassengerModalClose}
        title="Add Passenger"
        footer={null}
        >
        <Form onFinish={handleAddPassengerSubmit}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              { required: true, message: 'Please enter the name of the passenger' },
            ]}
          >
            <Input placeholder="Enter the name" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: 'Please enter the phone number' },
            ]}
          >
            <Input placeholder="Enter the phone number" />
          </Form.Item>
         
          
          <Form.Item
          name="tripType"
          label="Type of Trip"
          rules={[
            {
              required: true,
              message: 'Please select the type of trip!',
            },
          ]}
        >
          <Select
            mode="multiple"
            placeholder="Select modalities"
            onChange={handleTripTypeChange}
          >
            <Option value="duration">Duration of Trip</Option>
            <Option value="snack">Snack</Option>
            <Option value="other">Other Modalities</Option>
          </Select>
        </Form.Item>
        {tripTypeModalities.includes('duration') && (
          <Form.Item
            name="durationOfTrip"
            label="Duration of Trip"
            rules={[
              {
                required: true,
                message: 'Please input the duration of trip!',
              },
            ]}
          >
            <Input type="number" addonAfter="Days" />
          </Form.Item>
        )}
        {tripTypeModalities.includes('snack') && (
          <Form.Item name="snack" label="Snack">
            <Checkbox>Yes</Checkbox>
          </Form.Item>
        )}
        {tripTypeModalities.includes('other') && (
          <Form.Item name="otherModalities" label="Other Modalities">
            <Input.TextArea />
          </Form.Item>
          )}
        </Form>
      </Modal>

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
                  <div>
                    <Descriptions>
                      <Descriptions.Item key={column.dataIndex} label={column.title}>{selectedTrip[column.dataIndex]}</Descriptions.Item>
                    
                    </Descriptions>
                  </div>
                  
                )
              }  
            })
            }
          </div>
        )}
      </Modal>
      <Modal
        title={`Passengers for ${selectedTrip ? selectedTrip.name : ''}`}
        visible={isPassengersModalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {/* Render passengers list here */}
        {selectedTrip && selectedTrip.passengers && selectedTrip.passengers.length > 0 ? (
          <ul>
            {selectedTrip.passengers.map((passenger) => (
              <li key={passenger.id}>
                {passenger.name} - {passenger.phoneNumber}
              </li>
            ))}
          </ul>
        ) : (
          <p>No passengers found for this trip.</p>
        )}
      </Modal>

    </div> 
  )
}
  
  export default Trip