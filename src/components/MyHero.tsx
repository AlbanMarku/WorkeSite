import { Button, Container } from 'react-bootstrap';
import hero from "../assets/hero.jpg";
import logo from "../assets/logo.png";
import "../styles/myHeroStyle.css";
import MyNavbar from './MyNavbar';

function MyHero()
{
    return (
        //return a large hero image with content in the middle including a header, logo, and a button
        <div className='main-container' style={{ backgroundImage: `url(${hero})` }}>
            <MyNavbar />
            <Container fluid className="hero-container" >
                {/* circle logo with a header beneath and then a button benath saying view more*/}
                <img src={logo} alt="logo" className="hero-logo" />
                <h1 className="hero-header">Welcome to My Website</h1>
                <Button variant="outline-light" size='lg' onClick={() => { }}>View More</Button>
            </Container>
        </div>
    );
}

export default MyHero;

