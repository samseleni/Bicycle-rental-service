import React from "react";
import "./list.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";


const List = (props) => {
  const {list, title, th, remove, condition} = props;
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(remove(item.id));
  }

  return (
    <div className="list">
      <h2 className="title">{title}</h2>
      <div className="table-container">
        <table className="table">
          <thead className="head">
            <tr>
              {th.map(head => { return(<th className="head-item" key={head}>{head}</th>) })}
            </tr>
          </thead>
          <tbody className="body">
            {list.map((item, index) => {
              return (
                <tr key={index}>
                  {Object.entries(item).map(([key, value]) => {
                    if (!condition.includes(key)) {
                      return (
                        <td className="body-item" key={uniqid()}><Link className="link" to={`${item.id}`}>{value}</Link></td>
                      )
                    }
                  })}
                  <td key={item.id} className="body-item">
                    <button className="btn" onClick={() => handleClick(item)}>Удалить</button>
                  </td>
                </tr>
              )  
            })}  
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default List;