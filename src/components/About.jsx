import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export default function About() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center", fontSize: "20px" }}>
            Hi Everyone! I am <span className="purple">Kenneth Ramondo </span>
            from <span className="purple"> Newtown Square, Pennsylvania.</span>
            <br /> I am a coding student pursuing a full stack web developement
            or front end job.
            <br />
            I graduated UPENN's full stack coding bootcamp and loved every
            second of it.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <strong className="purple">
                <ImPointRight />
              </strong>{" "}
              Playing Video Games
            </li>
            <li className="about-activity">
              <strong className="purple">
                <ImPointRight />
              </strong>{" "}
              Travelling
            </li>
            <li className="about-activity">
              <strong className="purple">
                <ImPointRight />
              </strong>{" "}
              Concerts
            </li>
            <li className="about-activity">
              <strong className="purple">
                <ImPointRight />
              </strong>{" "}
              Snowboarding
            </li>
            <li className="about-activity">
              <strong className="purple">
                <ImPointRight />
              </strong>{" "}
              Going to the gym + Being active
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
