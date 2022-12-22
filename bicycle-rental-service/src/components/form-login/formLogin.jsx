import React from "react";
import "./formLogin.scss";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
const FormLogin = () => {
  const [active, setActive] = useState(true);
  const prePath = useSelector(state => state.prePath);

  const handleSubmit = () => {
    alert('Сделано');
  }

  const handleClick = () => {
    setActive(!active);
  }

  const handleChange = () => {

  }

  return (
    <>
      <div className="window">
        <Link to={prePath} className="close">&#215;</Link>
        <form className="form" onSubmit={handleSubmit}>
        <div className="choice-in">
          <button type='button' disabled={active ? true : false} className={`button-item ${active ? "active" : ""}`} onClick={handleClick}>Авторизация</button>
          <button type='button' disabled={!active ? true : false} className={`button-item ${active ? "" : "active"}`} onClick={handleClick}>Регистрация</button>
        </div>
          <label className="label">
            <div>E-mail{!active && <span style={{color: "red"}}>*</span>}:</div>
            <input
                className="input" 
                name="email" 
                type="email" 
                onChange={handleChange}
                required
            />
          </label>
          <label className="label">
            <div>Пароль{!active && <span style={{color: "red"}}>*</span>}:</div>
            <input
                className="input" 
                name="password" 
                type="password" 
                onChange={handleChange}
                required
            />
          </label>
          {active === false && (
            <>
              <label className="label">
                Имя:
                <input
                    className="input" 
                    name="name" 
                    type="text" 
                    onChange={handleChange}
                />
              </label>
              <label className="label">
                Фамилия:
                <input
                    className="input" 
                    name="surname" 
                    type="text" 
                    onChange={handleChange}
                />
              </label>
              <label className="label">
              <div>Client ID{!active && <span style={{color: "red"}}>*</span>}:</div>
                <input
                    className="input" 
                    name="id" 
                    onChange={handleChange}
                    required
                />
              </label>
              <div style={{fontSize: "12px"}}><span style={{color: "red"}}>*</span>Обязательное поле</div>
            </>
            )
          }
          
          <button className="btn" type="submit">{active ? "Войти" : "Зарегистрироваться"}</button>
        </form>
      </div>
      <div className="blackout"></div>
    </>
    
  )
}

export default FormLogin;