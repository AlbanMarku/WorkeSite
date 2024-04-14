import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from "../assets/logo.png";

const MyNavbar = () =>
{
    return (
        <Navbar bg="dark" variant="dark" expand="md">
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
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavbar;
