import React from "react";
import { Link } from "react-router-dom";
import Img1 from './../image2.jpg';
import './landingPage.css';
const LandingPage = () => {
    return (
        <div className="bg1">
            <nav class="navbar">
                <div class="head-navbar">
                    <div class="logo"><a href="#">ShopingMall<i class="fa fa-cart-arrow-down"></i></a></div>
                    <ul class="menu">
                        <li><a href="#home" class="menu-btn">Home</a></li>
                        <li><a href="#about" class="menu-btn">About</a></li>
                        <li><a href="#contact" class="menu-btn">Contact</a></li>
                    </ul>
                </div>

            </nav>
            <div className="page">

                <h1>Welcome to Shoping<span>Mall</span></h1>

                <div className="About">
                     
                    <p>
                       <h2>Hello Everyone</h2>
                        loremcjbdef jenfkjnkefn jenfjrjnfre wfjwebfbkjewb c<br />
                        eifjiefn jrhfinroenf ihireogfner vrijrnfn re fernjfoirnfr<br />
                        kifheruhnfjnrkjnfkjrenkjnerkj njrnfjrnjfn refnrejnf jrenfurenf<br />
                        hfunerkjfnjenfkjne jnerjkfnkrenfr njunrjnfkjrenf  junrknfkjrn<br />
                        jfukhrbfbrkfbrbfkrjf knfkjrnfjnkf refjnfkjnerk vrjk</p>
                    <img src={Img1} />
                </div>
                <div className="button">
                    <Link to="/signup"> <button type="button" class="btn btn-outline-light" >Get Strated</button></Link>
                </div>
            </div>
        </div>
    );
}
export default LandingPage;