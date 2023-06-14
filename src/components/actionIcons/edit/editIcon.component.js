import React from 'react';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export const EditIcon = ({ onClick }) => {
  return <BorderColorIcon fontSize="small" onClick={onClick} style={{ color: '#1890ff', cursor: 'pointer', marginBottom: '2px' }} />;
};


