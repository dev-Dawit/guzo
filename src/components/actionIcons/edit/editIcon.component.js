import React from 'react';
import { EditOutlined,} from '@ant-design/icons';

export const EditIcon = ({ onClick }) => {
  return <EditOutlined onClick={onClick} style={{ color: '#1890ff', cursor: 'pointer', marginBottom: '2px' }} />;
};


