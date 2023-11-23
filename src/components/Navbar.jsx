import React from 'react';
import LogoImage from './img/bazaary.jpeg'
import CartImage from './img/cart.png'
import ProfileImage from './img/profile-picture.webp'
import SellImage from './img/sell.png'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <div className="navbar">
        <div onClick={()=> navigate("/")} className="circular-logo hidden md:block">
          <img src={LogoImage} alt="Logo" />
        </div>
        <div className='font-text text-3xl pl-5 hidden md:block '>
          Bazaary
        </div>
        <div className="search-bar md:ml-7">
          <input id="search-bar-input" type="text" placeholder=" &#8981; Buscar..." className=" w-11/12 md:w-3/4 font-text input-text" />
        </div>
        <div className="for-sale">
          <a href={"/addingitem/category"}>
            <img src={SellImage} alt="Carrito de Compras" />
          </a>
        </div>
        <div onClick={()=> navigate("/cart")} className="shopping-cart">
          <img src={CartImage} alt="Carrito de Compras" />
        </div>
        <div className="profile-picture">
          <img src={ProfileImage} alt="Foto de Perfil" />
        </div>
      </div>
      <main className="App-content">{/**Se usa para renderizar los hijos: HomePage, etc*/}
        <Outlet />
      </main>
    </>
  );
}
export default Navbar;