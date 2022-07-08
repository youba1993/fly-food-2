import React, { useEffect, useState } from "react";
import Restaurants from "./Restaurants";


function Welcome({setDataCart}) {

    const [restaurants, setRestaurants] = useState([])   // Load db.json in the state
    useEffect(()=>{
        fetch("https://fly-food-1.herokuapp.com/restaurants")
            .then((resp)=> resp.json())
            .then ((data)=> (setRestaurants(data)))
    },[])
    return (
        <div >
            <div className="container py-5 h-100" >
                <div className="row d-flex justify-content-center align-items-center h-100" >
                   <h1 className="welcome">Your Food At Your Door As SOON As You ordre!</h1>
                </div>
                <div className="card-columns">
                
                {restaurants.map((restaurant)=>   //map the data from server and rendre each restaurant
                        <Restaurants setDataCart={setDataCart} key={restaurant.id} restaurant={restaurant}/>
                )}
            
                </div>
                
            </div>
        </div>
    )
}

export default Welcome;