import React from 'react'
import { Layout, } from 'antd';
import { Routes, Route} from 'react-router-dom';

import Home from '../../routes/home/home';
import AccessControl from '../../routes/menu/accessControl/accessControl';
import Destination from '../../routes/menu/destination/destination';
import Finance from '../../routes/menu/finance/finance';
import LookUp from '../../routes/menu/lookUp/lookUp';
import Passenger from '../../routes/menu/passenger/passenger';
import Report from '../../routes/menu/report/report';
import Transporter from '../../routes/menu/transporter/transporter';
import Trip from '../../routes/menu/trip/trip';
import UserAdmin from '../../routes/menu/userAdmin/userAdmin';

const { Content,} = Layout;

export const ContentSection = () => {

  return (
    <Content
        style={{
            padding: 24,
            margin: 0,
            minHeight: 500,
            background: 'grey',
        }}
    >
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/destination' element={<Destination />}/>
            <Route path='/trip' element={<Trip />}/>
            <Route path='/transporter' element={<Transporter />}/>
            <Route path='/passenger' element={<Passenger />}/>
            <Route path='/finance' element={<Finance />}/>
            <Route path='/report' element={<Report />}/>
            <Route path='/userAdmin' element={<UserAdmin />}/>
            <Route path='/accessControl' element={<AccessControl />}/>
            <Route path='/lookUp' element={<LookUp />}/>
        </Routes>
    </Content>
  )
}




