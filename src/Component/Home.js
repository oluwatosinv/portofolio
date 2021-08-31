import Header from "./Header";
import Nav2 from "./Nav2";
import Projects from "./Projects";
import Form from "./Form";

const Home = () => {
    return (
        <div>
            <div className='header-top'>
                <Nav2 />
                <Header />


            </div>
            <Projects />
            <Form />

        </div>

    );
}

export default Home;