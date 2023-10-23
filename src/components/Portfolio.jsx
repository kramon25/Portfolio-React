import { Container, Row, Col } from "react-bootstrap";
import PortfolioCard from "../../src/components/Portflio/PortfolioCard.jsx";
import travel from "../../src/assets/images/travelplanner.png";
import omnifood from "../../src/assets/images/omnifood.png";
import weather from "../../src/assets/images/updatedweather.png";
import password from "../../src/assets/images/password-gen.png";
import notetaker from "../../src/assets/images/notetaker.png";
import calendar from "../../src/assets/images/calendar.png";

export default function Portfolio() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "black" }}>
          Here are a few projects I have worked on recently.
        </p>
        <Row
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            fontSize: "20px",
          }}
        >
          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={travel}
              isBlog={false}
              title="TravelPlanner"
              description=""
              ghLink="https://github.com/BLam1226/Travel-Planner"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://blam1226.github.io/Travel-Planner/index.html"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={omnifood}
              isBlog={false}
              title="Omnifood"
              description=""
              ghLink="https://github.com/kramon25/omnifood"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://kramon25.github.io/omnifood/"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={weather}
              isBlog={false}
              title="WeatherApp"
              description=""
              ghLink="https://github.com/kramon25/Weather-App"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://kramon25.github.io/Weather-App/"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={password}
              isBlog={false}
              title="Password Generator"
              description=""
              ghLink="https://github.com/kramon25/Kenny-password-generator"
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://kramon25.github.io/Kenny-password-generator/"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={notetaker}
              isBlog={false}
              title="Heroku App Note Taker"
              description=""
              ghLink="https://github.com/kramon25/Note-Taker"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://kenny-note-taker-46d557d7d38a.herokuapp.com/notes"
              >
                Click to View
              </a>
            </button>
          </Col>

          <Col md={4} className="project-card">
            <PortfolioCard
              imgPath={calendar}
              isBlog={false}
              title="Workday Schedule"
              description=""
              ghLink="https://github.com/kramon25/Calendar"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
            <button className="portBtn">
              <a
                className="linkBtn"
                href="https://kramon25.github.io/Calendar/"
              >
                Click to View
              </a>
            </button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
