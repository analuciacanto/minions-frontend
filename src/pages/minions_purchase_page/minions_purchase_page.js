import { useLayoutEffect, React, useState } from "react";
import MinionsPurchaseForm from "../../components/forms/minions_purchase_form/minions_purchase_form";
import "./minions_purchase_page.scss";
import { useLocation } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const MinionsPurchasePage = () => {
  const location = useLocation();
  const [minion, setMinion] = useState();
  const [render, setRender] = useState(false);

  useLayoutEffect(() => {
    console.log(location.param);

    setMinion({
      data: location.param,
    });

    setRender(true);
  }, [location]);

  return (
    <div className="page_layout_purchase">
      {render && (
        <div>
          <Row>
            <Image className="minion_image" src={minion.data.minion_image} />
            <div>
              <div className="minion_name">{minion.data.name}</div>
              <div className="minion_description">
                {minion.data.description}
              </div>
              <div className="minion_price">{"R$:" + minion.data.price}</div>
            </div>
          </Row>
          <MinionsPurchaseForm />
        </div>
      )}
    </div>
  );
};

export default MinionsPurchasePage;
