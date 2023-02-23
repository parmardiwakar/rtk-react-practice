import { useDispatch, useSelector } from "react-redux";

import { toggle } from "../../store/cartUISlice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalItems = useSelector((store) => store.cart.totalQuantity);
  

  const cartClickHandler = () => {
    dispatch(toggle());
  };

  return (
    <button className={classes.button} onClick={cartClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
