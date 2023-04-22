import React from 'react';
import { Layout, } from 'antd';

import { Nav } from '../nav/nav';


const { Header, } = Layout;

export const HeaderSection = () => {
    return(
        <Header >
            <Nav />
        </Header>
    )
}