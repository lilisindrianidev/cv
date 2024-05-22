import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "../screens/home.js"

class Router extends Component{

  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>

      </BrowserRouter>
    )
  }
}
export default Router