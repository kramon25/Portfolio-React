import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import Logo from "../../src/assets/images/myavatar.png";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> KENNY RAMONDO</strong>
              </h1>
              <h5>(FULLSTACK WEB DEVELOPER)</h5>
              <Typewriter
                options={{
                  strings: [
                    "HTML",
                    "CSS",
                    "JAVASCRIPT",
                    "NODE",
                    "MYSQL",
                    "NOSQL",
                    "PWA",
                    "REACT",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />

              <div style={{ padding: 50, textAlign: "left" }}></div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={Logo}
                alt="avatar"
                className="img-fluid one"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I struggled for years figuring out what I wanted to do in life.
                I have friends who work in backend and Cyber Security and they
                kept pushing me to learn coding.I started with Python, which
                cuaght my attention at first, then I fell off. I was introduced
                to HTML AND CSS, through Udemy, with a little bit of Javascript
                and immediately had the time of my life. I fell in love with
                programming and Imay not know everything but I have at least
                learnt something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple"> HTML, CSS,</b> and{" "}
                  <b className="purple">Javascript. </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies </b> and either working
                  in
                  <b className="purple"> Front-End and/or Back-End</b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar"></Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>CONNECT</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/kramon25"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/kenneth-ramondo/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/bk_ramondo"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
