import { Container, Row, Col } from "react-bootstrap";
import HTML from "../../src/assets/frontendcertificate.png";
import upenn from "../../src/assets/images/upenncert.png";

export default function Certs() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>

        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            fontSize: "20px",
          }}
        >
          <h2>
            Full Stack <strong className="purple"> Web Developer</strong>
          </h2>
          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={upenn}
              alt="avatar"
              className="img-fluid two"
              style={{ maxHeight: "450px" }}
            />
          </Col>
          <h2>
            Responsive <strong className="purple"> HTML & CSS</strong>
          </h2>
          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={HTML}
              alt="avatar"
              className="img-fluid two"
              style={{ maxHeight: "450px" }}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
