import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Badge from "react-bootstrap/Badge";

const CartWidgetRIcons = () => {
  const { cartTotal} = useContext(CartContext);

  return (
    <>
      <BsCart4 color="black" />

      <Badge bg="danger" className="ms-1"> {cartTotal()} </Badge>
    </>
  );
};

export default CartWidgetRIcons;
