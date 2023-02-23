import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((product) => {
          return (
            <CartItem
              key={product.id}
              item={{
                id: product.id,
                title: product.name,
                quantity: product.quantity,
                total:  product.totalPrice,
                price: product.price,
              }}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
