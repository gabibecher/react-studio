//import { useState } from "react";

import { useState } from "react";


export default function BakeryItem({name, price, image, cart, setCart, totPrice, setTotPrice}) {

    const [index, setIndex] = useState(0);

    const handleClick = () => {
        setTotPrice(totPrice + price)
        setCart([...cart, name, " " + index, <br/>])
        setIndex(index + 1)
    }

    return(
        <div> 
            <div>{name} {price} </div>
            <img src = {image}/>
            <button onClick={handleClick}>add to cart</button>
        </div>
    )
}