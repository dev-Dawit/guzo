import React, { useState } from 'react';
import { Menu,  Dropdown,  Avatar } from 'antd';
import { UserOutlined, } from '@ant-design/icons';


export const Account = () => {
    const [loggedIn, setLoggedIn] = useState(true); // change to false if user is not logged in
  
    const handleLogout = () => {
      // perform logout logic here
      setLoggedIn(false);
    };
  
    const profileMenu = (
      <Menu>
        <Menu.Item key="profile">
          <a href="/profile">Profile</a>
        </Menu.Item>
        <Menu.Item key="settings">
          <a href="/settings">Settings</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout" onClick={handleLogout}>
          Logout
        </Menu.Item>
      </Menu>
    );
  
    return (
      <div style={{ margin: 'auto' }}>
        <div style={{ position: 'relative', justifyContent: 'flex-end'}}>
          <Dropdown overlay={profileMenu} trigger={['click']}>
            <Avatar
              icon={<UserOutlined />}
              src={loggedIn ? '/path/to/avatar' : null} // add image URL if user is logged in
              size={32}
              style={{ backgroundColor: '#1890ff', cursor: 'pointer' }}
            />
          </Dropdown>
        </div>
      </div>
    );
  };