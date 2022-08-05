import { Container, Row, Col } from "react-bootstrap";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={6} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
           
            <p>Copyright 2022-ArgenWeb-All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}