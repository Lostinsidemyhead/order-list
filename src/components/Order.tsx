import React from 'react';
import { deliveryAddress, orderType } from '../types';

interface IOrderProps {
  order: orderType
}

const paymentStatusMap = new Map([
  ['Paid', 'Оплачен'],
  ['NotPaid', 'Не оплачен'],
  ['PartiallyPaid', 'Частично оплачен']
]);

const orderStatusMap = new Map([
  ['NotProcessed', 'Не обработан'],
  ['Cancelled', 'Отменен'],
  ['ReadyToProcessing', 'Доступен для обработки'],
  ['Processing', 'В обработке'],
  ['Processed', 'Обработан']
]);


const Order: React.FC<IOrderProps> = ({ ...props }) => {

  const parseDate = (dateString: string): String => {
    const timestamp = dateString
      .replaceAll('/', '')
      .replace('(', '')
      .replace(')', '')
      .replace('Date', '');

    return new Date(parseInt(timestamp)).toLocaleDateString();;
  }

  const parseAddress = (address: deliveryAddress): string => {
    const deliveryAddress = `${address.Country} ${address.City} ${address.AddressLine1} ${address.AddressLine2} ${address.ZipCode}`;

    return deliveryAddress;
  }

  return (
    <div className="order">
      <div className="order-image">
        <img src={props.order.PreviewImageUrl} alt="No image" />
      </div>
      <div className="order-info">
        <div>
          {props.order.Title}
        </div>
        <div>
          ID: {props.order.Id}
        </div>
        <div>
          Адрес: {parseAddress(props.order.DeliveryAddress)}
        </div>
        <div>
          Телефон: {props.order.DeliveryAddress.Phone || "Не указан"}
        </div>
        <div>
          Создан: {parseDate(props.order.DateCreated)}
        </div>
        <div>
          Заказчик: {props.order.DeliveryAddress.FullName}
        </div>
        <div>
          Цена: {props.order.TotalPrice}
        </div>
        <div>
          Статус оплаты: {paymentStatusMap.get(props.order.PaymentStatus)}
        </div>
        <div>
          Статус заказа: {orderStatusMap.get(props.order.Status)}
        </div>
      </div>
      <div className="shipping-info">
        <div>
          Email: {props.order.Shipping.Email || "Не указан"}
        </div>
        <div>
          Телефон: {props.order.Shipping.Phone || "Не указан"}
        </div>
        <div>
          {props.order.Shipping.Title}
        </div>
      </div>
    </div>
  )
}

export default Order;
