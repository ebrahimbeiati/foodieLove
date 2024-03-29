import React, { useState } from "react";
import FoodMenu from "./FoodMenu"; // Import the FoodMenu component
import DrinkMenu from "./DrinkMenu"; // Import the DrinkMenu component
import MenuCard from "../layouts/MenuCard";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(""); // State for active menu ("food" or "drink")

  // Function to toggle the active menu
  const toggleMenu = (menu) => {
    if (menu === activeMenu) {
      setActiveMenu(""); // Close menu if clicked again
    } else {
      setActiveMenu(menu); // Set the active menu
    }
  };

  return (
   
     <MenuCard />
  );
};

export default Menu;


// import MenuCard from "../layouts/MenuCard";

// const Menu = () => {

//   return (
//     <div className="flex items-center justify-between bg-gray-800 text-white px-2 py-2">
      
      
       
//       <MenuCard />
//       </div>
    
//   );
// };

// export default Menu;
