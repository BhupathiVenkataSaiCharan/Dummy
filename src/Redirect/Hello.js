import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import BodyCard from "../Components/BodyCard";
import Restaurant from "./Restaurant";

class Hello extends Component{
    render(){
        return(
            <>
                 <a href="Restaurant.js"><BodyCard imgSrc="/assets/images/landimg1.png" /></a>href  Restaurant.js             
            </>
        );
    }
}

export default Hello;