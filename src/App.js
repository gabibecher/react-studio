import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import bakeryItem from "./components/BakeryItem"
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  const [cart, setCart] = useState([]);
  const [totPrice, setTotPrice] = useState(0);
  /* add your cart state code here */

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => (
        <BakeryItem name={item.name} 
                    price={item.price} 
                    image={item.image} 
                    cart={cart} 
                    setCart={setCart}
                    setTotPrice={setTotPrice}
                    totPrice={totPrice}/>
      ))}

      <div>
        <h2>Cart</h2>
        <div>{cart}</div>
        <div>Total {totPrice}</div>
      </div>
    </div>
  );
}

export default App;
