import React from "react";
import "./main.scss";
import { Routes, Route } from "react-router-dom";
import FormLogin from "../form-login/formLogin";
import FormNewCase from "../form-newCase/formNewCase";
import Cases from "../cases/cases";
import CaseDetail from "../caseDetail/caseDetail";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route exact path={"/"} element={
          <div className="main-page">
            <div className="content">
              <h1 className="title">Потеряли велосипед?</h1>
              <h2 className="subtitle">Мы поможем найти!</h2>
              <p className="text">
                В последнее время участились случаи кражи велосипедов нашего велопроката "Велострана". 
                Как возможное решение проблемы мы хотим ввести учет этих случаев и отслеживать прогресс.
                Просим вас оставить сообщение об известных вам случаях в специально отведенной форме, расположенной в шапке сайта.
              </p>
            </div>
          </div>
          
        } />
        <Route path={"/login"} element={<FormLogin />} />
        <Route path={"/new-case"} element={<FormNewCase />} />
        <Route path={"/cases"} element={<Cases />} />
        <Route path={"/cases"} element={<Cases />} />
        <Route path={"/cases/caseId"} element={<CaseDetail />} />
      </Routes>
    </main>
  )
}

export default Main;