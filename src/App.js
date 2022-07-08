
import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Component/Cart';
import NavBar from './Component/NavBar';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import Welcome from './Component/Welcome';
function App() {
  
  //handle the login, signin and cart component show/hide
  const [logInOn, setLogInOn] = useState(false);        
  const [signUpOn, setSignUpOn] = useState(false);
  const [cartOn, setCartOn] = useState(false);

  //handle meal bought by custumer
  const [dataCart, setDataCart] = useState();

  //array of all meals bought by custumer
  const [allDataCart, setAllDataCart] = useState([]);

    useEffect(()=>{
      if (dataCart !== undefined){
        // i limited the number of meals to one each 
        const exist = allDataCart.find((x=> x.meal === dataCart.meal)); 
        if(!exist) setAllDataCart([...allDataCart, dataCart]);
      }
    },[dataCart])

  function toggleLogIn() {
    setLogInOn(!logInOn)
    setSignUpOn(false)
  }
  function toggleSignIn() {
    setSignUpOn(!signUpOn)
    setLogInOn(false)
  }
  function toggleCart(){
    setCartOn(!cartOn)
  }

  return (
    <div className="p-5 bg-image" style={{
      backgroundImage: `url(/img/mainPicture.jpg)`,
      backgroundRepeat: "no-repeat",
      height: '100%',
    }}>

      <NavBar logInOn={toggleLogIn} signUpOn={toggleSignIn} cartOn={toggleCart} numInCart={allDataCart.length}/>
      <br></br>
      {cartOn ? <Cart cartOn={cartOn} toggleCart={toggleCart} dataCart={allDataCart}/> : ""}
      {logInOn ? <SignIn /> : ""}
      {signUpOn ? <SignUp /> : ""}
      <Welcome setDataCart={setDataCart}/>
      

      <footer>
        <address style={{fontWeight : 'bold'}}>
          MANZANITA AVE<br></br>
          CARMICHAEL CA 95608<br></br>
          USA
        </address>
      </footer>
    </div>


  );
}

export default App;
