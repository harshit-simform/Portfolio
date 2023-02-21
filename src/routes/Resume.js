import React from 'react'
import Card from "../components/head/Resume/Card"
import ResumeApi from "../components/head/Resume/ResumeApi"
import "./Resume.css"



const Resume = () => {
  return (
    <>
      <section className="Resume" id='resume'>
        <div className="container">
            <div className="heading text-center">
                <h1>My Resume</h1>
            </div>
            <div className="content-section mtop d_flex">
                <div className="left">
                    <div className="heading">
                        <h4></h4>
                        <h1>Education</h1>
                    </div>
                    <div className='content'>
                {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}

                
              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4></h4>
                <h1>Professional Experience</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })}
              </div>    
                </div>
            </div>
        </div>

      </section>
    </>
  )
}

export default Resume
