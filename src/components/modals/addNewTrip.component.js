// import { Modal, Form, Input, Radio, DatePicker, Select } from 'antd';

// const AddNewTripModal = ({ visible, onCancel, onCreate }) => {
//   const [form] = Form.useForm();
//   const { Option } = Select; 
//   const destinationTypeOptions = [
//     { label: 'አዳር', value: 'ገዳማት' },
//     { label: 'ደርሶ መልስ', value: 'ጠበል' },
//     { label: 'ካቴድራል', value: 'ካቴድራል' },
//     { label: 'በአቅራቢያዎት ያለ ቤተክርስቲያን', value: 'በአቅራቢያዎት ያለ ቤተክርስቲያን' },
//   ];

// const getChildFieldOptions = (destinationType) => {
//     switch (destinationType) {
//       case 'beach':
//         return [{ label: 'Sand color', value: 'sand_color' }];
//       case 'mountain':
//         return [{ label: 'Height (meters)', value: 'height' }];
//       case 'city':
//         return [{ label: 'Population', value: 'population' }];
//       case 'countryside':
//         return [{ label: 'Farm animals', value: 'farm_animals' }];
//       default:
//         return [];
//     }
//   };

// const handleDestinationTypeChange = (value) => {
//     const childFieldOptions = getChildFieldOptions(value);
//     // Reset the child field when the destination type is changed
//     form.setFieldsValue({ childField: undefined });
//     form.setFields([
//       {
//         name: 'childField',
//         value: undefined,
//         errors: undefined,
//         touched: false,
//         validating: false,
//       },
//     ]);
//     form.setFields([
//       {
//         name: 'childField',
//         shouldUpdate: true,
//         children: (
//           <Form.Item
//             name="childField"
//             label="Child field"
//             rules={[{ required: true, message: 'Please select a value for the child field' }]}
//           >
//             <Select>
//               {childFieldOptions.map((option) => (
//                 <Option key={option.value} value={option.value}>
//                   {option.label}
//                 </Option>
//               ))}
//             </Select>
//           </Form.Item>
//         ),
//       },
//     ]);
//     }
//   return (
//     <Modal
//       visible={visible}
//       title="Add New Trip"
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
//         name="add_new_trip_form"
//       >
//         <Form.Item
//           name="tripName"
//           label="Name of Trip"
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
//             <Form.Item
//                     name="destinationType"
//                     label="Destination type"
//                     rules={[{ required: true, message: 'Please select a destination type' }]}
//                 >
//                     <Select onChange={handleDestinationTypeChange}>
//                     {destinationTypeOptions.map((option) => (
//                         <Option key={option.value} value={option.value}>
//                         {option.label}
//                         </Option>
//                     ))}
//                     </Select>
//                 </Form.Item>
//          <Form.Item
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

// export default AddNewTripModal;




// import { Form, Select } from 'antd';

// const { Option } = Select;

// // Define the options for the destination type field
// const destinationTypeOptions = [
//   { label: 'Beach', value: 'beach' },
//   { label: 'Mountain', value: 'mountain' },
//   { label: 'City', value: 'city' },
//   { label: 'Countryside', value: 'countryside' },
// ];

// // Define the options for the child field based on the selected destination type
// const getChildFieldOptions = (destinationType) => {
//   switch (destinationType) {
//     case 'beach':
//       return [{ label: 'Sand color', value: 'sand_color' }];
//     case 'mountain':
//       return [{ label: 'Height (meters)', value: 'height' }];
//     case 'city':
//       return [{ label: 'Population', value: 'population' }];
//     case 'countryside':
//       return [{ label: 'Farm animals', value: 'farm_animals' }];
//     default:
//       return [];
//   }
// };

// const AddNewTripModal = () => {
//   const [form] = Form.useForm();

