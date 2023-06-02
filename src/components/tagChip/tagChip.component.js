import React, { useState } from 'react';
import { Tag, Modal, Button, Space } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import  './tagChip.styles.scss';

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

  const handleDelete = () => {
    // Perform delete operation
    // Call a delete function or API request here
    // Pass the tag id or any relevant data to identify the tag to be deleted
    // You can also use a state management library like Redux to manage the tags and handle the delete operation globally
  };

  return (
    <>
      <Tag onClick={handleChipClick} className="tag-chip">
        <span className="tag-name">{name}</span>
        <Button
          type="text"
          shape="circle"
          icon={<CloseOutlined />}
          onClick={handleDelete}
          className="delete-icon"
        />
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
