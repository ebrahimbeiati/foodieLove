import MenuCard from "../layouts/MenuCard";
import cake from "../assets/img/cake.jpeg";
import pizza from "../assets/img/pizza.jpeg";
import salad from "../assets/img/salad.jpeg";
import burger from "../assets/img/burger.jpeg";
import vegie from "../assets/img/vegie.jpeg";
import pasta from "../assets/img/pasta.jpeg";
import chicken from "../assets/img/chicken.jpeg";
import fish from "../assets/img/fish.jpeg";
import hamburger from "../assets/img/hamburger.jpeg";
import kebab from "../assets/img/kebab.jpeg";
import indianspicy from "../assets/img/indianspicy.jpeg";
import noodles from "../assets/img/noodles.jpeg";
import steak from "../assets/img/steak.jpeg";
import spagheti from "../assets/img/spagheti.jpeg";
import soup from "../assets/img/soup.jpeg";
import shrimp from "../assets/img/shrimp.jpeg";
import prawn from "../assets/img/prawn.jpeg";
import fruitsalad from "../assets/img/fruitsalad.jpeg";
import frenchfries from "../assets/img/frenchfries.jpeg";
import eggsandwich from "../assets/img/eggsandwich.jpeg";
import crab from "../assets/img/crab.jpeg";
import { useOrder } from "../contexts/OrderContext";


const FoodMenu = () => {
    const { addOrder } = useOrder(); // Access addOrder function from context

    const handleOrder = (item) => {
      addOrder(item); // Add item to the order
    };


  const foodItems = [
    { title: "Cakes", img: cake, price: "$10", rating: 4.5 },
    { title: "Pizzas", img: pizza, price: "$15", rating: 4.5 },
    { title: "Salads", img: salad, price: "$5", rating: 3.5 },
    { title: "Burgers", img: burger, price: "$20", rating: 4.5 },
    { title: "Vegies", img: vegie, price: "$10", rating: 4.5 },
    { title: "Pasta", img: pasta, price: "$10", rating: 4.5 },
    { title: "Chicken", img: chicken, price: "$20", rating: 4.5 },
    { title: "Fish", img: fish, price: "$25", rating: 4.5 },
    { title: "Hamburger", img: hamburger, price: "$15", rating: 4.5 },
    { title: "Kebab", img: kebab, price: "$20", rating: 4.5 },
    { title: "Indian Spicy", img: indianspicy, price: "$15", rating: 4.5 },
    { title: "Noodles", img: noodles, price: "$10", rating: 4.5 },
    { title: "Steak", img: steak, price: "$30", rating: 4.5 },
    { title: "Spaghetti", img: spagheti, price: "$10", rating: 4.5 },
    { title: "Soup", img: soup, price: "$10", rating: 4.5 },
    { title: "Shrimp", img: shrimp, price: "$25", rating: 4.5 },
    { title: "Prawn", img: prawn, price: "$20", rating: 4.5 },
    { title: "Fruit Salad", img: fruitsalad, price: "$10", rating: 4.5 },
    { title: "French Fries", img: frenchfries, price: "$10", rating: 4.5 },
    { title: "Eggs Sandwich", img: eggsandwich, price: "$10", rating: 4.5 },
    { title: "Crab", img: crab, price: "$20", rating: 4.5 },
  ];

  return (
    <>
      <div className="pt-12 mt-6 bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-center mb-10 pt-24 md:px-32 px-5">
          Our Food Menu
        </h1>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
        <div className="flex flex-wrap justify-center gap-4">
          {foodItems.map((item, index) => (
            <MenuCard
              key={`food_${index}`}
              title={item.title}
              img={item.img}
              price={item.price}
              rating={item.rating}
              showOrderButton={true}
              onOrder={handleOrder} // or whatever logic you use to determine whether to show the button
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FoodMenu;

