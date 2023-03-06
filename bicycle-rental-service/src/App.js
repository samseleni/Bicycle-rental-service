import './App.scss';
import React from 'react';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
