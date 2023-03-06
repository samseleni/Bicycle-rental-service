import React from "react";
import "./officers.scss";
import { useSelector } from "react-redux";
import data from "../../mock.json";
import List from "../list/list";
import { removeOfficer } from "../../storage/action";

const Officers = () => {
  const officersLoaded = useSelector(state => state.officers);
  const officers = officersLoaded.map(officer => {
    if (officer.approved === "true") return {...officer, approved: "Одобрен"};
    else return {...officer, approved: "Не одобрен"};
  });
  
  const condition = ["id", "password", "clientId"];
  const { officersTh } = data;

  return (
    <List list={officers} title="Список ответственных сотрудников" th={officersTh} remove={removeOfficer} condition={condition}/>
  )
}

export default Officers;