import { Card, Col, Container, Row } from "react-bootstrap";
import "../styles/myServicesStyle.css";

function MyServices()
{
    return (
        //return a  grid of services item. a service item is a card witth an img, title, and description. grid is 2x2
        <Container className="card-container">
            <Row>
                <Col sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center mb-3">
                    <CardComp />
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center mb-3">
                    <CardComp />
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center mb-3">
                    <CardComp />
                </Col>
                <Col sm={12} md={6} lg={6} xl={6} className="d-flex justify-content-center mb-3">
                    <CardComp />
                </Col>
            </Row>
        </Container>
    );
}


function CardComp()
{
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://picsum.photos/200" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MyServices;
