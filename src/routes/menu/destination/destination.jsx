import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import SearchBar from '../../../components/search-bar/search-bar';
// import ActiveTab from './tabs/active-tab';
// import ArchiveTab from './tabs/archive-tab';
// import RecurringTab from './tabs/recurring-tab';
//import Tabs from './tabs/tabs';
//import { AddDestinationButton } from '../../../components/new destination/new_destination_button/new_destination_button';
//import DataGrid from '../../../components/data-grid/dataGrid';
import DataGrid from '../../../components/data-grid/dataGrid';
import TabComponent from './tabs/tab';

const Destination = () => {
  return (
    <div>
      <TabComponent />
      <DataGrid />
    </div>
  );
}

export default Destination;
