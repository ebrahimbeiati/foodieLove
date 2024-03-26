import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";
const MenuCard = (props) => {
  return (
      <div className="w-full lg:w-1/4 p-4 shadow-[rgba(0,0,0,0.24)] shadow-md rounded-lg">
        <img className="rounded-xl" src={props.img} alt="img" />
          <div className="space-y-2">
            <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>
              <div className="flex flex-row justify-center">
                  <BsStarFill className="text-amber-500" />
                  <BsStarFill className="text-amber-500" />
                  <BsStarFill className="text-amber-500" />
                  <BsStarFill className="text-amber-500" />
                  <BsStarHalf className="text-amber-500" />
              </div>
              <div className="flex flex-row justify-between items-center gap-3">
                  <p className="font-semibold text-lg">{props.price}</p>
                  <Button title="Order Now" />
                 
              </div>
          </div>
    </div>
  )
}

export default MenuCard;