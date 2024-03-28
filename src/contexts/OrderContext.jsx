import React, { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const addOrder = (orderItem) => {
    // Check if the orderItem already exists in the orders array
    const existingOrderIndex = orders.findIndex(
      (item) => item.title && item.img === orderItem.title&&item.img
    );

    if (existingOrderIndex === -1) {
      // If the orderItem does not exist, add it to the orders array
      setOrders([...orders, { ...orderItem, quantity: 1 }]);
    } else {
      // If the orderItem already exists, update the quantity of the existing item
      const updatedOrders = [...orders];
      updatedOrders[existingOrderIndex].quantity++;
      setOrders(updatedOrders);
    }
  };

  const removeOrder = (index) => {
    const updatedOrders = [...orders];
    updatedOrders.splice(index, 1);
    setOrders(updatedOrders);
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
