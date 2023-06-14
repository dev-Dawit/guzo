import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const GlobalSearch = () => {
  return (
    <Search
        placeholder="Search"
        allowClear
        onSearch={(value) => console.log(value)}
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
    />
  )
}

export default GlobalSearch;