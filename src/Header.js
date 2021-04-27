import React from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import {Link} from "react-router-dom"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {auth} from "./firebase"

import {useStateValue} from "./StateProvider";
function Header() {
   const [{basket,user}]=useStateValue();
   const login=()=>{
     if(user){
       auth.signOut();
     }

   }
    return (
        <div className="header">
            <Link to="/">
         <img src="https://wallpapercave.com/wp/wp2571379.jpg"></img>
         </Link>
           
            <div className="header__search">
            <input className="header__searchInput" type="text"></input>
           
            <SearchIcon className="header__searchIcon"/>
            </div>
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link" >
                    <div onClick={login} className="header__option">
                    <span className="line__1">Hello {user?.email}</span>
        
                         <span className="line__2">{user ?"Sign out" :" Sign in"}</span> 
                         </div>
                     
                      </Link>
                    
                      <Link to="/" className="header__link" to="/checkout">
                    <div className="header__option">
                       
                    <span>Your</span>
                    <span>Orders</span>
        
                        
              
                      </div>
                     
                     </Link>
                      <Link to="/checkout" className="header__link">
                    <div className="header__optionIcon">
                       
                   <ShoppingBasketIcon/>

        
                        <span className="header__basketCount">{basket?.length}</span>
              
                      </div>
                     
                     
                      
                     
                     
       

              </Link>
            
       </div>
        </div>
    )
}

export default Header
