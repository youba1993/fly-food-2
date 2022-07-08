import React from "react";
import { Link } from 'react-router-dom';

function NavBar({ logInOn, signUpOn, cartOn, numInCart }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light"
            style={{
                display: "flex",
            }}
        >
            <Link to="/"> <img src={'/img/flyFood.png'} style={{ width: '100px' }} alt="FLY Food"></img> </Link> {"   "}

            <div className="d-flex ml-auto align-items-center justify-content-end" >
                <Link to="/Cart"><button type="button" className="btn btn-link px-3 me-2" onClick={cartOn}>
                    Cart: <span className="badge badge-warning">{numInCart}</span>
                </button></Link>

                <Link to="/SignIn"><button type="button" className="btn px-3 me-2" onClick={logInOn}>
                    Login
                </button></Link>
                
                <Link to="/SignUp"><button type="button" className="btn btn-primary me-3" onClick={signUpOn}>
                    Sign up
                </button></Link>
            </div>

        </nav>

    )
}

export default NavBar;