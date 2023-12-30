import { Col, Container, Image, Row } from 'react-bootstrap';
import projectServices1 from '../assets/img/projectservices1.avif';
import projectServices2 from '../assets/img/projectservices2.avif';
import projectServices3 from '../assets/img/projectservices3.avif';
import projectServices4 from '../assets/img/projectservices4.avif';

const ServicesComp = () => {
    return (
        <>
            <div className="bgServicesFirst">
                <Container>
                    <div className="servicesHeader text-center">
                        <h1>SERVICES</h1>
                    </div>
                </Container>
            </div>

            <section>
                <Container>
                    <Row>
                        <div className="mb-5">
                            <Col sm={12}>
                                <h2>Stornoway specializes in commercial construction work but boasts a wide portfolio covering also industrial and residential projects.</h2>
                            </Col>
                        </div>
                    </Row>

                    <div className="mb-5">
                        <Row>
                            <Col sm={6}>
                                <Image src={projectServices1} alt="Kulimas Services 1" width="auto" fluid />
                            </Col>

                            <Col sm={6}>
                                <h1>01</h1>
                                <h2>Industrial Construction</h2>
                                <p>
                                    We believe that industrial construction doesn't have to be boring and an eyesore in the neighborhood. Instead, our in-house architecture team looks at how best to
                                    include or blend your industrial project into the surrounding area.
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="mb-5">
                        <Row>
                            <Col sm={6}>
                                <Image src={projectServices2} alt="Kulimas Services 2" width="auto" fluid />
                            </Col>

                            <Col sm={6}>
                                <h1>02</h1>
                                <h2>Industrial Construction</h2>
                                <p>
                                    We believe that industrial construction doesn't have to be boring and an eyesore in the neighborhood. Instead, our in-house architecture team looks at how best to
                                    include or blend your industrial project into the surrounding area.
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <div className="mb-5">
                        <Row>
                            <Col sm={6}>
                                <Image src={projectServices3} alt="Kulimas Services 3" width="503px" fluid />
                            </Col>

                            <Col sm={6}>
                                <h1>03</h1>
                                <h2>Industrial Construction</h2>
                                <p>
                                    We believe that industrial construction doesn't have to be boring and an eyesore in the neighborhood. Instead, our in-house architecture team looks at how best to
                                    include or blend your industrial project into the surrounding area.
                                </p>
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col sm={6}>
                            <Image src={projectServices4} alt="Kulimas Services 4" width="auto" fluid />
                        </Col>

                        <Col sm={6}>
                            <h1>04</h1>
                            <h2>Industrial Construction</h2>
                            <p>
                                We believe that industrial construction doesn't have to be boring and an eyesore in the neighborhood. Instead, our in-house architecture team looks at how best to
                                include or blend your industrial project into the surrounding area.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div className="bgServicesSecond">
                <Container>
                    <div className="servicesHeader text-center">
                        <h1>Contact Us</h1>
                    </div>

                    <div className="mt-4 pb-2 text-center">
                        <h3>Get in touch with our consultants today to make your construction dream a reality.</h3>
                    </div>

                    <div className="mt-5 mb-5 text-center">
                        <a href="/#" className="whiteBtn">
                            Contact Us
                        </a>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default ServicesComp;
