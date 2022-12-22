import React from "react";
import "./footer.scss";
import "../header/header.scss";
import Logo from "../logo/logo";
import Phone from "../../assets/phone.svg";
import Telegram from "../../assets/telegram.svg";
import Vk from "../../assets/vk.svg";
import Email from "../../assets/email.svg";
import Whatsapp from "../../assets/whatsapp.svg";

const Footer = () => {
  return (
    <div className="footer header">
      <Logo />
      <div className="contacts">
        <span>Контакты:</span>
        <a href="#"><img src={Phone}/></a>
        <a href="#"><img src={Email}/></a>
        <a href="#"><img src={Telegram}/></a>
        <a href="#"><img src={Vk}/></a>
        <a href="#"><img src={Whatsapp}/></a>
      </div>
    </div>
  )
}

export default Footer;