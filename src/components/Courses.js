import React from 'react';
import Title from './Title';
import {ProductConsumer} from '../Context/Context';





export default function Courses() {
    return (
<ProductConsumer>
{value=>{
      const {setClass}=value;
    return(
        <div className="courses">
            <div className="container">
                <Title title="Courses" color={setClass?"#fefefe":"gray"} />

                <div className="courses-center">
                    {value.courses.map(item=>{
                        return(
                            <div className="single-course" key={item.id}>
                            <iframe src={item.iframe} frameborder="0" allowFullScreen></iframe>
                        <p>{item.title}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}}
</ProductConsumer>
    )
}
