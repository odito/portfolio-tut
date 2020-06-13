import React from 'react';
import headerImg from '../images/logo.jpg';
import {ProductConsumer} from '../Context/Context';
import Bounce from 'react-reveal/Bounce';

export default function Header() {
    return (
<ProductConsumer>
    {(value)=>{
        const {setClass, darkMode}= value;
        return(
           <section className="header">
            <img src={headerImg} alt="header"/>
            <div className="inside-container">
                <div className="texts">

                    <Bounce right delay={500} duration={2000} cascade>
                    <h1>Hello i am Odysseas Kolas.</h1>
                    </Bounce>
                   
 

                    <Bounce left delay={2000} duration={2000} cascade>
                    <h2>Electrician engineer, web developer</h2>
                    </Bounce>

                 
                    <Bounce bottom delay={4000} duration={2000} >
                    <a href="mailto:odkolas@gmail.com" className=" contactBtn">Contact</a>
                    </Bounce>

                

                  
                </div>
            </div>

            {/* dark mode button */}
              <div className="btnMode">
                  <div className={setClass?"btnIcons newBtnIcons":"btnIcons"} onClick={darkMode}>
                      <i className="fas fa-moon"></i>
                      <div className={setClass?"newBall ball":"ball"}></div>
                      <i className="fas fa-sun"></i>
                  </div>
              </div>

              {/*end of dark mode button */}




           </section> 
        )
    }}
</ProductConsumer>
    )
}
