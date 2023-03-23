import React from 'react';
import { Card, Col, Row } from 'antd';

const CardList = () => {
  const data = [
    { title: 'Card 1', description: 'Description for Card 1' },
    { title: 'Card 2', description: 'Description for Card 2' },
    { title: 'Card 3', description: 'Description for Card 3' },
  ];

  return (
    <div>
      <Row gutter={[16, 16]}>
        {data.map(item => (
          <Col key={item.title} span={8}>
            <Card title={item.title} bordered={false}>
              <p>{item.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardList;
