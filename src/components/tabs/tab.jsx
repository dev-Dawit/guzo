import { Tabs } from 'antd';
const onChange = (key) => {
  console.log(key);
};


const TabComponent = (props) => <Tabs defaultActiveKey="1" items={props.items} onChange={onChange} />;
export default TabComponent;