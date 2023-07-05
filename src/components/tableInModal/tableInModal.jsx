import React from 'react';
import { TransferIcon } from '../actionIcons/transfer/transferIcon.components';

const TableInModal = ({ columns, data, handleAction }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.title}</th>
          ))}
          {handleAction && <th>Action</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.key}>{row[column.key]}</td>
            ))}
            {handleAction && (
                <td>
                    <TransferIcon onClick={() => handleAction(row.id)} />
                </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableInModal;
