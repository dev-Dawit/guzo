import React from "react";
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import { Account } from "../account/account";


export const Nav = () => {
    return (
      <div style={{display: 'flex', alignContent: 'center', justifyContent: 'space-between'}}>
        <div style={{marginRight: '20px'}} >
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="horizontal" style={{display: 'flex', width: '100px'}}>
            <Menu.Item key="1"   > 
              መንፈሳዊ ጉዞ
            </Menu.Item>
          </Menu>
        </div>
        <div style={{marginLeft: 'auto'}}>
          <Account/>
        </div> 
      </div>
    );
};