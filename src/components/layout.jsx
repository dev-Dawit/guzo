import React from 'react';
import { Layout, Breadcrumb } from 'antd';

import { HeaderSection } from './header/header';
import { SiderSection } from './sider/sider';
import { FooterSection } from './footer/footer';
import { ContentSection } from './content/content';


const Theme = () => {
  

  return (
    <Layout style={{ minHeight: '100vh' }}>
      < HeaderSection />
      <Layout>
        < SiderSection />
        <Layout style={{ padding: '0 24px 0px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          < ContentSection />
          < FooterSection />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Theme;