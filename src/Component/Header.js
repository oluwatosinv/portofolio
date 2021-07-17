import React   from "react";
import { Container, Row, Col } from 'reactstrap';
import TextTransition, { presets } from "react-text-transition";
import LottieAnimation from "./Lottie";
import code from '../Animation/TOSIN ART3.json';
import Technology from "./Technology";
import Technology2 from "./Technology2";


const Header = () => {

    
    
    return (
        <section className='header'>
            <div className='head'>
                <h1 className='heading-title'>Hey, I'm Oluwatosin,</h1>
                <p className='heading-text'>A Front-End Developer, who focuses on building web apps with great user experience</p>
                <Technology />
            </div>
            <div className='lottie'>
                <LottieAnimation lotti={code}  />
            </div>
            <Technology2 />
        </section>
      );
}
 
export default Header;