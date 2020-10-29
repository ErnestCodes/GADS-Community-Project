import React from "react";
import "../Checkout/Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import Subtotal from "../Subtotal/Subtotal";
import Footer from "../Footer/Footer";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />

          <div>
            <h3>Hello, {user ? user.email : "Guest"}</h3>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                price={item.price}
                rating={item.rating}
                title={item.title}
              />
            ))}
          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
      <Footer footerStyle="main-footer" />
    </div>
  );
}

export default Checkout;
