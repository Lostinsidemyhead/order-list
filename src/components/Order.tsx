import React from 'react';
import { orderType } from '../types';

interface IOrderProps {
  order: orderType
}

const Order: React.FC<IOrderProps> = ({ ...props }) => {
  return (
    <div>
      <div>
        {props.order.Id}
        {props.order.Title}
      </div>
    </div>
  )
}

export default Order;
