import React from "react";
import MenuCard from "../layouts/MenuCard";
import americano from "../assets/img/americano.jpeg";
import tea from "../assets/img/tea.jpeg";




const DrinkMenu = () => {
  const drinkItems = [
    { title: "Coffee", img: americano, price: "$6", rating: 4 },
      { title: "Tea", img: tea, price: "$4.5", rating: 4.5 },
    
    // Add other drink items with their respective data
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <div className="flex flex-wrap justify-center gap-4">
        {drinkItems.map((item, index) => (
          <MenuCard
            key={`drink_${index}`}
            title={item.title}
            img={item.img}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default DrinkMenu;
