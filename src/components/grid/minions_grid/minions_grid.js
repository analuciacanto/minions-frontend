import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import {BrowserRouter as Router, useHistory,} from "react-router-dom";
import data from "./minions.json";
import "./minions_grid.scss";


const MinionsGrid = () => {
  const [minions, setMinions] = useState(data);
  let history = useHistory();

  const navigate = () => {
    history.push("/cadastroMinions");
  };
  return (
    <div className="minions_grid">
    {minions.map((item, index) => (
      <div key={index}>
        <div className="minion_card">
          <Image className="minion_image" src={item.minion_image} />
          <div className="minion_name">{item.name}</div>
          <div className="minion_description">{item.description}</div>
          <Button variant="outline-secondary" type="submit" onClick={navigate}>
            Reservar
          </Button>{" "}
        </div>
      </div>
    ))}
  </div>
  );
};

export default MinionsGrid;
