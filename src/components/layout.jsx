import React from 'react';
import { Layout,} from 'antd';

import { HeaderSection }  from './header/header';
import { SiderSection } from './sider/sider';
import { FooterSection } from './footer/footer';
import { ContentSection } from './content/content';
import { BreadCrumbSection } from './breadCrumb/breadCrumb';


const Theme = () => {
  

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderSection />
      <Layout>
        < SiderSection />
        <Layout style={{ padding: '0 24px 0px', height: 'calc(100vh - 8vh)', overflowX: 'auto'  }}>
          <BreadCrumbSection style={{ margin: '15px 0' }} />
          < ContentSection />
          < FooterSection />
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Theme;