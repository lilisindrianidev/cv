import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllScreens  from "../screens/allScreens.js"

class Router extends Component{

  render(){
    return(
      <BrowserRouter  basename={window.location.pathname || '*'}>
        <Routes>
          <Route path="/" element={<AllScreens/>}/>
        </Routes>

      </BrowserRouter>
    )
  }
}
export default Router