import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { showNotification } from "./store/notificationSlice";

let isInitial = true;

function App() {
  const cart = useSelector((store) => store.cart);
  const cartVisible = useSelector((store) => store.ui.cartVisible);
  const notification = useSelector(
    (store) => store.notificationUI.notification
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(
      showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendCartData = async () => {
      const response = await fetch(
        "https://react-http-f9fe3-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }

      dispatch(
        showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    sendCartData().catch((error) => {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartVisible && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
