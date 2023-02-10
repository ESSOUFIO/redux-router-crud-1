import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <Container>
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <div className="m-5 text-center">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            <button
              className="btn btn-primary m-4"
              onClick={() => navigate("/", { replace: true })}
            >
              Home
            </button>
          </div>
        </Col>
        1
      </Row>
    </Container>
  );
};

export default ErrorPage;
