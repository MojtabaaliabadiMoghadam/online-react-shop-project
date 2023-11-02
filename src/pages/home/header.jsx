import { useState } from "react";
import logo1 from "./image/s1.jpg";
import logo2 from "./image/s2.jpg";
import logo3 from "./image/s3.jpg";
const Header = () => {
    let slideIndex = 1 ;
    function setSlide(input , index){
      slideIndex = index
     let item = document.querySelector(`#${input}`)
     let slides = [...document.querySelector('.slides').children]
     slides.forEach((e)=>{
      e.classList.remove('active');
     })
     item.classList.add('active');
     }
     setInterval(()=>{
       slideIndex += 1;
       if(slideIndex === 4 ){
         slideIndex = 1;
       }
       setSlide(`slide-${slideIndex}` , slideIndex)
     },4000)


     function handleclick(){
      localStorage.removeItem('token')
     }
  return (
    <>
      <header>
        <nav>
          <div className="nav-right">
            <a href="">
              <i className="far fa-user"></i>
            </a>
            <a href="/buy">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <a href="">
              <i className="fas fa-home"></i>
            </a>
          </div>
          <div className="nav-left">
            <div className="register-login-btn">
              <i className="far fa-user"></i>
              <a onClick={handleclick} href="/login">ثبت نام/ ورود</a>
            </div>
          </div>
        </nav>
        <section className="slider">
          <div className="slides">
            <div className="item active" id="slide-1">
              <img src={logo1} alt="" />
              <span>از اهنگ گوش دادن لذت ببر</span>
            </div>
            <div className="item " id="slide-2">
              <img src={logo2} alt="" />
              <span style={{ color: "wheat" }}>لذت ببر از اینده</span>
            </div>
            <div className="item " id="slide-3">
              <img src={logo3} alt="" />
              <span> در لحظه زندگی کن</span>
            </div>
          </div>
          <div className="button">
            <i
              onClick={() => {
                setSlide("slide-1", 1);
              }}
              className="far fa-circle"
            ></i>
            <i
              onClick={() => {
                setSlide("slide-2", 2);
              }}
              className="far fa-circle"
            ></i>
            <i
              onClick={() => {
                setSlide("slide-3", 3);
              }}
              className="far fa-circle"
            ></i>
          </div>
        </section>
      </header>
    </>
  );

};

export default Header;
