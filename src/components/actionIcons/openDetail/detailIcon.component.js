import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './detailModal.style.scss';

export const DetailIcon = ({ onClick }) => {
  return <OpenInNewIcon fontSize="small" onClick={onClick} style={{ color: '#1890ff', cursor: 'pointer', marginRight: '8px' }} />;
};
