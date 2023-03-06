import React from "react";
import { useState } from "react";
import "./formNewCase.scss";
import { addCase } from "../../storage/action";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";

const FormNewCase = () => {
  
  const curDate = new Date();
  const dispath = useDispatch();
  const officers = useSelector(state => state.officers);
  const isLogin = useSelector(state => state.isLogin);

  const initialCase = {
    status: "new",
    licenseNumber: "",
    type: "",
    ownerFullName: "",
    clientId: uniqid(),
    id: uniqid(),
    createdAt: "",
    updatedAt: "",
    color: "",
    date: "",
    officer: "",
    description: "",
    resolution: ""
  }

  const [newCase, setNewCase] = useState(initialCase);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispath(addCase(newCase));
    e.target.reset();
    setIsVisible(true);
    setTimeout(() => setIsVisible(false), 5000)
  }

  const handleChange = (e) => {
    setNewCase({...newCase,  [e.target.name]: e.target.value});
  }

  return (
    <div className="new-case">
      <div className="window-case">
        <h2 className="title">Сообщите о краже</h2>
        <h3 className="subtitle">Для этого заполните форму</h3>
        <form className="form-case" onSubmit={handleSubmit}>
          <label className="label" htmlFor="licenseNumber">Номер лицензии<span style={{color: "red"}}>*</span></label>
          <input
            className="input" 
            name="licenseNumber" 
            type="text" 
            onChange={handleChange}
            required />
          <label className="label" htmlFor="ownerFullName">ФИО<span style={{color: "red"}}>*</span></label>
          <input
            className="input" 
            name="ownerFullName" 
            type="text" 
            onChange={handleChange}
            required />
          <label htmlFor="type">Тип велосипеда<span style={{color: "red"}}>*</span></label>
          <select className="input" name="type" onChange={handleChange} required style={{cursor: "pointer"}} type='text'>
            <option value=""></option>
            <option value="спортивный">спортивный</option>
            <option value="дорожный">дорожный</option>
          </select>
          <label className="label" htmlFor="color">Цвет велосипеда</label>
          <input 
            className="input" 
            name="color" 
            type="text" 
            onChange={handleChange} />
          <label className="label" htmlFor="date">Дата кражи</label>
          <input 
            className="input date" 
            name="date" 
            type="date" 
            min="2022-01-01"
            max={`${curDate.getFullYear()}-${curDate.getMonth()+1}-${curDate.getDate()}`}
            onChange={handleChange} />
          <label className="label" htmlFor="description">Дополнительная информация</label>
          <textarea
            className="input textarea" 
            name="description" 
            type="text" 
            onChange={handleChange} />
          {isLogin && (
            <>  
              <label className="label" htmlFor="officer">Ответственный сотрудник</label>
              <select className="input" name="officer" onChange={handleChange} style={{cursor: "pointer"}}>
                <option value=""></option>
                {officers.map((officer) => {
                  if (officer.approved === "true")  
                    return (<option key={officer.lastname} value={`${officer.firstName} ${officer.lastName}`}>{officer.firstName} {officer.lastName}</option>)
                })}
              </select>
            </>
            )
          }
          <p className="footnote"><span style={{color: "red"}}>*</span>Обязательное поле</p>
          <button className="btn" type="submit">Отправить</button>
        </form>
        <p className={`thanks ${isVisible ? "visible" : "unvisible"}`}>Данные приняты. Спасибо за помощь!</p>
      </div>
    </div>
  )
}

export default FormNewCase;