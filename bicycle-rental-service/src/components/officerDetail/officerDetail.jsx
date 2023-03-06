import React from "react";
import "./officerDetail.scss";
import { useParams } from "react-router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editOfficer } from "../../storage/action";
import ImgEdit from "../../assets/edit.svg";

const OfficerDetail = () => {
  const {officerId} = useParams();
  const dispatch = useDispatch();
  const officerLoaded = useSelector(state => state.officers.find(officer => officer.id === officerId));
  const [isDisabled, setIsDisabled] = useState(true);
  const [officer, setOfficer] = useState(officerLoaded);
  const [checked, setChecked] = useState(officer.approved === "true" ? true : false);
  

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  }

  const handleChange = (e) => {
    if (e.target.name === "approved") {
      setChecked(!checked); 
      setOfficer({...officer, [e.target.name]: `${!checked}`}); 
    } else
      setOfficer({...officer, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);
    dispatch(editOfficer(officerId, officer));
  }

  return (
    <div className="officerDetail caseDetail">
      <h2 className="title">Детальная страница сотрудника</h2>
      {isDisabled ?
        (<button key='editButton' className="btn button-edit" onClick={handleClick}><img className="img-edit" src={ImgEdit}/>Редактировать описание</button>)
        :
        (<button key='sendButton' className="btn button-submit" form="form" type="submit">Сохранить изменения</button>)
      }
      <form className="form-case" onSubmit={handleSubmit} id="form">
          <label className="label" htmlFor="email">Электронная почта</label>
          <input
            className="input" 
            name="email" 
            id="email"
            type="email" 
            onChange={handleChange}
            required 
            value={officer.email} 
            disabled />
          <label className="label" htmlFor="firstName">Имя</label>
          <input
            className="input" 
            name="firstName" 
            id="firstName" 
            type="text" 
            onChange={handleChange}
            required 
            value={officer.firstName} 
            disabled={isDisabled} />
          <label className="label" htmlFor="lastName">Фамилия</label>
          <input 
            className="input" 
            name="lastName" 
            id="lastName" 
            type="text" 
            onChange={handleChange} 
            required 
            value={officer.lastName}
            disabled={isDisabled} />          
          <label className="label" htmlFor="password">Пароль</label>
          <input 
            className="input" 
            name="password" 
            id="password" 
            type="text" 
            onChange={handleChange} 
            value={officer.password} 
            disabled={isDisabled}/>
          <label className="label" htmlFor="clientId">ID</label>
          <input
            className="input"
            name="clientId" 
            id="clientId" 
            type="text" 
            onChange={handleChange} 
            value={officer.clientId} 
            disabled />
          <div className="label">Статус</div>
          <div className="checkbox" title="Изменить статус">
            <input 
              className="input input-checkbox" 
              name="approved" 
              type="checkbox"
              id="approved"  
              disabled={isDisabled} 
              checked={checked} 
              onChange={handleChange} />
            <label htmlFor="approved">{checked ? "Сотрудник одобрен" : "Сотрудник не одобрен"}</label>
          </div>
        </form>
    </div>
  )
}

export default OfficerDetail;