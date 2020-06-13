import React from 'react';
import Title from './Title';
import {ProductConsumer} from '../Context/Context';
import {Link } from 'react-router-dom';
import {scroller} from 'react-scroll';



export default function Contact() {


    const scrollToElement=(element)=>{
        scroller.scrollTo(element,{
    
         duration:1500,
         delay:100,
         smooth:true,
         offset:-80
    
    
        })
    }




    return (
<ProductConsumer>
{value=>{
    const {setClass}=value;
    return(
    <React.Fragment>
        <Title  title="Contact" color={setClass?"#fefefe":"gray"} /> 
<div className={setClass?"dark-mode-blue contact":"contact"}>
<div className="container">
    <div className="contact-center">
        <div className="contact-links">
            <h3 className={setClass?"dark-mode-orange ":" "}>Links</h3> 
            <div className="links-items">
               {value.links.map(item=>{
                   return(
                       <li key={item.id}>
                       <Link to="/" onClick={()=>scrollToElement(item.scrolling)}>{item.link}</Link>

                       </li>
                   )
               })} 
            </div>

        </div>

        <div className="contact-media">
            <h3 className={setClass?"dark-mode-orange ":" "}>Media</h3>
            <div className="media-items">
                <li><a href="https://www.youtube.com/channel/UCarYD6WjjdXRqBZhPF9ppHQ/videos?view_as=subscriber" target="_blank" rel="noopener noreeferrer" ><i className="fab fa-youtube-square"></i>Youtube</a></li>

                <li> <a href="https://www.youtube.com/channel/UCarYD6WjjdXRqBZhPF9ppHQ/videos?view_as=subscriber" target="_blank" rel="noopener noreeferrer" ><i className="fab fa-linkedin"></i>Linkedin</a>
                </li>

                <li> <a href="https://www.youtube.com/channel/UCarYD6WjjdXRqBZhPF9ppHQ/videos?view_as=subscriber" target="_blank" rel="noopener noreeferrer" ><i className="fab fa-facebook-square"></i>Facebook</a></li>

                <li> <a href="https://www.youtube.com/channel/UCarYD6WjjdXRqBZhPF9ppHQ/videos?view_as=subscriber" target="_blank" rel="noopener noreeferrer" ><i className="fab fa-twitter"></i>Twitter</a></li>
            </div>
        </div>
    </div>
</div>
</div>

<div className={setClass?"dark-mode-blue created":"created"}>
    <div className="container">
            <p>Designed and created by Codito {year()>2020 ?"2019 - ":""}{year()}</p>
    </div>
</div>
    </React.Fragment>
    )
}}
</ProductConsumer>
    )
}

// year function
let year = ()=>{
    let year = new Date().getFullYear();
    return year
}