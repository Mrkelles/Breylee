
import * as React from 'react';

interface OrderConfirmationEmailProps {
  fullName: string;
  phoneNumber: string;
  whatsappNumber?: string;
  address: string;
  state: string;
  quantity: string;
}

export const OrderConfirmationEmail: React.FC<Readonly<OrderConfirmationEmailProps>> = ({
  fullName,
  phoneNumber,
  whatsappNumber,
  address,
  state,
  quantity,
}) => (
  <div>
    <h1>New Order Received!</h1>
    <p>
      You have received a new order from the Oello Shop website.
    </p>
    <h2>Order Details:</h2>
    <ul>
      <li><strong>Full Name:</strong> {fullName}</li>
      <li><strong>Phone Number:</strong> {phoneNumber}</li>
      {whatsappNumber && whatsappNumber !== 'Not provided' && <li><strong>WhatsApp Number:</strong> {whatsappNumber}</li>}
      <li><strong>Address:</strong> {address}</li>
      <li><strong>State:</strong> {state}</li>
      <li><strong>Quantity:</strong> {quantity}</li>
    </ul>
  </div>
);

export default OrderConfirmationEmail;
