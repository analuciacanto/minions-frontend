import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { API } from "aws-amplify";

const MinionsRegisterForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, serImageURL] = useState("");
  const [price, setPrice] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    console.log("Começamos");

    try {
      await createMinion({ name, description, price, imageURL });
      console.log("Foi");
    } catch (e) {
      console.log(e);
    }

    function createMinion(name, description, price, imageURL) {
      return API.post("minions", "/createMinions", {
        body: {
          name: name,
          description: description,
          price: price,
        },
      });
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Control
          type="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Form.Row>
        <Col xs={4}>
          <Form.Group controlId="formPrice">
            <Form.Control
              type="price"
              placeholder="Preço"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col xs={8}>
          <Form.Group controlId="file">
            <Form.Control  type="file" />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Button variant="secondary" type="submit">
          Cadastrar
        </Button>
      </Form.Row>
    </Form>
  );
};

export default MinionsRegisterForm;
