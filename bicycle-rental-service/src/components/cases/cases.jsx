import React from "react";
import "./cases.scss";
import data from "../../mock.json";
import { Link } from "react-router-dom";

const Cases = () => {
  const { cases } = data; 

  const handleClick = () => {
    
  }

  return (
    <div className="cases">
      <h2 className="title">Все случаи кражи</h2>
      <table className="table">
        <thead className="head">
          <tr>
            {Object.keys(cases[0].description).map(key => {
              return (<th className="head-item" key={key} scope="col">{key}</th>);
              })}
            <th className="head-item">Действие</th>
          </tr>
        </thead>
        <tbody className="body">
          {cases.map((message, index) => {
            return (
              
                <tr key={index}>
                  {Object.values(message.description).map((value) => {
                    return (
                      <td className="body-item" key={message.id}><Link className="link" to={`cases/${message.id}`}>{value}</Link></td>
                    )
                  })}
                  <td className="body-item"><button className="btn" onClick={handleClick}>Удалить</button></td>
                </tr>
              
            )  
          })}  
        </tbody>
          
      </table>
      
    </div>
  )
}

export default Cases;