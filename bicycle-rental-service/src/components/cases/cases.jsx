import React from "react";
import "./cases.scss";
import { useSelector } from "react-redux";
import { removeCase } from "../../storage/action";
import List from "../list/list";
import data from "../../mock.json";


const Cases = () => {
  const condition = ["id", "clientId","createdAt", "updatedAt", "officer"];
  const cases = useSelector(state => state.cases);
  const { casesTh } = data;

  return (
    <List list={cases} title="Все случаи кражи" th={casesTh} remove={removeCase} condition={condition}/>
  )
}

export default Cases;