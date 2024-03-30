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
    const orderItem = {
      title: props.title,
      price: props.price,
      img: props.img
    };
    addOrder(orderItem);
  };



  return (
    <div className="w-full lg:w-1/4 p-4 rounded-lg">
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


