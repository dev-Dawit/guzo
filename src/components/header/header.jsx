import React from 'react';
import { Layout, } from 'antd';

import { Nav } from '../nav/nav';


const { Header, } = Layout;

export const HeaderSection = () => {
    <Header >
        <div />   {/* logo goes here*/}
        <Nav />
    </Header>
}