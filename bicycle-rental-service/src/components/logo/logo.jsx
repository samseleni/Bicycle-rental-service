import React from "react";
import Bicycle from "../../assets/bicycle.svg";
import "./logo.scss"

const Logo = () => {
  return (
    <div className="logo">
      <img className="image" src={Bicycle}/>
      <span className="name">Поиск велосипедов</span>
      <img className="image image-turn" src={Bicycle}/>
    </div>
  )
}

export default Logo;

