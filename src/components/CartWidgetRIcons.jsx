import { BsCart4 } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
const CartWidgetRIcons = () => {
  return (
    <>
      <BsCart4 color="black" />
        <Badge bg="danger" className="ms-1">0</Badge>
      </>
  );
}

export default CartWidgetRIcons;