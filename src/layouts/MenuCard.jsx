// import React from "react";
// import Button from "../layouts/Button";
// import { BsStarFill, BsStarHalf } from "react-icons/bs";
// import PropTypes from "prop-types";

// const StarRating = ({ rating }) => {
//   return (
//     <div className="flex flex-row justify-center">
//       {/* Star rating icons */}
//       <BsStarFill className="text-amber-500" />
//       <BsStarFill className="text-amber-500" />
//       <BsStarFill className="text-amber-500" />
//       <BsStarFill className="text-amber-500" />
//       <BsStarHalf className="text-amber-500" />
//     </div>
//   );
// };

// const MenuCard = (props) => {
//   return (
//     <div className="w-full lg:w-1/4 p-4 shadow-[rgba(0,0,0,0.24)] shadow-md rounded-lg">
//       {/* Render image only if props.img is provided */}
//       {props.img && (
//         <img
//           className="rounded-xl w-full h-40 object-cover"
//           src={props.img}
//           alt="img"
//         />
//       )}
//       <div className="space-y-2">
//         <h3 className="font-semibold text-center text-xl pt-6">
//           {props.title}
//         </h3>
//         {/* Conditionally render star rating */}
//         {props.rating && (
//           <div className="flex flex-row justify-center">
//             <BsStarFill className="text-amber-500" />
//             <BsStarFill className="text-amber-500" />
//             <BsStarFill className="text-amber-500" />
//             <BsStarFill className="text-amber-500" />
//             <BsStarHalf className="text-amber-500" />
//           </div>
//         )}
//         <div className="flex flex-row justify-between items-center gap-3">
//           {/* Render price */}
//           <p className="font-semibold text-lg">{props.price}</p>
//           {/* Conditionally render "Order Now" button */}
//           {props.showOrderButton && <Button title="Order Now" />}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Define prop types for MenuCard component
// MenuCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   img: PropTypes.string,
//   price: PropTypes.string.isRequired,
//   rating: PropTypes.number,
//   showOrderButton: PropTypes.bool,
// };

// export default MenuCard;
// MenuCard.jsx
// import React from "react";
// import Button from "../layouts/Button";
// import { BsStarFill, BsStarHalf } from "react-icons/bs";
// import PropTypes from "prop-types";
// import { useOrder } from "../contexts/OrderContext";

// const StarRating = ({ rating }) => {
//   return (
//     <div className="flex flex-row justify-center">
//       {/* Star rating icons */}
//       <BsStarFill className="text-amber-500" />
//       <BsStarFill className="text-amber-500" />
//       <BsStarFill className="text-amber-500" />
//       <BsStarFill className="text-amber-500" />
//       <BsStarHalf className="text-amber-500" />
//     </div>
//   );
// };

// const MenuCard = (props) => {
//   const { addOrder } = useOrder();

//   const handleOrder = () => {
//     const orderItem = {
//       title: props.title,
//       price: props.price,
//     };
//     addOrder(orderItem);
//   };

//   return (
//     <div className="w-full lg:w-1/4 p-4 shadow-[rgba(0,0,0,0.24)] shadow-md rounded-lg">
//       {/* Render image only if props.img is provided */}
//       {props.img && (
//         <img
//           className="rounded-xl w-full h-40 object-cover"
//           src={props.img}
//           alt="img"
//         />
//       )}
//       <div className="space-y-2">
//         <h3 className="font-semibold text-center text-xl pt-6">
//           {props.title}
//         </h3>
//         {/* Conditionally render star rating */}
//         {props.rating && (
//           <div className="flex flex-row justify-center">
//             <BsStarFill className="text-amber-500" />
//             <BsStarFill className="text-amber-500" />
//             <BsStarFill className="text-amber-500" />
//             <BsStarFill className="text-amber-500" />
//             <BsStarHalf className="text-amber-500" />
//           </div>
//         )}
//         <div className="flex flex-row justify-between items-center gap-3">
//           {/* Render price */}
//           <p className="font-semibold text-lg">{props.price}</p>
//           {/* Conditionally render "Order Now" button */}
//           {props.showOrderButton && (
//             <Button title="Order Now" onClick={handleOrder} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Define prop types for MenuCard component
// MenuCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   img: PropTypes.string,
//   price: PropTypes.string.isRequired,
//   rating: PropTypes.number,
//   showOrderButton: PropTypes.bool,
// };

// export default MenuCard;


import Button from "../layouts/Button";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import PropTypes from "prop-types";
import { useOrder } from "../contexts/OrderContext";

const StarRating = ({ rating }) => {
  return (
    <div className="flex flex-row justify-center">
      <BsStarFill className="text-amber-500" />
      <BsStarFill className="text-amber-500" />
      <BsStarFill className="text-amber-500" />
      <BsStarFill className="text-amber-500" />
      <BsStarHalf className="text-amber-500" />
    </div>
  );
};

const MenuCard = (props) => {
  const { addOrder } = useOrder();
 

  const handleOrder = () => {
      console.log("Order clicked!"); 
    const orderItem = {
      title: props.title,
      price: props.price,
      img: props.img
    };
    addOrder(orderItem);
  };



  return (
    <div className="w-full lg:w-1/4 p-4 shadow-[rgba(0,0,0,0.24)] shadow-md rounded-lg">
      {props.img && (
        <img
          className="rounded-xl w-full h-40 object-cover"
          src={props.img}
          alt="img"
        />
      )}
      <div className="space-y-2">
        <h3 className="font-semibold text-center text-xl pt-6">
          {props.title}
        </h3>
        {props.rating && (
          <div className="flex flex-row justify-center">
            <BsStarFill className="text-amber-500" />
            <BsStarFill className="text-amber-500" />
            <BsStarFill className="text-amber-500" />
            <BsStarFill className="text-amber-500" />
            <BsStarHalf className="text-amber-500" />
          </div>
        )}
        <div className="flex flex-row justify-between items-center gap-3">
          <p className="font-semibold text-lg">{props.price}</p>
          {props.showOrderButton && (
            <Button title="Order Now"
              onClick={handleOrder}
            />
            

          )}
          
        </div>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number,
  showOrderButton: PropTypes.bool,
};

export default MenuCard;


