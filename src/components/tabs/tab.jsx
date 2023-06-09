// import { Tabs } from 'antd';
// import TableComponent from '../table/table';


// const TabComponent = (props) => <Tabs defaultActiveKey="1" items={props.items} onChange={props.tabRender} />;
// export default TabComponent;

import React from 'react';
import { Tabs } from 'antd';

//import './tabs.styles.scss';

const { TabPane } = Tabs;

const TabComponent = ({ tabs }) => {
  const handleTabChange = (key) => {
    console.log('Selected tab:', key);
  };

  return (
    <Tabs defaultActiveKey="1" onChange={handleTabChange} style={{paddingBottom: 0, marginBottom: 0}}>
      {tabs.map((tab) => (
        <TabPane tab={tab.title} key={tab.key} style={{paddingBottom: 0, marginBottom: 0, scrollbarColor: 'none'}}>
          {tab.content}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default TabComponent;

