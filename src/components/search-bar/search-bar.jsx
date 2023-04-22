import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './search-bar.styles.scss';

const SearchBar = () => {
  const handleSearch = (value) => {
    console.log(value); // replace with your search logic
  };

  return (
    <Input.Search
        className='search-bar'
        placeholder="Search..."
        enterButton={<SearchOutlined />}
        onSearch={handleSearch}
    />

  );
};

export default SearchBar;
