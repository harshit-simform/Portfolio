import React from 'react'
import "./Home.css"
import {  Typewriter } from 'react-simple-typewriter'
import Header from "../components/head/Header"

//import hero from "../hero/hero.png"
// import skill1 from "../hero/skill1.png"
// import skill2 from "../hero/skill2.png"
// import skill3 from "../hero/skill3.png"


const Home = () => {
  return (
    <>
      <Header/>
      <section className="hero" id= 'home'>
        <div className='conatiner f_flex top'>
            <div className="left top">
                <h3>WELCOME TO MY WORLD</h3>
                <h1>
                    Hi, I'm <span>Khushi Khandelwal</span>
                </h1>
                <h2>a 
                    <span><Typewriter
            words={[' Developer' , " Professional coder" ]}
            loop
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></span></h2>
          <p>As a problem solver who
loves facing challenges in my work, I'm excited to be at the deployment phase
of my career as a web developer. I'm passionate and ambitious about my work</p>
            <div className="hero_btn d_flex">
                <div className="col_1">
                   <h4>FIND ME</h4> 
                   <div className="button">
                    <button className="btn_shadow">
                        <i className='fab fa-facebook-f'></i>
                    </button>
                    <button className="btn_shadow">
                        <i className='fab fa-instagram'></i>
                    </button>
                    <button className="btn_shadow">
                        <i className='fab fa-linkedin-in'></i>
                    </button>
                   </div>
                </div>
                <div className="col_1">
                    <h4>BEST SKILL ON</h4>
                    {/* <button className="btn_shadow">
                        <img src={skill1} alt="" />
                    </button>
                    <button className="btn_shadow">
                        <img src={skill2} alt="" />
                    </button>
                    <button className="btn_shadow">
                        <img src={skill3} alt="" />
                    </button> */}
                </div>
            </div>
            </div>
            <div className="right">
              <div className="right_img">
                
              {/* <img src={hero} alt="" /> */}
              </div> 
            </div>
        </div>


      </section>
    </>
  )
}

export default Home;
