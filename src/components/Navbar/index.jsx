import React , { useState}from "react";
import "./index.css";
import icon from "../../assets/images/icon.png";
import bell from "../../assets/images/bell-white.svg"
import plus from "../../assets/images/plus-white.svg"

function index () {
    
  
  // const [input , setInput]=useState("")

  //    const onSearchSubmit = (e)=>{
  //     e.preventDefault()
  //     props.onSubmit(input)
    
     
  //    }


  return (
    <div className="header">
      <div className="box-1">
        <div className="icon">
          <img src={icon} alt="" width={"30px"}/>
        </div>
        <div className="input ">
          <form>
          <input type="text " />
           
          </form>
         
        </div>
        <div className="ul">
          <ul className="ul-1">
            <li>Pull requests</li>
            <li>Issues</li>
            <li>marketplace</li>
            <li>Explore</li>
          </ul>
        </div>
      </div>
      <div className="box-2">
        <div className="right-icons">
            <img src={bell} alt="" />
            <img src={plus} alt="" />
            
      
        </div>
      </div>
    </div>
  );
};

export default index;
