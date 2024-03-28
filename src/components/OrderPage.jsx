// import React from "react";
// import { useOrder } from "../contexts/OrderContext";

// const OrderPage = (props) => {
//   const { orders, removeOrder } = useOrder();

//   const removeFromOrder = (index) => {
//     removeOrder(index); // Remove order at the specified index
//   };

//   const handlePayment = () => {
//     // Implement payment logic here
//     console.log("Payment logic goes here");
//   };

//   // Function to calculate the total sum of the order
//   const calculateTotalSum = () => {
//     return orders
//       .reduce((total, order) => total + parseFloat(order.price.slice(1)), 0)
//       .toFixed(2);
//   };

//   return (
//     <div>
//       <h1>Order Page</h1>
//       {orders.length > 0 ? (
//         <ul>
//           {orders.map((order, index) => (
//             <li key={index}>
//               <div>
//                 <img
//                   src={order.img}
//                   alt={order.title}
//                   style={{ width: "50px", height: "50px" }}
//                 />
//                 <br />
//                 <p>{order.title}</p>
//                 <p>{order.price}</p>
//                 <button onClick={() => removeFromOrder(index)}>Remove</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No orders yet</p>
//       )}
//       <p>Total: ${calculateTotalSum()}</p> {/* Display total sum */}
//       <button onClick={handlePayment}>Pay Now</button> {/* Payment button */}
//     </div>
//   );
// };

// export default OrderPage;
import React from "react";
import { useOrder } from "../contexts/OrderContext";

const OrderPage = () => {
  const { orders, removeOrder } = useOrder();

  const removeFromOrder = (index) => {
    removeOrder(index); // Remove order at the specified index
  };

  const handlePayment = () => {
    // Implement payment logic here
    console.log("Payment logic goes here");
  };

  // Function to calculate the total sum of the order
  const calculateTotalSum = () => {
    return orders
      .reduce((total, order) => total + parseFloat(order.price.slice(1)), 0)
      .toFixed(2);
  };

  return (
    <div className="m-1 bg-gray-300 flex flex-col flex-wrap mt-48">
      <h1 className="mt-36 flex flex-col text-3xl text-center font-semibold mb-12">
        Order Page
      </h1>
      {orders.length > 0 ? (
        <div className="flex flex-col flex-wrap gap-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md flex items-center"
            >
              <img
                src={order.img}
                alt={order.title}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold mb-2">{order.title}</h2>
                <p className="text-gray-600">{order.price}</p>
              </div>
              <button
                onClick={() => removeFromOrder(index)}
                className="ml-auto px-12 py-2 bg-red-500 text-white rounded hover:bg-red-600 mt-48"
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
