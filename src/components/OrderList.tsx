import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../api/OrdersService';
import { orderType } from '../types';
import Order from './Order';

const OrderList: React.FC = () => {
  const [orders, setOrders] = useState<orderType[]>([])

  useEffect(() => {
    getOrders();
  }, [])

  const getOrders = async () => {
    const fetched = await fetchOrders();
    setOrders(fetched);
  }

  return (
    <div className="order-list">
      {orders.map((order, index) => (
        <Order
          key={index}
          order={order}
        />
      ))}
    </div>
  )
}

export default OrderList;
