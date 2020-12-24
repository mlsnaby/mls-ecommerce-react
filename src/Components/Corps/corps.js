import React, { useEffect, useState } from 'react'
import {MDBIcon} from "mdbreact"  
import p1 from "../../images/p1.jpg"

import data from "../Produits/produits";
import "./corps.css"
import axios from 'axios';

function Corps() {

    /*const [produits, setProduit]= useState([])
    const getProducts = async ()=>{
        const {data} = await axios.get("https://gboki.com/products/all")
        setProduit(data.products)
        console.log(data.products)
    }
    useEffect(() => {
        getProducts();

    }, [])*/


    return (
        <div className="ok">
            
              <div className="corps">
                    <div className="corps-fex">
                        <img src={p1} alt="produits" />
                    </div>
                    <div className="corps-fex">
                        <img src={p1} alt="produits" />
                    </div>
                    <div className="corps-fex">
                        <img src={p1} alt="produits" />
                    </div>
                    <div className="corps-fex">
                        <img src={p1} alt="produits" />
                    </div>
                    <div className="corps-fex">
                        <img src={p1} alt="produits" />
                    </div>
                    <div className="corps-fex">
                        <img src={p1} alt="produits" />
                    </div>
                    <div className="corps-fex">
                        <img src={p1} alt="produits" />
                    </div>
                    <div className="corps-fex">
                        <img src={p1} alt="produits" />
                    </div>
                   
                </div>
                
                         {/**contenu2 */}
                    <section>

                    <div className="titre-arrivage">
                            <strong>Nouvel Arrivage </strong>
                            <p>Nous vous fournissons un nouveau modele </p>
                         </div>

                        <div class="corps-container">
                        {/**listed des produits */}

                        {
                             /*produits.map((produit)=>(*/
                            data.produits.map((produit)=>(

                                <div className="corps-box">

                                <div key={produit._id} className="corps-image">

                                    <a href={produit._id} className="add-cart">
                                    
                                    <MDBIcon icon="shopping-baskets" />
                                    </a>
                                    <img src={produit.image} alt="produits" />
                                </div>
                                <div className="corps-details">

                                    <a  href={`/produit/${produit._id}`}  href="#" class="p-name">{produit.nom}</a>
                                    <span class="p-price">{produit.price}CFA</span>

                                    <div className="star-icon">
                                        <MDBIcon icon="star"  />
                                        <MDBIcon icon="star" />
                                        <MDBIcon icon="star" />
                                    </div>
                                </div>
                            </div>
                            ))
                        }

                        </div>
                    </section>
                     
                     {/**contenu2 */}

                     <section>
                        <div className="titre-arrivage">
                            <strong>Future Arrivage</strong>
                            <p>Nous vous fournissons un nouveau modele </p>
                         </div>

                            <div class="corps-container">
                        {/**listed des produits contenu 2 */}

                        {
                            data.produits.map((produit)=>(

                                <div className="corps-box">

                                <div key={produit._id} className="corps-image">

                                    <a href={`${produit._id}`} className="add-cart">
                                    
                                    <MDBIcon icon="shopping-baskets" />
                                    </a>
                                    <img src={`${produit.image}`} alt="produits" />
                                </div>
                                <div className="corps-details">

                                    <a  href={`/produit/${produit._id}`}  href="#" class="p-name">{produit.nom}</a>
                                    <span class="p-price">{produit.price}CFA</span>

                                    <div className="star-icon">
                                        <MDBIcon icon="star"  />
                                        <MDBIcon icon="star" />
                                        <MDBIcon icon="star" />
                                    </div>
                                </div>
                            </div>
                            ))
                        }

                        </div>

                     </section>
                     

                



        </div>
    )
}

export default Corps