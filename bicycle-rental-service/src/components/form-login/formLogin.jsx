import React from "react";
import "./formLogin.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn, signUp } from "../../storage/reducers/reducer";
import uniqid from "uniqid"

const FormLogin = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const prePath = useSelector(state => state.prePath);
  const officers = useSelector(state => state.officers);
  let navigate = useNavigate();
  
  const dispatch = useDispatch();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.email)
    if (isRegistered) {
      if (officers.find(officer => officer.email === data.email && officer.password === data.password)) {
        dispatch(signIn(data));
        navigate("/");
      } 
      else {
        alert("Электронная почта или пароль введены не верно, попробуйте еще раз");
      }  
    } else {
        const search = officers.find(officer => officer.email === data.email || officer.clientId === data.clientId);
        if (search) alert('Такой пользователь уже существует');
        else {
          dispatch(signUp({...data, id: uniqid(), approved: 
            (officers.find(officer => officer.clientId !== "221194") && data.clientId === "221194") ? "true" : "false"}));
          navigate("/");
          alert("Ваши данные приняты и находятся на проверке. О ее результатах мы сообщим вам по указанной Вами электронной почте.");
        }
    }
  }

  const handleClick = () => {
    setIsRegistered(!isRegistered);
  }

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  return (
    <>
      <div className="window">
        <Link to={prePath} className="close">&#215;</Link>
        <form className="form" onSubmit={handleSubmit}>
        <div className="choice-in">
          <button type='button' disabled={isRegistered ? true : false} className={`button-item ${isRegistered ? "active" : ""}`} onClick={handleClick}>Авторизация</button>
          <button type='button' disabled={!isRegistered ? true : false} className={`button-item ${isRegistered ? "" : "active"}`} onClick={handleClick}>Регистрация</button>
        </div>
          <label className="label">
            <div>E-mail{!isRegistered && <span style={{color: "red"}}>*</span>}:</div>
            <input
                className="input" 
                name="email" 
                type="email" 
                onChange={handleChange}
                required
            />
          </label>
          <label className="label">
            <div>Пароль{!isRegistered && <span style={{color: "red"}}>*</span>}:</div>
            <input
                className="input" 
                name="password" 
                type="password" 
                onChange={handleChange}
                required
            />
          </label>
          {isRegistered === false && (
            <>
              <label className="label">
                Имя:
                <input
                    className="input" 
                    name="firstName" 
                    type="text" 
                    onChange={handleChange}
                />
              </label>
              <label className="label">
                Фамилия:
                <input
                    className="input" 
                    name="lastName" 
                    type="text" 
                    onChange={handleChange}
                />
              </label>
              <label className="label">
              <div>Client ID{!isRegistered && <span style={{color: "red"}}>*</span>}:</div>
                <input
                    className="input" 
                    name="clientId" 
                    onChange={handleChange}
                    required
                />
              </label>
              <div style={{fontSize: "12px"}}><span style={{color: "red"}}>*</span>Обязательное поле</div>
            </>
            )
          }
          <button className="btn" type="submit">{isRegistered ? "Войти" : "Зарегистрироваться"}</button>
        </form>
      </div>
      <div className="blackout"></div>
    </>
    
  )
}

export default FormLogin;