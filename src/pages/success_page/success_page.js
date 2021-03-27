import React from "react";
import Button from "react-bootstrap/Button";
import "./success_page.scss";
import { useHistory } from "react-router-dom";

const SuccessPage = () => {
  let history = useHistory();

  const navigate = () => {
    history.push({
      pathname: "/",
    });
  };
  return (
    <div className="content">
      <div className="image"></div>
      <div className="text">
        Registramos o seu pedido. Obrigado por usar o Mundos dos Minions.
      </div>
      <Button variant="secondary" type="submit" onClick={navigate}>
        Voltar
      </Button>{" "}
    </div>
  );
};

export default SuccessPage;
