import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

const MinionPurchaseHeader = (minion) => {
  return (
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
  </div>);
};
export default MinionPurchaseHeader;
