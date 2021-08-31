import React from 'react'
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Container
} from 'reactstrap';

const Projects = () => {
    return (
        <Container>
            <h1 className='project-title'>SELECTED PROJECTS</h1>
            <div className="project-grid">
                <div className="project">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Detrix Studios</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Frontend / HTML / CSS / React js</CardSubtitle>
                        </CardBody>
                        <img width="100%" src="https://res.cloudinary.com/tosin/image/upload/v1630429283/HNG/screencapture-detrixstudios-2021-08-20-21_08_20.png" alt="Detrix studios website" />
                        <CardBody>
                            <CardText>Designed and built a high performance website for a photography and videography Business

                            </CardText>
                            <CardLink href="https://www.detrixstudios.com/">Live</CardLink>
                            <CardLink href="https://github.com/oluwatosinv/detrix-studios">Github</CardLink>
                        </CardBody>
                    </Card>
                </div>
                <div className="project">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Weather App</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Frontend / HTML / CSS / React js</CardSubtitle>
                        </CardBody>
                        <img width="100%" src="https://res.cloudinary.com/tosin/image/upload/v1629489882/HNG/screencapture-weatherapp80-netlify-app-2021-07-05-11_06_13.png" alt="Weather App" />
                        <CardBody>
                            <CardText>Designed and built a high performance website to check the weather for any city in the world. You would love it!!!</CardText>
                            <CardLink href="https://weatherapp80.netlify.com/">Live</CardLink>
                            <CardLink href="https://github.com/oluwatosinv/weather_app">Github</CardLink>
                        </CardBody>
                    </Card>
                </div>
                <div className="project">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Flyo Document</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Frontend / HTML / CSS</CardSubtitle>
                        </CardBody>
                        <img width="100%" src="https://res.cloudinary.com/tosin/image/upload/v1629489735/HNG/screencapture-flyodocument-netlify-app-2021-08-17-21_02_29.png" alt="Flyo Document" />
                        <CardBody>
                            <CardText>Designed and built a high performance website for flyo document</CardText>
                            <CardLink href="https://flyodocument.netlify.app/">Live</CardLink>
                            <CardLink href="https://github.com/oluwatosinv/flyo-landingpage">Github</CardLink>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </Container>
    )
}

export default Projects
