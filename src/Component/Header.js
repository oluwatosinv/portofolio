import React   from "react";
import { Container, Row, Col } from 'reactstrap';
import TextTransition, { presets } from "react-text-transition";
import LottieAnimation from "./Lottie";
import code from '../Animation/TOSIN ART.json'


const Header = () => {

    const TEXTS = [
        "Oluwatosin Faboade",
        "a Frontend developer",
        "Tree",
        "Color"
      ];

      const [index, setIndex] = React.useState(0);

        React.useEffect(() => {
            const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            3000 // every 3 seconds
            );
        return () => clearTimeout(intervalId);
      }, []);
    
    return (
        <container className='header'>
            <Row>
            <Col lg="6">
                <h1>I'm  </h1>
                <h1 className='headline'>
                
                    <TextTransition
                        text={ TEXTS[index % TEXTS.length] }
                        springConfig={ presets.stiff }
                    />
                </h1>
            </Col>
            <Col lg="6">
             <LottieAnimation lotti={code}  />
            </Col>
            </Row>
        </container>
      );
}
 
export default Header;