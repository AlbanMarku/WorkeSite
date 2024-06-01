import { Col, Container, Form, Row } from "react-bootstrap";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useCallback, useState } from "react";
function ContactUs()
{
    const center = {
        lat: 51.472604385815956,
        lng: -0.24783336345521345
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB8WKS1JMMrLXqFXEhsHBGcMZxDY_0aNgM"
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map: any)
    {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
    }, []);

    const onUnmount = useCallback(function callback(map: any)
    {
        setMap(null);
    }, []);
    return (
        <Container fluid className="text-center">
                {/* Header */}
                <h1>Contact Us</h1>

                {/* Row of Contact Details */}
                <Container fluid={"md"}>
                    <Row className="justify-content-center" style={{}}>
                        <Col sm={12} md={4} lg={4}>
                            <h4>Address</h4>
                            <p>1234 Street Name</p>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <h4>Phone</h4>
                            <p>123-456-7890</p>
                        </Col>
                        <Col sm={12} md={4} lg={4}>
                            <h4>Email</h4>
                            <p>
                                <a href="mailto: albanmarku@outlook.com">
                                    albanmarku@outlook.com
                                </a>
                            </p>
                        </Col>
                    </Row>
                </Container>

                {/* Form and Google Map */}
                <Container fluid={"md"}>
                    <Row>
                        {/* Form */}
                        <Col sm={12} md={6} lg={6} className="d-flex flex-column justify-content-evenly">
                            <div style={{ height: "400px" }}>
                                <Form className="h-100 d-flex flex-column justify-content-evenly">
                                    <Form.Group controlId="formName">
                                        <Form.Control type="text" placeholder="Enter your name" />
                                    </Form.Group>
                                    <Form.Group controlId="formEmail">
                                        <Form.Control type="email" placeholder="Enter your email" />
                                    </Form.Group>
                                    <Form.Group controlId="formMessage">
                                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                                    </Form.Group>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </Form>
                            </div>
                        </Col>

                        {/* Map */}
                        <Col sm={12} md={6} lg={6}>
                            {isLoaded ? (
                                <GoogleMap
                                    mapContainerStyle={{ height: "400px", width: "100%" }}
                                    center={center}
                                    zoom={10}
                                    onLoad={onLoad}
                                    onUnmount={onUnmount}
                                >
                                    {/* Marker */}
                                    <Marker position={center} />
                                </GoogleMap>
                            ) : (
                                <div className="h-100 d-flex align-items-center justify-content-center">
                                    <h1>Map Loading...</h1>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>

        </Container>
    );
}

export default ContactUs;
