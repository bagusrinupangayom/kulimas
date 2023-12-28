import { Container, Row, Col, Image } from 'react-bootstrap';
import projectHome1 from '../assets/img/projecthome1.avif';
import projectHome2 from '../assets/img/projecthome2.avif';
import projectHome3 from '../assets/img/projecthome3.avif';

const HomeComp = () => {
    return (
        <>
            <div className="fHomeBg">
                <Container>
                    <div className="fHomeHeader text-center">
                        <h1>BERSAMA KULIMAS PASTI BERKUALITAS</h1>
                    </div>

                    <div className="mt-5 pt-3 text-center">
                        <a href="/#" className="whiteBtn">
                            Get a Quote
                        </a>
                    </div>
                </Container>
            </div>

            <section className="homeAbout">
                <Container>
                    <div className="text-center">
                        <h1>ABOUT</h1>
                        <h1>KULIMAS</h1>
                    </div>

                    <div className="text-center mt-4">
                        <p>
                            Kulimas is a construction company with a long-standing reputation for excellence. We specialize in commercial property construction but have a small portfolio of industrial
                            and residential properties. Currently, we cater to the German market, but are looking to expand internationally.
                        </p>
                    </div>

                    <div className="mt-5 pt-3 text-center">
                        <a href="/#" className="blackBtn">
                            Read More
                        </a>
                    </div>
                </Container>
            </section>

            <section className="homeProjects">
                <Container>
                    <div className="text-center mb-4">
                        <h1>PROJECTS</h1>
                    </div>

                    <div className="homeProjectsImg mt-5 text-center">
                        <Row>
                            <Col sm={4}>
                                <Image src={projectHome1} fluid />

                                <div className="mt-3 mb-4">
                                    <p>Huawei HQ, Frankfurt</p>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <Image src={projectHome2} fluid />

                                <div className="mt-3 mb-4">
                                    <p>Rhein-Main Conference Centre, Wiesbaden</p>
                                </div>
                            </Col>
                            <Col sm={4}>
                                <Image src={projectHome3} fluid />

                                <div className="mt-3 ">
                                    <p>Danske Bank Offices, Hamburg</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="mt-5 text-center">
                        <a href="/#" className="whiteBtn">
                            See More
                        </a>
                    </div>
                </Container>
            </section>

            <section className="homeServices">
                <Container>
                    <Row>
                        <Col sm={6} className="homeServicesMobile">
                            <div className="mb-4">
                                <h1>SERVICES</h1>
                            </div>

                            <div className="mt-4">
                                <p>
                                    Kulimas specializes in commercial construction, but over the years we have undertaken a number of projects in industrial and residential property construction. We
                                    are a flexible team with expertise in all aspects of construction work.
                                </p>
                            </div>

                            <div className="mt-5 mb-5">
                                <a href="/#" className="blackBtn">
                                    More Services
                                </a>
                            </div>
                        </Col>

                        <Col sm={6} className="servicesOrder">
                            <h1 className="servicesOrderHome mb-5">
                                01 <span className="servicesListHome">Commercial Construction</span>
                            </h1>

                            <h1 className="servicesOrderHome mb-5">
                                02 <span className="servicesListHome">Industrial Construction</span>
                            </h1>

                            <h1 className="servicesOrderHome">
                                03 <span className="servicesListHome">Residential Construction</span>
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="careersHome">
                <Container>
                    <Row>
                        <Col sm={6}></Col>

                        <Col sm={6}>
                            <div className="mb-4">
                                <h1>CAREERS</h1>
                            </div>

                            <div className="mt-4">
                                <p>
                                    We are always looking for skilled construction professionals to join our team. If you think you'd make a good fit, have a look at our open positions, or leave an
                                    unsolicited application.
                                </p>
                            </div>

                            <div className="mt-5 mb-5">
                                <a href="/#" className="blackBtn">
                                    Open Positions
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomeComp;
