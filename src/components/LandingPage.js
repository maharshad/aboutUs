// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css';

const data = [
    { id: 1, title: 'Our Story', description: 'Our story is that.............' },
    { id: 2, title: 'Found and Vision', description: 'Found and vision is that.............' },
    { id: 3, title: 'Milestone', description: 'Milestone is that.............' },
    { id: 4, title: 'Career', description: 'Career is that.............' },
  ];




const LandingPage = () => {
  return (
    <div className="landing-page">
         
      <div className="grey-container">
      
        <h2 className="about">ABOUT US</h2>
        <p className="large-text">Build your body any way you want,<br></br> but don't skip training</p>
        <div className="small-para">
        <h3>10x </h3>
         <p>you will progress upto<br></br> 10x faster</p></div>
         {/* <div className="para">
             <p>You will train with us even when you have a bad day,
                 bad weather, bad mood. We are<br></br>here
                  to rejoice and grieve together! Founded in 2014. 
                  Spartans has been a vital part of the<br></br>local
                   firness landscape for 9 years. Our journey began with 
                   a simple vision to create a<br></br>motivating space
                    where people transform their lives through fitness.</p></div> */}
         {data.map((item) => (
          <div key={item.id} className="heading">
            <div>
            <h2>{item.title}</h2>
              
            </div>
            <div>
            <p>{item.description}</p>
            </div>
          </div>
        ))}
       
         
      
                   
      
        </div>
      </div>
  
  );
};

export default LandingPage;
