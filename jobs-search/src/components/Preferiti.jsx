import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Preferiti = function () {
  const [preferito, setPreferito] = useState(true);

  const preferiti = useSelector((state) => {
    return state.preferiti.content;
  });
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1>I tuoi preferiti sono:</h1>
        </Col>
        <Col>
          <ListGroup>
            {preferiti.map((azienda) => (
              <ListGroup.Item className="d-flex align-items-center">
                <Button
                  className="rounded me-2"
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_PREFERITI",
                      payload: azienda,
                    });
                  }}
                >
                  Elimina
                </Button>
                {azienda}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Link to="/">
            <Button variant="outline-success"> Torna indietro</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Preferiti;
