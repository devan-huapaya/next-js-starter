import { Container, Row, Col } from "react-bootstrap";

export default function Home({ children, ...props }) {
  return (
    <Container>
      <Row>
        <Col {...props}>{children}</Col>
      </Row>
    </Container>
  );
}
