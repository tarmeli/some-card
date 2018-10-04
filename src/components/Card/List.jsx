import React from 'react';
import { messageData } from '../../data';
import { Card } from './';

const List = () => (
  <div className="card">
    {messageData.map(item => (
      <Card
        sender={item.sender}
        message={item.message}
        key={item.id}
        avatar={item.avatar}
        timestamp={item.timestamp}
      />))}
  </div>);


export { List };
