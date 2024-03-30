import React from "react";
import { useOrder } from "../contexts/OrderContext";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const navigate = useNavigate();
  const { orders, removeOrder } = useOrder();

  const removeFromOrder = (index) => {
    removeOrder(index);
  };

  const handlePayment = () => {
    // Navigate to the payment page
    navigate("/payment");
  };

  const calculateTotalSum = () => {
    return orders
      .reduce((total, order) => total + parseFloat(order.price.slice(1)), 0)
      .toFixed(2);
  };

  return (
    <div className=" bg-gray-300 grid grid-col p-24 mb-24 ">
      <h1 className="m-36 flex flex-col text-3xl text-center font-semibold">
        Order Page
      </h1>
      {orders.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-lg shadow-md flex items-center"
            >
              <img
                src={order.img}
                alt={order.title}
                className="w-22 h-20  rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold mb-2">{order.title}</h2>
                <p className="text-gray-600">{order.price}</p>
              </div>
              <button
                onClick={() => removeFromOrder(index)}
                className="ml-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mt-4"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 m-1">No orders yet</p>
      )}
      <div className="mt-20 flex items-center justify-between">
        <p className="text-xl font-semibold m-1">
          Total: ${calculateTotalSum()}
        </p>
        <button
          onClick={handlePayment}
          className="px-6 py-3 mb-3 m-3 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default OrderPage;
