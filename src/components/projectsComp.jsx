import { Col, Container, Image, Row } from 'react-bootstrap';
import firstProjectA from '../assets/img/projectsList1.avif';
import firstProjectB from '../assets/img/projectsList2.avif';
import secondProjectA from '../assets/img/projectsList3.avif';
import secondProjectB from '../assets/img/projectsList4.avif';
import thirdProjectA from '../assets/img/projectsList5.avif';
import thirdProjectB from '../assets/img/projectsList6.avif';

const ProjectsComp = () => {
    return (
        <>
            <div className="bgProjects">
                <Container>
                    <div className="projectsHeader text-center">
                        <h1>PROJECTS</h1>
                    </div>
                </Container>
            </div>

            <section>
                <Container>
                    <Row className="mb-3">
                        <Col sm={4} className="mb-3">
                            <h1>Huawei HQ, Frankfurt, 2017</h1>
                        </Col>

                        <Col sm={8}>
                            <p>
                                Huawei approached us and made it very clear from the start that their new European headquarters had to be both stylish and unconventional, while still keeping true to
                                their Asian heritage. Together with the client's in-house consultants and our resident architects we were able to complete this project within the estimated time frame.
                            </p>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col sm={4} className="mb-3">
                            <Image src={firstProjectA} fluid />
                        </Col>

                        <Col sm={8} className="mb-3">
                            <Image src={firstProjectB} fluid />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col sm={4} className="mb-3">
                            <h1>Rhein-Main Conference Centre, Wiesbaden, 2019</h1>
                        </Col>

                        <Col sm={8}>
                            <p>
                                The city of Wiesbaden commissioned us to revamp a piece of commercially available but awkwardly shaped land in downtown Wiesbaden to a new conference center. The main
                                requirement for the space was to be modern but flexible so that it could cater to as many different fields as possible.
                            </p>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col sm={4} className="mb-3">
                            <Image src={secondProjectA} fluid />
                        </Col>

                        <Col sm={8} className="mb-3">
                            <Image src={secondProjectB} fluid />
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col sm={4} className="3">
                            <h1>Danske Bank Offices, Hamburg, 2020</h1>
                        </Col>

                        <Col sm={8}>
                            <p>
                                Our most recent project for Danske Bank was finished months in advance. The bank wanted to establish their German presence in a nonchalant way, while injecting a fresh
                                air of Scandinavian design and color to the surrounding environment. One of the top features of this project remains the intricate main reception hall, with its glass
                                ceiling.
                            </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={4} className="mb-3">
                            <Image src={thirdProjectA} fluid />
                        </Col>

                        <Col sm={8}>
                            <Image src={thirdProjectB} fluid />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ProjectsComp;
