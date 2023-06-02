import React, { useState } from 'react';
import { Tag, Modal, Table } from 'antd';

const TagChip = ({ name, description }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleChipClick = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    setModalVisible(false);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Tag onClick={handleChipClick} color="blue">
        {name}
      </Tag>
      <Modal
        title={name}
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <p>{description}</p>
      </Modal>
    </>
  );
};

export default TagChip;

