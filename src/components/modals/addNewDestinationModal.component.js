// import { Modal, Form, Input, Radio, DatePicker } from 'antd';

// const AddNewDestinationModal = ({ visible, onCancel, onCreate }) => {
//   const [form] = Form.useForm();

//   const destinationTypeOptions = [
//     { label: 'ገዳማት', value: 'ገዳማት' },
//     { label: 'ጠበል', value: 'ጠበል' },
//     { label: 'ካቴድራል', value: 'ካቴድራል' },
//     { label: 'በአቅራቢያዎት ያለ ቤተክርስቲያን', value: 'በአቅራቢያዎት ያለ ቤተክርስቲያን' },
//   ];

//   return (
//     <Modal
//       visible={visible}
//       title="Add New Destination"
//       okText="Create"
//       cancelText="Cancel"
//       onCancel={onCancel}
//       onOk={() => {
//         form.validateFields().then((values) => {
//           form.resetFields();
//           onCreate(values);
//         });
//       }}
//     >
//       <Form
//         form={form}
//         layout="vertical"
//         name="add_new_destination_form"
//       >
//         <Form.Item
//           name="destinationName"
//           label="Name of Destination"
//           rules={[{ required: true, message: 'Please input the name of the destination!' }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="address"
//           label="Address"
//           rules={[{ required: true, message: 'Please input the address of the destination!' }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item
//           name="destinationType"
//           label="Destination Type"
//           rules={[{ required: true, message: 'Please select a destination type!' }]}
//         >
//           <Radio.Group options={destinationTypeOptions} />
//         </Form.Item>
//         <Form.Item
//           name="distanceFromCapitalCity"
//           label="Distance from Capital City (in km)"
//           rules={[{ required: true, message: 'Please input the distance from the capital city!' }]}
//         >
//           <Input type="number" />
//         </Form.Item>
//         <Form.Item
//           name="description"
//           label="Description"
//           rules={[{ required: true, message: 'Please input a description of the destination!' }]}
//         >
//           <Input.TextArea rows={4} />
//         </Form.Item>
//         <Form.Item
//           name="specialDayToVisit"
//           label="Special Day to Visit"
//           rules={[{ required: true, message: 'Please select a special day to visit!' }]}
//         >
//           <DatePicker />
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };

// export default AddNewDestinationModal;





import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Modal, Form, Input,Row, Col, Radio, DatePicker, Upload, message } from 'antd';
//import ReactLeaflet from 'react-leaflet';

import { MapContainer, TileLayer, Marker, useMapEvents, Popup, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { UploadOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const MapLocator = ({ setPosition }) => {
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });
  
    useEffect(() => {
      map.locate();
    }, [map]);
  
    return null;
  }

const AddNewDestinationModal = ({ visible, onCancel, onCreate }) => {
  const [form] = Form.useForm();
  const [position, setPosition] = React.useState(null);

  const handleMapClick = (e) => {
    setPosition(e.latlng);
  };

  const LocationMarker = () => {
    useMapEvents({
      click: handleMapClick,
    });

    return position ? (
      <Marker position={position} />
    ) : null;
  };

  const destinationTypeOptions = [
    { label: 'ገዳማት', value: 'ገዳማት' },
    { label: 'ካቴድራል', value: 'ካቴድራል' },
  ];

  const propsPictures = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const propsVideos = {
    name: 'file',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  
    const [latlng, setLatLng] = useState ({ lat: 51.505, lng: -0.09 });
    const latRef = useRef(null);
    const lngRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLat = parseFloat(latRef.current.value);
        const newLng = parseFloat(lngRef.current.value);
        if (!isNaN(newLat) && !isNaN(newLng)) {
        setLatLng({ lat: newLat, lng: newLng });
        }
    };
  
  return (
    <Modal
      visible={visible}
      title="Add New Destination"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form.validateFields().then((values) => {
          form.resetFields();
          onCreate(values);
        });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="add_new_destination_form"
      >
        <Form.Item
          name="destinationName"
          label="Name of Destination"
          rules={[{ required: true, message: 'Please input the name of the destination!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Location">
          <Row gutter={16}>
            <Col span={12}>
                <MapContainer center={[9.0054, 38.7636]} zoom={13} style={{ height: '400px' }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <LocationMarker />
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={latlng}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    {position && (
                        <Marker position={position}>
                            <Popup>You are here</Popup>
                        </Marker>
                    )}
                    <MapLocator setPosition={setPosition} />
                </MapContainer>
      
                <form onSubmit={handleSubmit}>
                    <label>
                        Latitude: 
                        <input type="text" ref={latRef} />
                    </label>
                    <label>
                        Longitude: 
                        <input type="text" ref={lngRef} style={{width: '150px'}} />
                    </label>
                    <button type="submit">Update Map</button>
                </form>
            </Col>
            <Col span={12}>
              <Form.Item name={['location', 'region']} label="Region">
                <Input />
              </Form.Item>
              <Form.Item name={['location', 'city']} label="City">
                <Input />
              </Form.Item>
              <Form.Item name={['location', 'subCity']} label="Sub city">
                <Input />
              </Form.Item>
              <Form.Item name={['location', 'woreda']} label="Woreda">
                <Input />
              </Form.Item>
              <Form.Item name={['location', 'kebele']} label="Kebele">
                <Input />
              </Form.Item>
            </Col>
          </Row>
          </Form.Item>
        <Form.Item
          name="destinationType"
          label="Destination Type"
          rules={[{ required: true, message: 'Please select a destination type!' }]}
        >
          <Radio.Group options={destinationTypeOptions} />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please input a description of the destination!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
    </Form>
  </Modal>
);
};

export default AddNewDestinationModal;

         




// <Form.Item
//           name="distanceFromCapitalCity"
//           label="Distance from Capital City (in km)"
//           rules={[{ required: true, message: 'Please input the distance from the capital city!' }]}
//         >
//           <Input type="number" />
//         </Form.Item>
        
// <Form.Item
//         name="specialDayToVisit"
//         label="Special Day to Visit"
//         rules={[{ required: true, message: 'Please select a special day to visit!' }]}
//       >
//         <DatePicker />
//       </Form.Item>
//       <Form.Item
//         name="pictureAlbum"
//         label="Picture Album"
//         valuePropName="fileList"
//         getValueFromEvent={(e) => e.fileList}
//       >
//         <Dragger {...propsPictures}>
//           <p className="ant-upload-drag-icon">
//             <UploadOutlined />
//           </p>
//           <p className="ant-upload-text">Click or drag file to this area to upload</p>
//           <p className="ant-upload-hint">Support for multiple uploads.</p>
//         </Dragger>
//       </Form.Item>
//       <Form.Item
//         name="uploadVideos"
//         label="Upload Videos"
//         valuePropName="fileList"
//         getValueFromEvent={(e) => e.fileList}
//       >
//         <Dragger {...propsVideos}>
//           <p className="ant-upload-drag-icon">
//             <UploadOutlined />
//           </p>
//           <p className="ant-upload-text">Click or drag file to this area to upload</p>
//           <p className="ant-upload-hint">Support for only one upload.</p>
//         </Dragger>
//       </Form.Item>







































































