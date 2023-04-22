import React from 'react';
import { Button, Form, Input } from 'antd';


export const DestinationForm = ({ onFinish, onCancel }) => {
    return (
      <Form onFinish={onFinish} initialValues={{ remember: true }}>
        <Form.Item
          name="destination"
          label="Destination"
          rules={[
            {
              required: true,
              message: 'Please input the destination name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: 'Please input a description for the destination!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Destination
          </Button>
          <Button onClick={onCancel}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    );
  };
  