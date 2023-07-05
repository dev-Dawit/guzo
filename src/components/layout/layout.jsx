import React from 'react';
import { Layout,} from 'antd';

import { HeaderSection }  from '../header/header';
import { SiderSection } from '../sider/sider';
import { FooterSection } from '../footer/footer';
import { ContentSection } from '../content/content';
import { BreadCrumbSection } from '../breadCrumb/breadCrumb';

import './layout.styles.scss';

const Theme = () => {
  return (
    <div className="layout">
      <HeaderSection className="header" />
      <div className="container">
        <div className="sidebar">
          <SiderSection />
        </div>
        <div className="contentContainer">
          <ContentSection className="content" />
          <FooterSection className="footer" />
        </div>
      </div>
    </div>
  );
};

export default Theme;


