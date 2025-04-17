import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Job = ({ data }) => {
  const [preferito, setPreferito] = useState(false);
  const dispatch = useDispatch();
  const cambioStella = function (company) {
    if (preferito) {
      setPreferito(false);
      dispatch({ type: "REMOVE_FROM_PREFERITI", payload: company });
    } else {
      setPreferito(true);
      dispatch({ type: "ADD_TO_PREFERITI", payload: company });
    }
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={4}>
        <Button className="rounded-circle me-2">
          <i
            className={`bi fs-6 ${preferito ? "bi-star-fill" : "bi-star"}`}
            onClick={() => cambioStella(data.company_name)}
          ></i>
        </Button>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
