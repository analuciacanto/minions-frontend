import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const MinionsPurchaseForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");

  return (
    <Form >
      <Form.Group controlId="formName">
        <Form.Control
          type="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Control
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>
      <Form.Row>
        <Col xs={6}>
          <Form.Group controlId="formPhone">
            <Form.Control
              type="phone"
              placeholder="Telefone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={6}>
        <Form.Group controlId="formAmount">
            <Form.Control
              type="amount"
              placeholder="Quantidade"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Button variant="secondary" type="submit">
          Reservar
        </Button>
      </Form.Row>
    </Form>
  );
};

export default MinionsPurchaseForm;
