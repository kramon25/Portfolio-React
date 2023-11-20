import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import Particle from "../Particle";
import pdf from "../../src/assets/images/resume.png";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Col md={5} style={{ paddingBottom: 20 }}>
            <img
              src={pdf}
              alt="resume"
              className="img-fluid resum"
              style={{ maxHeight: "800px" }}
            />
          </Col>
        </Row>

        <Row className="resume">
          <Document>
            <Page scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &#x1F50D; Click To View
          </Button>
        </Row>
      </Container>
    </div>
  );
}
