import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./header.scss";
import Logo from "../logo/logo";
import { rememberPath } from "../storage/action";


const Header = () => {
  const isLogin = useSelector(state => state.isLogin);
  const dispath = useDispatch();

  const handleClick = () => {
    dispath(rememberPath(window.location.pathname));
  }

  return (
    <header className="header">
      <Logo />
      <nav className="nav">
        <ul className="menu">
          <li><Link className="item" to="/">Главная</Link></li>
          <li><Link className="item" to="new-case">Сообщить о краже</Link></li>
          <li><Link className="item" to="cases">Все сообщения о кражаж</Link></li>
        </ul>
      </nav>
      <Link to="/login">
        <button className="btn" onClick={handleClick}>{isLogin ? "Выйти" : "Войти"}</button>
      </Link>
    </header>
  );
};

export default Header;
