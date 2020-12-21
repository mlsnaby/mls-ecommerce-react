import logo from "./images/logo.PNG"
import "./Nav.css"
import {useState} from "react"
import {MDBIcon} from "mdbreact"
function Nav() {
const [menu, setMenu] = useState(false);
  
    return (
        <div className="nav-bar"  >
                <MDBIcon icon={menu === false ? "bars" : "times" }
                onClick={() =>{
                    setMenu(!menu);
                }}
                />
                <img  src={logo} className="logo"
                    alt="logo "
                />

                <div className="links">
                    <ul>
                        <li>Acceuil</li>
                        <li>Hommes</li>
                        <li>Femmes</li>
                        <li>Enfants</li>
                        <li>Contacts</li>
                    </ul>

                </div>
                <div className="actions ">

                    <MDBIcon icon="search" />
                    <MDBIcon icon="user" />
                    <MDBIcon icon="shopping-cart" />

                </div>

               {
                   menu?

                   <div className="menu-mobile">
                   <ul>
                           <li>Acceuil</li>
                           <li>Hommes</li>
                           <li>Femmes</li>
                           <li>Enfants</li>
                           <li>Contacts</li>
                       </ul>
                   </div>

                   : null
               }
        </div>
    );
  }
  

  export default Nav;
  