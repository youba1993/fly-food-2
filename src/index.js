import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Cart from './Component/Cart';
import SignIn from './Component/SignIn';
import SignUp from './Component/SignUp';
import RestaurantInfo from './Component/RestaurantInfo';

 
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />}>
          <Route path="/SignIn" element={<SignIn />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Menu" element={<RestaurantInfo />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  );


