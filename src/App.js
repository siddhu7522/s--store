import React, { useEffect, useState } from "react"
import './App.css';
import Header from "./Header"
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout"
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase"
function App() {
  const [{user},dispatch]=useStateValue();
useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      //user logged in
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }
    else{
      //user logged out
      dispatch({
        type:"SET_USER",
        user:null,
      });
    }
  })
  return()=>{
    //clean up operations
    unsubscribe();
  }
},[])
console.log("user is",user);
  return (
    <Router>
 <div className="App">
     <Switch>
       <Route path="/"exact>
         <Header/>
        <Home/>
       </Route>
       <Route path="/login">
         <Login/>
       </Route>
       <Route path="/checkout">
       
        <Header/>
        <Checkout/>
       </Route>
     </Switch>
     </div>
    </Router>
   
  );
}

export default App;
