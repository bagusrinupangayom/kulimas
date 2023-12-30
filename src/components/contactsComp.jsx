import { Col, Container, Row } from 'react-bootstrap';

const ContactComp = () => {
    return (
        <>
            <div className="bgContacts">
                <Container>
                    <div className="contactsHeader text-center">
                        <h1>CONTACTS</h1>
                    </div>
                </Container>
            </div>

            <section className="contentContacts">
                <Container>
                    <div className="mb-4">
                        <h1>We would love to hear from you!</h1>
                    </div>

                    <Row className="pt-4">
                        <Col sm={6} className="mb-4">
                            <div>
                                <h2>Visit us:</h2>
                                <div>Raden Intan Street 6</div>
                                <div>Bandar Lampung, Indonesia</div>
                            </div>
                        </Col>

                        <Col sm={6}>
                            <div>
                                <h2>Get in touch:</h2>
                                <div>Call us: +0898765432101</div>
                                <div>Write to us: info@kulimas.com</div>
                                <div>Career inquiries: career@kulimas.com</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ContactComp;
