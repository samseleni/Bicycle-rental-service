import React, { useState } from "react";
import "./caseDetail.scss";
import { useSelector, useDispatch } from "react-redux";
import { editCase } from "../../storage/action";
import { useParams } from "react-router";
import ImgEdit from "../../assets/edit.svg";
import uniqid from "uniqid";

const CaseDetail = () => {

  const curDate = new Date();
  const {caseId} = useParams();
  const dispatch = useDispatch();
  const caseLoaded = useSelector(state => state.cases.find(message => message.id === caseId));
  const officers = useSelector(state => state.officers);
  const [isDisabled, setIsDisabled] = useState(true);
  const [caseEdited, setCaseEdited] = useState(caseLoaded);  
  const statuses = {new: "Новое сообщение", in_progress: "В обработке", done: "Завершено"};
  const curStatus = Object.keys(statuses).find((key) => key === caseEdited.status);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  }

  const handleChange = (e) => {
    setCaseEdited({...caseEdited, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);
    dispatch(editCase(caseId, caseEdited));
  }

  return (
    <div className="caseDetail">
      <h2 className="title">Подробная информация о случае</h2>
      {isDisabled ?
        (<button key='editButton' className="btn button-edit" onClick={handleClick}><img className="img-edit" src={ImgEdit}/>Редактировать описание</button>)
        :
        (<button key='sendButton' className="btn button-submit" form="form" type="submit">Сохранить изменения</button>)
      }
      
      <form className="form-case" onSubmit={handleSubmit} id="form">
          <label className="label" htmlFor="licenseNumber">Номер лицензии</label>
          <input
            className="input" 
            name="licenseNumber" 
            id="licenseNumber"
            type="text" 
            onChange={handleChange}
            required 
            value={caseEdited.licenseNumber} disabled={isDisabled}/>
          <label className="label" htmlFor="ownerFullName">ФИО</label>
          <input
            className="input" 
            name="ownerFullName" 
            id="ownerFullName" 
            type="text" 
            onChange={handleChange}
            required 
            value={caseEdited.ownerFullName} disabled={isDisabled}/>
          <label className="label" htmlFor="type">Тип велосипеда</label>
          <select value={caseEdited.type} className="input" name="type" id="type" onChange={handleChange} required style={{cursor: "pointer"}} disabled={isDisabled}>
            <option>дорожный</option>
            <option>спортивный</option>
          </select>
          <label className="label" htmlFor="color">Цвет велосипеда</label>
          <input 
            className="input" 
            name="color" 
            id="color" 
            type="text" 
            onChange={handleChange} 
            value={caseEdited.color} disabled={isDisabled}/>
          <label className="label" htmlFor="date">Дата кражи</label>
          <input 
            className="input date" 
            name="date" 
            id="date" 
            type="date" 
            min="2022-01-01"
            max={`${curDate.getFullYear()}-${curDate.getMonth()+1}-${curDate.getDate()}`}
            onChange={handleChange} 
            value={(caseEdited.date)} disabled={isDisabled}/>
          <label className="label" htmlFor="description">Дополнительная информация</label>
          <textarea
            className={`input textarea ${(caseEdited.description || !isDisabled)? "" : "empty"}`}
            name="description" 
            id="description" 
            type="text" 
            onChange={handleChange} 
            value={caseEdited.description} 
            disabled={isDisabled}/>
          <label className="label" htmlFor="status">Статус</label>
          <select className="input" name="status" id="status" disabled={isDisabled} onChange={handleChange} value={curStatus}>
            {Object.keys(statuses).map(key => {
              return <option key={key} value={key}>{statuses[key]}</option>
            })}
          </select>
          <label className="label" htmlFor="clientId">ID клиента</label>
          <input className="input" name="clientId" id="clientId" value={caseEdited.clientId} disabled />
          <label className="label" htmlFor="createdAt">Дата создания сообщения</label>
          <input className="input" name="createdAt" id="createdAt" value={caseEdited.createdAt } disabled/>
          <label className="label" htmlFor="updatedAt">Дата последнего изменения сообщения</label>
          <input className="input" name="updatedAt" id="updatedAt" value={caseEdited.updatedAt} disabled/>
          <label className="label" htmlFor="officer">Ответственный сотрудник</label>
          <select className="input" name="officer" id="officer" value={caseEdited.officer} disabled={isDisabled} onChange={handleChange} style={{cursor: "pointer"}}>
            <option value=""></option>
            {officers.map(officer => {
              if (officer.approved === "true")  
                return (
                  <option key={uniqid()} value={`${officer.firstName} ${officer.lastName}`}>{officer.firstName} {officer.lastName}</option>
                )
            })}
          </select>
          {caseEdited.status === "done" && (
            <>
              <label className="label" htmlFor="resolution">Завершающий комментарий</label>
              <textarea 
                className={`input textarea ${(caseEdited.description || !isDisabled)? "" : "empty"}`} 
                name="resolution" 
                id="resolution" 
                value={caseEdited.description.resolution} 
                disabled={isDisabled} 
                onChange={handleChange}
                required />
            </>
            )
          }
        </form>
    </div>
  )
}

export default CaseDetail;