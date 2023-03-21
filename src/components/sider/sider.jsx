import React, { useState }from 'react'
import { Layout, Menu, theme, } from 'antd';
import { HomeOutlined, UserOutlined, SettingOutlined, EnvironmentOutlined, 
    CarOutlined, DollarOutlined, FileOutlined, LockOutlined, SearchOutlined,
    LogoutOutlined } from '@ant-design/icons';

import { Link } from 'react-router-dom';
const { Sider } = Layout;   

export const SiderSection = () => {

    const [collapsed, setCollapsed] = useState(false);

    const {
           token: { colorBgContainer },
         } = theme.useToken();
  
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    };
  
    const DestinationIcon = () => (
      <div>
        <EnvironmentOutlined style={{ marginRight: '10px' }} />
      </div>
    );
  
    const TripIcon = () => (
      <div style={{ marginRight: '7px', marginLeft: '-2px' }}>
        <span role="img" aria-label="suitcase">💼 </span>
      </div>
    );
  
    const TransporterIcon = () => (
      <div style={{ fontSize: '24px' }}>
        <CarOutlined style={{ marginRight: '10px', marginBottom: '17px' }} />
      </div>
    );


    return (
        <Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed} style={{ background: '#f0f2f5',}}>
          <div className="logo" />
          <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to='/'>Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DestinationIcon />}>
                <Link to='/destination'>Destination</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<TripIcon />}>
                <Link to='/trip'>Trip</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<TransporterIcon />}>
                <Link to='/transporter'>Transporter</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<UserOutlined />}>
                <Link to='/passenger'>Passenger</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<DollarOutlined />}>
                <Link to='/finance'>Finance</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<FileOutlined />}>
                <Link to='/report'>Report</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<SettingOutlined />}>
                <Link to='/userAdmin'>userAdmin</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<LockOutlined />}>
                <Link to='/accessControl'>AccessControl</Link>
            </Menu.Item>
            <Menu.Item key="10" icon={<SearchOutlined  />}>
                <Link to='/lookUp'>lookUp</Link>
            </Menu.Item>
          </Menu>
        </Sider>
    )
}



