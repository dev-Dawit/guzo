import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

export const Delete = ({ onClick }) => {
    return <DeleteIcon  fontSize="small" onClick={onClick} style={{ color: '#1890ff', cursor: 'pointer', marginBottom: '2px' }} />;
  };