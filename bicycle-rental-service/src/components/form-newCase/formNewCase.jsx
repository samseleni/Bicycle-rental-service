import React from "react";
import { useState } from "react";
import "./formNewCase.scss";
import { BIKE_TYPE } from "../../config";
import { addCase } from "../storage/action";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import { formatDate } from "../../utils";


const FormNewCase = () => {

  const curDate = new Date();
  const dispath = useDispatch();

  const initialCase = {
    status: "new",
    licenseNumber: "",
    type: "",
    ownerFullName: "",
    clientId: uniqid(),
    createdAt: formatDate(curDate),
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
          <select className="input" name="type" onChange={handleChange} required style={{cursor: "pointer"}}>
            <option value=""></option>
            {BIKE_TYPE.map((type) => {
              return (<option key={type} value={type}>{type}</option>)
            })}
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
          <p className="footnote"><span style={{color: "red"}}>*</span>Обязательное поле</p>
          <button className="btn" type="submit">Отправить</button>
        </form>
        <p className={`thanks ${isVisible ? "visible" : "unvisible"}`}>Данные приняты. Спасибо за помощь!</p>
      </div>
    </div>
  )
}

export default FormNewCase;