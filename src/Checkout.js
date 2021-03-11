import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider"; // required
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/11849c8bdbbf-1920x80.png"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping Basket is empty</h2>
            <p>
              Est sed dolore stet erat labore stet elitr no sed et, ipsum
              takimata ut no.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {/*  list of all of the products */}
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
