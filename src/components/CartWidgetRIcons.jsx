import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Badge from "react-bootstrap/Badge";

const CartWidgetRIcons = () => {
  const { cartTotal } = useContext(CartContext);

  const total = cartTotal();

  return (
    <>
      <BsCart4 color="white" size={24} />
      {total > 0 && (
        <Badge bg="danger" className="ms-1">
          {total}
        </Badge>
      )}
    </>
  );
};

export default CartWidgetRIcons;
