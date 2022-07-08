import React, { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";

function Restaurants({ restaurant, setDataCart }) {
    const [toggleOrdre, setToggleOrdre] = useState(false);  //handle the modal menu

    function handletoggle(){
        setToggleOrdre(!toggleOrdre);
    }

    return (

        <div className="card" >
            <img src={restaurant.image} className="card-img-top" alt={restaurant.name} />
            <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text">{restaurant.slogan}</p>
                <Link to="/Menu"> <button type="button" className="btn btn-primary"  onClick={() => setToggleOrdre(!toggleOrdre)} >
                    Open menu
                </button></Link>
                {toggleOrdre ? <RestaurantInfo setDataCart={setDataCart} name={restaurant.name} menu={restaurant.menu} basicModal={toggleOrdre} handletoggle={handletoggle}/> : ""}
            </div>
        </div>


    )
}
export default Restaurants;

