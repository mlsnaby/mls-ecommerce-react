
import React from 'react'
import {MDBIcon} from "mdbreact"    
import logo from "../../images/logo.PNG"

import "./navbar.css"

 const Navbar = () => {
    return (
        <div className="nav">

                <div className="navigation">
                    <div className="logo">
                        <img src={logo}/>
                    </div>
                    <div className="rechercher">
                        <div className="search-input">
                            <input className="input-s" type="text" placeholder="Recherche" /> 
                        </div>
                        <MDBIcon className="search" icon="search" />
                    </div>
                    <div className="icon">
                        <MDBIcon icon="user-alt" />
                        <MDBIcon icon="heart" />
                        <MDBIcon icon="tasks" />
                        <MDBIcon icon="shopping-cart" />
                        <MDBIcon icon="angle-down" />
                    </div>

                </div>
                
                <div className="menu-2">
                    <ul>
                        <li><a href="">Accueil</a></li>
                        <li><a href="">Flash</a></li>
                        <li><a href="">Promotion</a></li>
                        <li><a href="">Boutique</a></li>
                        <li><a href="">Compte</a></li>
                        <li><a href="">Conseils</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>

                </div>


                
                
         </div>
    )
}

export default Navbar