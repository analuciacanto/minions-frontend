import { React, useState, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { API } from "aws-amplify";
import "./minions_purchase_page.scss";
import { useHistory } from "react-router-dom";

const MinionsPurchasePage = () => {
  const location = useLocation();
  const [minion, setMinion] = useState();
  const [render, setRender] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [isLoading, setLoading] = useState(false);
  let history = useHistory();

  const navigate = () => {
    history.push({
      pathname: "/sucesso",
    });
  };

  useLayoutEffect(() => {
    setMinion({
      data: location.param,
    });

    setRender(true);
  }, [location]);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();

    try {
      await createPurchase();
      await sendMail();
      navigate();
    } catch (e) {
      console.log(e);
    }

    function createPurchase() {
      return API.post("minions", "/createPurchase", {
        body: {
          name: name,
          email: email,
          phone: phone,
          amount: amount,
          minion: minion.data.name,
        },
      });
    }
    setLoading(false);
  }

  function sendMail() {
    return API.post("minions", "/sendMail", {});
  }

  return (
    <div className="page_layout_purchase">
      {render && (
        <div>
          <Row>
            <Image className="minion_image" src={minion.data.image} />
            <div>
              <div className="minion_name">{minion.data.name}</div>
              <div className="minion_description">
                {minion.data.description}
              </div>
              <div className="minion_price">{"R$:" + minion.data.price}</div>
            </div>
          </Row>
          <Form onSubmit={handleSubmit}>
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
              <Button variant="secondary" type="submit" disabled={isLoading}>
                Reservar
              </Button>
            </Form.Row>
          </Form>
        </div>
      )}
    </div>
  );
};

export default MinionsPurchasePage;
