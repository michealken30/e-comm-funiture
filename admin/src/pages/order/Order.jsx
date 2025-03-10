import React, { useEffect, useState } from "react";
import "./Order.css";
import toast from "react-hot-toast";
import { assets } from "../../assets/assets";
import { useAllOrder, useChangeOrderStatus } from "../../adminApi/OrderApi";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { usersOrders, isLoading } = useAllOrder();
  const { ChangeStatus } = useChangeOrderStatus();

  const fetchAllOrders = async () => {
    const response = await usersOrders();
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (e, orderId) => {
    const orderStatus = e.target.value;
    const response = await ChangeStatus({ orderStatus, orderId });
    if (response.success) {
      await fetchAllOrders();
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="order add">
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ",";
                  }
                })}
              </p>
              <p className="order-item-name">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    " ," +
                    order.address.state +
                    " ," +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}</p>
            <select
              name=""
              id=""
              onChange={(e) => statusHandler(e, order._id)}
              value={order.status}
            >
              <option value="Order Processing">Order Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
