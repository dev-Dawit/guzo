
import React, { useState } from "react";
import { Table, Input, Space } from "antd";
import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import "./dataGrid.styles.scss";

const { Search } = Input;

const dataSource = [
  {
    key: "1",
    id: "001",
    nameOfDestination: "Lalibela",
    km: 400,
    address: "Lalibela",
  },
  {
    key: "2",
    id: "002",
    nameOfDestination: "Debre Libanos",
    km: 200,
    address: "Fiche",
  },
  {
    key: "3",
    id: "003",
    nameOfDestination: "Seminesh Kidanemhret",
    km: 110,
    address: "Semen Shewa",
  },
  {
    key: "1",
    id: "001",
    nameOfDestination: "Gishen Mariam",
    km: 170,
    address: "Wello",
  },
  {
    key: "2",
    id: "002",
    nameOfDestination: "Aksum Tsion",
    km: 770,
    address: "Aksum",
  },
  {
    key: "3",
    id: "003",
    nameOfDestination: "Tana Kirkos",
    km: 600,
    address: "Tana",
  },
];

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name of Destination",
    dataIndex: "nameOfDestination",
    key: "Name of Destination",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Km from A.A",
    dataIndex: "km",
    key: "age",
  },
  {
    title: "Actions",
    key: "actions",
    render: (text, record) => (
      <Space size="middle">
        <a>
          <EyeOutlined />
        </a>
        <a>
          <EditOutlined />
        </a>
        <a>
          <DeleteOutlined />
        </a>
      </Space>
    ),
  },
];

const DataGrid = () => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const filteredData = dataSource.filter((data) => {
    return Object.keys(data).some((key) =>
      data[key].toString().toLowerCase().includes(searchText.toLowerCase())
    );
  });
  return (
    <>
      <Search
        placeholder="Search"
        onChange={handleSearch}
        className="search-bar"
      />
      <Table dataSource={filteredData} columns={columns} />;
    </>
  );
};

export default DataGrid;
