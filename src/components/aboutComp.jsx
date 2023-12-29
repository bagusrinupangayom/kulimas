import { Container, Row, Col, Image } from 'react-bootstrap';
import bgAbout2 from '../assets/img/bgabout2.avif';
import bgAbout3 from '../assets/img/bgabout3.avif';

const AboutComp = () => {
    return (
        <>
            <div className="bgAbout">
                <Container>
                    <div className="fAboutHeader text-center">
                        <h1>ABOUT</h1>
                    </div>
                </Container>
            </div>

            <section>
                <Container>
                    <Row>
                        <Col sm={4}>
                            <h3>Kulimas services and history</h3>
                        </Col>

                        <Col sm={4}>
                            <p>
                                Stornoway started as a statement against the sloppy professional standards that dominated the field of construction services 20 years ago. We wanted to set a new, high
                                standard and work as consultants, solving our clients' problems.
                            </p>
                        </Col>

                        <Col sm={4}>
                            <p>
                                The company quickly grew and cemented itself as the new golden standard in commercial construction. Today we continue to build on that legacy and strive for excellence
                                at everything we do.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={8}>
                            <Image src={bgAbout2} className="mb-3" fluid />
                        </Col>

                        <Col sm={4}>
                            <Image src={bgAbout3} fluid />
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4}>
                            <h3>Stornoway people and culture</h3>
                        </Col>

                        <Col sm={4}>
                            <p>
                                Our people are what make us unique. Rather than outsourcing our construction engineers from questionable outsourcing establishments, we provide them with an environment
                                that supports professional growth.
                            </p>
                        </Col>

                        <Col sm={4}>
                            <p>
                                At Stornoway, we are strong believers in giving our employees a voice. Our teams are put together with the help of our resident psychologist to ensure maximum
                                productivity and engagement.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AboutComp;
