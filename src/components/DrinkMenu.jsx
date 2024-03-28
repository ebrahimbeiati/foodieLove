import MenuCard from "../layouts/MenuCard";
import americano from "../assets/img/americano.jpeg";
import tea from "../assets/img/tea.jpeg";
import cappuccino from "../assets/img/cappuccino.jpeg"
import latte from "../assets/img/latte.jpeg"
import espresso from "../assets/img/espresso.jpeg"
import Juices from "../assets/img/Juices.jpeg"
import Milkshakes from "../assets/img/Milkshakes.jpeg"
import Lemonade from "../assets/img/Lemonade.jpeg"
import Smoothies from "../assets/img/Smoothies.jpeg"
import SoftDrinks from "../assets/img/SoftDrinks.jpeg"




const DrinkMenu = () => {
  const drinkItems = [
    { title: "Americano", img: americano, price: "$6", rating: 4 },
      { title: "Tea", img: tea, price: "$4.5", rating: 4.5 },
      { title: "Cappuccino", img: cappuccino, price: "$8", rating: 4.5 },
      { title: "Latte", img: latte, price: "$8", rating: 4.5 },
      { title: "Espresso", img: espresso, price: "$6", rating: 4.5 },
      { title: "Juices", img: Juices, price: "$6", rating: 4.5 },
      { title: "Milkshakes", img: Milkshakes, price: "$6", rating: 4.5 },
      { title: "Lemonade", img: Lemonade, price: "$6", rating: 4.5 },
      { title: "Smoothies", img: Smoothies, price: "$6", rating: 4.5 },
      { title: "SoftDrinks", img: SoftDrinks, price: "$6", rating: 4.5 },

    
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
