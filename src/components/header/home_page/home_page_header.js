import React from "react";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import "./home_page_header.scss";

const HomePageHeader = () => {
  let history = useHistory();

  const navigate = () => {
    history.push({
      pathname: "/cadastroMinions",
    });
  };
  return (
    <div>
      <div className="button">
        <Button variant="outline-secondary" type="submit" onClick={navigate}>
          Cadastrar Minions
        </Button>
      </div>
      <div className="header_home_page">
        <div className="header_title">Mundo dos Minions</div>
      </div>
    </div>
  );
};

export default HomePageHeader;
