import React from 'react';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';

export const TransferIcon = ({ onClick }) => {
  return <TransferWithinAStationIcon fontSize="small" onClick={onClick} style={{ color: '#1890ff', cursor: 'pointer', marginRight: '8px' }} />;
};
