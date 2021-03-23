import React, { useState } from "react";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import HomePageHeader from "../../components/header/home_page/home_page_header";
import data from "./minions.json";

import "./minions_page.scss";

const MinionsPage = () => {
  const [minions, setMinions] = useState(data);

  return (
    <div className="page_layout">
      <HomePageHeader />
      <div className="minions_grid">
        {minions.map((item, index) => (
          <div key={index}>
            <div className="minion_card">
              <Image className="minion_image" src={item.minion_image} />
              <div className="minion_name">{item.name}</div>
              <div className="minion_description">{item.description}</div>
              <Button variant="outline-secondary" type="submit">
                Reservar
              </Button>{" "}
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
};

export default MinionsPage;
