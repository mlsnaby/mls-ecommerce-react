import React from 'react'
import "./slider.css"

import slider from "../../images/slider.jpg";

 function Slider() {
    return (
        <div>

            
                {/*CATEGORIE*/}

                <div className="global-cat">
                        <div className="cat">
                            ALL CATEGORIES
                        </div>
                    <div className="categorie">
                        <ul>
                            <li><a href="">Telephone & Accessoires</a></li>
                            <li><a href="">Electronics & Cameras</a></li>
                            <li><a href="">Sports & Outdoors</a></li>
                            <li><a href="">Health & Beauty</a></li>
                            <li><a href="">Shoes & Accessories</a></li>
                            <li><a href="">Home&Garden |Lighting</a></li>
                            <li><a href="">Toys&Gifts |Baby&Kids</a></li>
                            <li><a href="">Telephone & Accessoires</a></li>
                            <li><a href="">Electronics & Cameras</a></li>
                            <li><a href="">Sports & Outdoors</a></li>
                            <li><a href="">Health & Beauty</a></li>
                            <li><a href="">Shoes & Accessories</a></li>
                            <li><a href="">Home&Garden |Lighting</a></li>
                            <li><a href="">Toys&Gifts |Baby&Kids</a></li>
                        </ul>
                    </div>
                </div>

                {/*image slider*/ }

            

                <div className="slide-global">
                    <div className="">
                        <img src={slider} alt="slider"/>
                    </div>
                </div>
                <div className="slide-bar">
                    <div className="">
                        <img src={slider} alt="slider"/>
                    </div>
                </div>

                {/*contenu right*/}
                
                <div className="ok">
                    
                    <div className="contenu-right-1">
                        
                        <div className="contenu-right-fex">
                            texte
                        </div>
                    </div>
                    <div className="contenu-right-2">
                        
                        <div className="contenu-right-fex">
                            texte
                        </div>
                    </div>
                    <div className="contenu-right-3">
                        
                        <div className="contenu-right-fex">
                            texte
                        </div>
                    </div>

                {/*contenu right*/}
            <div className="ok">
                <div className="contenu-right-1">
                    <div className="contenu-right-fex">
                        texte
                    </div>
                </div>
                <div className="contenu-right-2">
                    <div className="contenu-right-fex">
                        texte
                    </div>
                </div>
                <div className="contenu-right-3">
                    <div className="contenu-right-fex">
                        texte
                    </div>
                </div>
            </div>

            </div>


            
        </div>
    )
}

export default Slider
