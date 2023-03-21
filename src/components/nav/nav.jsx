import React from "react";
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { Account } from "../account/account";


export const Nav = () => {
    return (
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="horizontal" style={{display: 'flex'}}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Account/>  
        </Menu>
    );
};