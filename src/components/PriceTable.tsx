import { Col, Container } from "react-bootstrap";

function PriceTable()
{
    return (
        <Container id="pricing" className="tableContainer">
            <Col sm={12} md={12} lg={6}>
                <table className="table custom-table">
                    <thead>
                        <tr>
                            <th className="text-center" style={{verticalAlign: "middle"}}>Appointments</th>
                            <th className="text-center" style={{verticalAlign: "middle"}}>Monday to Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-center">First Hour</td>
                            <td className="text-center">£55</td>
                        </tr>
                        <tr>
                            <td className="text-center">Subsequent</td>
                            <td className="text-center">£30</td>
                        </tr>
                        <tr>
                            <td className="text-center">Half Day 4h</td>
                            <td className="text-center">£130</td>
                        </tr>
                        <tr>
                            <td className="text-center">Full Day 8h</td>
                            <td className="text-center">£240</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
            <Col sm={12} md={12} lg={6} className="text-center mt-3">
                <p>Terms of Service (TOS)</p>
            </Col>
        </Container>
    );
}

export default PriceTable;