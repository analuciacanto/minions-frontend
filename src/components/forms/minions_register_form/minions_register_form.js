import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { API } from "aws-amplify";
import { useHistory } from "react-router-dom";

const MinionsRegisterForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [isLoading, setLoading] = useState(false);

  let history = useHistory();

  const navigate = () => {
    history.push({
      pathname: "/sucesso",
    });
  };

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();

    try {
      await createMinion();
      navigate();
    } catch (e) {
      console.log(e);
    }

    function createMinion() {
      return API.post("minions", "/createMinions", {
        body: {
          name: name,
          description: description,
          price: price,
          image: imageURL,
        },
      });
    }
    setLoading(false);
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
            <Form.Control
              type="fiile"
              placeholder="URL da imagem"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Row>
        <Button variant="secondary" type="submit" disabled={isLoading}>
          Cadastrar
        </Button>
      </Form.Row>
    </Form>
  );
};

export default MinionsRegisterForm;
