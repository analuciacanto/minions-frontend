import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./minions_register_header.scss";

const MinionsRegisterHeader = () => {
  return (
      <Row>
        <Col xs={4}>
          <div className="minions_register_image" />
        </Col>
        <Col xs={8}>
          <div className="title_register">Cadastro de minions</div>
        </Col>
      </Row>
  );
};

export default MinionsRegisterHeader;
