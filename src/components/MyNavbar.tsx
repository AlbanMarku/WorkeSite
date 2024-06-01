import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../assets/logo.png";

function MyNavbar()
{
    return (
        <div className='navbar-container'>
            <Navbar expand="md" style={{backgroundColor: "#edd33e"}}>
            <Container>
                {/* Brand */}
                <Navbar.Brand href="#home">
                    <img
                        src={logo} // Your logo image source
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="My Brand Logo"
                    />
                    {' My Brand'}
                </Navbar.Brand>

                {/* Toggle Button for Mobile */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#services">Services</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
};

export default MyNavbar;
