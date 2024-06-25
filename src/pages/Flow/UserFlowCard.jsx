import React from 'react';
import { Card } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const UserFlowCard = ({ data, header }) => (
  <Card style={{ width: '350px', margin: '10px' }}>
    <Card.Header>{header}</Card.Header>
    <Card.Body>
      <LineChart width={300} height={200} data={data}>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </Card.Body>
  </Card>
);

export default UserFlowCard;
