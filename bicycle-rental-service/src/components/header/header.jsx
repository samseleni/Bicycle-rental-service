import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./header.scss";
import Logo from "../logo/logo";
import { rememberPath } from "../../storage/action";
import { signOut } from "../../storage/action";


const Header = () => {
  const isLogin = useSelector(state => state.isLogin);
  const dispath = useDispatch();

  const handleClick = () => {
    dispath(rememberPath(window.location.pathname));
    if (isLogin) dispath(signOut());
  }

  return (
    <header className="header">
      <Logo />
      <nav className="nav">
        <ul className="menu">
          <li><NavLink className={({ isActive }) =>(isActive ? "item active" : "item")} to="/">Главная</NavLink></li>
          <li><NavLink className={`item ${({ isActive }) =>(isActive ? " active" : "")}`} to="new-case">Сообщить о краже</NavLink></li>
          {isLogin && (
            <>
              <li><NavLink className={`item ${({ isActive }) =>(isActive ? " active" : "")}`} to="cases">Все сообщения о кражаж</NavLink></li>
              <li><NavLink className={`item ${({ isActive }) =>(isActive ? " active" : "")}`} to="officers">Ответственные сотрудники</NavLink></li>
            </>
          )}
        </ul>
      </nav>
      <Link to={isLogin ? "/": "/login"}>
        <button className="btn" onClick={handleClick}>{isLogin ? "Выйти" : "Войти"}</button>
      </Link>
    </header>
  );
};

export default Header;
