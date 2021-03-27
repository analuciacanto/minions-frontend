import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { API } from "aws-amplify";
import "./minions_grid.scss";

const MinionsGrid = () => {
  const [minions, setMinions] = useState();
  const [render, setRender] = useState(false);
  let history = useHistory();

  const navigate = (item) => {
    history.push({
      pathname: "/compraMinion:" + item.id,
      param: item,
    });
  };

  useEffect(() => {
    async function onLoad() {
      try {
        const minion = await loadMinions();
        setMinions(minion);
        setRender(true);
      } catch (e) {
        console.log(e);
      }
    }
    onLoad();
  });

  function loadMinions() {
    return API.get("minions", "/minions");
  }

  return (
    <div className="minions_grid">
      {render &&
        minions.map((item, index) => (
          <div key={index}>
            <div className="minion_card">
              <Image className="minion_image" src={item.image} />
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
