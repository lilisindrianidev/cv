import "../assets/scss/color.scss"
import React, { setState } from "react";

const colorDefaultProps={
  color: 'RED'
}
const Color =(props=colorDefaultProps)=>{
 return(
  <div className={`${props.color}`}>

  </div>
 )
}
export default Color