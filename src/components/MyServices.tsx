import { Card, Col, Container, Row } from "react-bootstrap";
import "../styles/myServicesStyle.css";

function MyServices()
{
    return (
        //return a  grid of services item. a service item is a card witth an img, title, and description. grid is 2x2
        <Container className="card-container" style={{marginTop: 0}}>
            {/* header */}
            <h1 className="text-center" style={{color: "white", paddingTop: 20, paddingBottom: 20}}>Our Services</h1>
            <Row>
                <Col sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center mb-5">
                    <CardComp />
                </Col>
                <Col sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center mb-5">
                    <CardComp />
                </Col>
                <Col sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center mb-5">
                    <CardComp />
                </Col>
                <Col sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center mb-5">
                    <CardComp />
                </Col>
                <Col sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center mb-5">
                    <CardComp />
                </Col>
                <Col sm={12} md={4} lg={4} xl={4} className="d-flex justify-content-center mb-5">
                    <CardComp />
                </Col>
            </Row>
        </Container>
    );
}


function CardComp()
{
    return (
        <Card style={{ width: '18rem', backgroundColor: "#edd33e" }}>
            <Card.Img variant="top" src="https://picsum.photos/200" />
            <Card.Body style={{}}>
                <Card.Title style={{textAlign: "center"}}>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MyServices;
