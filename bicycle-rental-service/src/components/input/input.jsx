// import React from "react";
// import "./input.scss";
// import { useState } from "react";

// const Input = (props) => {
//   const curDate = new Date();
//   const {inputValue, initialCase} = props;
//   const startValue = inputValue.length ? inputValue : ""; 
  
//   const [value, setValue] = useState(startValue);

//   const [newCase, setNewCase] = useState(initialCase);

//   const handleChange = (e) => {
//     setNewCase({...newCase,  [e.target.name]: e.target.value});
//   }

//   return (
//     <div className="input">
//       <label className="label" htmlFor="licenseNumber">Номер лицензии<span style={{color: "red"}}>*</span></label>
//       <input
//         value={}
//         className="input" 
//         name="licenseNumber" 
//         id="licenseNumber" 
//         type="text" 
//         onChange={handleChange}
//         required />
//       <label className="label" htmlFor="ownerFullName">ФИО<span style={{color: "red"}}>*</span></label>
//       <input
//         className="input" 
//         name="ownerFullName" 
//         id="ownerFullName" 
//         type="text" 
//         onChange={handleChange}
//         required />
//       <label htmlFor="type">Тип велосипеда<span style={{color: "red"}}>*</span></label>
//       <select className="input" name="type" id="type" onChange={handleChange} required style={{cursor: "pointer"}}>
//         <option value=""></option>
//         <option value="дорожный">дорожный</option>
//         <option value="спортивный">спортивный</option>
//       </select>
//       <label className="label" htmlFor="color">Цвет велосипеда</label>
//       <input 
//         className="input" 
//         name="color" 
//         id="color"
//         type="text" 
//         onChange={handleChange} />
//       <label className="label" htmlFor="date">Дата кражи</label>
//       <input 
//         className="input date" 
//         name="date" 
//         id="date"
//         type="date" 
//         min="2022-01-01"
//         max={`${curDate.getFullYear()}-${curDate.getMonth()+1}-${curDate.getDate()}`}
//         onChange={handleChange} />
//       <label className="label" htmlFor="description">Дополнительная информация</label>
//       <textarea
//         className="input textarea" 
//         name="description" 
//         id="description"
//         type="text" 
//         onChange={handleChange} />
//     </div>
    
//   )
// }

// export default Input;