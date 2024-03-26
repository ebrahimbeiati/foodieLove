import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "../layouts/Button";
const MenuCard = (props) => {
  return (
      <div>
        <img src={props.img} alt="img" />
          <div>
            <h3>{props.title}</h3>
              <div>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
              </div>
              <div>
                  <p>{props.price}</p>
                  <Button>Order Now</Button>
                 
              </div>
          </div>
    </div>
  )
}

export default MenuCard;