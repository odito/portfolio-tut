import React from 'react';
import Title from './Title';
import {ProductConsumer} from '../Context/Context';




export default function Skills() {
    return (
<ProductConsumer>
    {value=>{
           const {setClass}=value;
        return(
<div className="skills">
    <div className="container">
        <Title  title="Skills" color={setClass?"#fefefe":"gray"} />

        <div className="skills-center">

            <div className="skills-web">
                <h4 className={setClass?"dark-mode-orange":""}>web development skills</h4>

                {value.devSkills.map(item=>{
                    return(
                        <li key={item.id} className={setClass?"dark-mode-lightWhite":""}>
                            <h3>{item.title}</h3><span className={setClass?'newBar bar':'bar'}><span className={item.percent}><p>{item.number}</p></span></span>
                        </li>
                    )
                })}
            </div>

            <div className="skills-electric">
                <h4 className={setClass?"dark-mode-orange":""}>Electrical skills</h4>

                {value.electricSkills.map(item=>{
                    return(
                        <li key={item.id} className={setClass?"dark-mode-lightWhite":""}>
                            <h3>{item.title}</h3><span className={setClass?'newBar bar':'bar'}><span className={item.percent}><p>{item.number}</p></span></span>
                        </li>
                    )
                })}
            </div>

            


          
        </div>
    </div>  
</div>
        )
    }}
</ProductConsumer>
    )
}
