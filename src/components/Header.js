import { useState } from "react";
import { NavLink } from "react-router-dom"
import WbTwilightIcon from '@mui/icons-material/WbTwilight';

export default function Header() {
   return (
      <div className="">
         {/* header nonelink navbar-light fixed-top */}
         <nav className="navbar navbar-expand-lg ">
         <div className="container-header">
            <WbTwilightIcon className="header-logo"/>
            <NavLink to="/" className="navbar-brand" href="#">FML 家事服務</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
               <ul className="navbar-nav ms-auto">
               <li className="nav-item active">
               <NavLink to="/Index" className="nav-link" href="#">服務項目</NavLink>
               </li>
               <li className="nav-item">
               <NavLink to="/products/category/室內清潔" className="nav-link" href="#">室內清潔</NavLink>
               </li>
               <li className="nav-item">
               <NavLink to="/products/category/居家收納" className="nav-link" href="#">居家收納</NavLink>
               </li>
               <li className="nav-item">
               <NavLink to="/products/category/除塵瞞服務" className="nav-link" href="#">除塵瞞服務</NavLink>
               </li>
               <li className="nav-item">
               <NavLink to="/products/category/抓漏堵塞" className="nav-link" href="#">抓漏堵塞</NavLink>
               </li>
               <li className="nav-item">
               <NavLink to="/products/category/門窗裝修" className="nav-link" href="#">門窗裝修</NavLink>
               </li>
               <li className="nav-item">
               <NavLink to="/Feedback" className="nav-link" href="#">意見回饋</NavLink>
               </li>
               </ul>
            </div>
         </div>
         </nav>


         {/* <Link to="/">
            <h1 className="header-title">
               NORDIC NEST Shopping Cart
            </h1>
         </Link>
         <p
            className="header-slogan">
            An example made by Create-React-App.
         </p>
         <hr className="hr-header-line" /> */}
      </div>
   );
}