//   const handleDestinationTypeChange = (value) => {
//     const childFieldOptions = getChildFieldOptions(value);
//     // Reset the child field when the destination type is changed
//     form.setFieldsValue({ childField: undefined });
//     form.setFields([
//       {
//         name: 'childField',
//         value: undefined,
//         errors: undefined,
//         touched: false,
//         validating: false,
//       },
//     ]);
//     form.setFields([
//       {
//         name: 'childField',
//         shouldUpdate: true,
//         children: (
//           <Form.Item
//             name="childField"
//             label="Child field"
//             rules={[{ required: true, message: 'Please select a value for the child field' }]}
//           >
//             <Select>
//               {childFieldOptions.map((option) => (
//                 <Option key={option.value} value={option.value}>
//                   {option.label}
//                 </Option>
//               ))}
//             </Select>
//           </Form.Item>
//         ),
//       },
//     ]);
//   };

//   return (
//     <Form form={form} onFinish={onFinish}>
//         <Form.Item
//             name="tripName"
//             label="Name of Trip"
//             rules={[{ required: true, message: 'Please input the name of the destination!' }]}
//         >
//             <Input />
//         </Form.Item>
//         <Form.Item
//         name="address"
//         label="Address"
//         rules={[{ required: true, message: 'Please input the address of the destination!' }]}
//     >
//         <Input />
//     </Form.Item>
//     <Form.Item
//         name="destinationType"
//         label="Destination Type"
//         rules={[{ required: true, message: 'Please select a destination type!' }]}
//     >
//         <Radio.Group options={destinationTypeOptions} />
//     </Form.Item>
//     <Form.Item
//         name="distanceFromCapitalCity"
//         label="Distance from Capital City (in km)"
//         rules={[{ required: true, message: 'Please input the distance from the capital city!' }]}
//     >
//         <Input type="number" />
//     </Form.Item>
//     <Form.Item
//         name="description"
//         label="Description"
//         rules={[{ required: true, message: 'Please input a description of the destination!' }]}
//     >
//         <Input.TextArea rows={4} />
//     </Form.Item>
//       <Form.Item
//         name="destinationType"
//         label="Destination type"
//         rules={[{ required: true, message: 'Please select a destination type' }]}
//       >
//         <Select onChange={handleDestinationTypeChange}>
//           {destinationTypeOptions.map((option) => (
//             <Option key={option.value} value={option.value}>
//               {option.label}
//             </Option>
//           ))}
//         </Select>
//       </Form.Item>
//     </Form>
//   );
// };


// export default AddNewTripModal;



import { useState } from 'react';
import { Modal, Form, Input, DatePicker, Select, Checkbox } from 'antd';

const destinations = ['ደብረ ሊባኖስ', 'ላሊበላ', 'አክሱም ጽዮን']
const agents = ['ማህበረ ቅዱሳን', 'ፍኖተ ጽድቅ', 'ግቢ ጉባኤ']

const { Option } = Select;

const AddNewTripModal = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [tripTypeModalities, setTripTypeModalities] = useState([]);

  const handleTripTypeChange = (value) => {
    setTripTypeModalities(value);
  };

  return (
    <Modal
      visible={visible}
      title="Add New Trip"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values, tripTypeModalities);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form form={form} layout="vertical" name="add_trip_form">
        <Form.Item
          name="nameOfTrip"
          label="Name of Trip"
          rules={[
            {
              required: true,
              message: 'Please input the name of trip!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="destination" label="Name of Destination" rules={[{ required: true, message: 'Please select a destination!' }]}>
          <Select placeholder="Select a destination">
            {destinations.map(destination => <Option value={destination} key={destination}>{destination}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item
          name="dateOfDeparture"
          label="Date of Departure"
          rules={[
            {
              required: true,
              message: 'Please select the date of departure!',
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item
          name="departureLocation"
          label="Departure Location"
          rules={[
            {
              required: true,
              message: 'Please input the location departure!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="agent" label="Name of Agent" rules={[{ required: true, message: 'Please select an agent!' }]}>
          <Select placeholder="Select a destination">
            {agents.map(agent => <Option value={agent} key={agent}>{agent}</Option>)}
          </Select>
        </Form.Item>
        <Form.Item
          name="price"
          label="Estimated Price"
          rules={[
            {
              required: true,
              message: 'Please input the name of estimated price!',
            },
          ]}
        >
          <Input />
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
  );
};

export default AddNewTripModal;
