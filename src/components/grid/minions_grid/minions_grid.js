import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import {useHistory} from "react-router-dom";
import data from "./minions.json";
import "./minions_grid.scss";

const MinionsGrid = () => {
  const [minions] = useState(data);
  let history = useHistory();

  const navigate = (item) => {
    history.push({
      pathname: "/compraMinion:" + item.id,
      param: item,
    });
  };

  return (
    <div className="minions_grid">
      {minions.map((item, index) => (
        <div key={index}>
          <div className="minion_card">
            <Image className="minion_image" src={item.minion_image} />
            <div className="minion_name">{item.name}</div>
            <div className="minion_description">{item.description}</div>
            <Button
              variant="outline-secondary"
              type="submit"
              onClick={() => {
                navigate(item);
              }}
            >
              Reservar
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MinionsGrid;
