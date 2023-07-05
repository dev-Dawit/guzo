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
import Agents from '../../routes/menu/agents/agents';
import Trip from '../../routes/menu/trip/trip';
import UserAdmin from '../../routes/menu/userAdmin/userAdmin';
import Nigs from '../../routes/menu/nigs/nigs.component';
import Marketing from '../../routes/menu/marketing/marketing.component';
import Kdusan from '../../routes/menu/kdusan/kdusan.component';
import Dispute from '../../routes/menu/dispute/dispute';
import Settings from '../../routes/menu/settings/settings';

const { Content,} = Layout;

export const ContentSection = () => {

  return (
    <Content
        style={{
            paddingTop: 5,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom:0,
            margin: 0,
            minHeight: '30%',
            background: '#D3D3D3',
            height: 'calc(100vh - 8vh)', 
        }}
    >
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/destination' element={<Destination />}/>
            <Route path='/trip' element={<Trip />}/>
            <Route path='/agents' element={<Agents />}/>
            <Route path='/passenger' element={<Passenger />}/>
            <Route path='/finance' element={<Finance />}/>
            <Route path='/marketing' element={<Marketing />}/>
            <Route path='/report' element={<Report />}/>
            <Route path='/userAdmin' element={<UserAdmin />}/>
            <Route path='/accessControl' element={<AccessControl />}/>
            <Route path='/lookUp' element={<LookUp />}/>
            <Route path='/nigs' element={<Nigs />}/>
            <Route path='/kdusan' element={<Kdusan />}/>
            <Route path='/settings' element={<Settings />}/>
            <Route path='/dispute' element={<Dispute />}/>
        </Routes>
    </Content>
  )
}




