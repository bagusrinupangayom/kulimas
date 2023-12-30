import { Container } from 'react-bootstrap';

const CareersComp = () => {
    return (
        <>
            <div className="bgCareers">
                <Container>
                    <div className="careersHeader text-center">
                        <h1>CAREERS</h1>
                    </div>
                </Container>
            </div>

            <section>
                <Container>
                    <div className="openPositions">
                        <div className="openPositionsHeading mb-4">
                            <h1>Open Positions</h1>
                        </div>

                        <div className="mb-4">
                            <h2>01</h2>
                            <h2>Health and Safety Coordinator - Hamburg, Germany</h2>
                            <p>FULL-TIME</p>
                        </div>

                        <div className="mb-4">
                            <h2>02</h2>
                            <h2>Construction Safety Manager - Hamburg, Germany</h2>
                            <p>FULL-TIME</p>
                        </div>

                        <div>
                            <h2>03</h2>
                            <h2>Construction Engineer - Hamburg, Germany</h2>
                            <p>FULL-TIME</p>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default CareersComp;
