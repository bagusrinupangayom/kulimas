import { Col, Container, Row } from 'react-bootstrap';

const FooterComp = () => {
    return (
        <>
            <div className="myFooter">
                <Container>
                    <Row>
                        <Col sm={9}>
                            <div className="mb-4 headerFooter">
                                <h1>KULIMAS</h1>
                            </div>
                        </Col>

                        <Col sm={3}>
                            <div className="textFooter mb-4">
                                <div>Raden Intan Street 6</div>
                                <div>Bandar Lampung, Indonesia</div>
                            </div>

                            <div className="textFooter">
                                <div>+0898765432101</div>
                                <div>info@kulimas.com</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default FooterComp;
