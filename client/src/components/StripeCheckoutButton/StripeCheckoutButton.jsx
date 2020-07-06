import React from "react";
import { connect } from "react-redux";
import { clearCart } from "../../redux/cart/cart.actions";

import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const StripeCheckoutButton = ({ price, clearItemsFromCart }) => {
  const priceForStripe = price * 100;
  //NOTE: key get from stripe site
  const publishableKey =
    "pk_test_51H1kspJUwMQsQNDO0abg4woH2KlFQnGTDvSEVEsBPqzZMPmtqBoo4Pmgg4FHNgWWzmnZuJeA6kC35PaAWWiU97x4004BfW4Sdo";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("Payment successful");
        clearItemsFromCart();
      })
      .catch((error) => {
        console.log("Payment error:", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Scollops"
      billingAddress
      shippingAddress
      image="https://cdn3.iconfinder.com/data/icons/one-piece-colored/48/Cartoons__Anime_One_Piece_Artboard_6-512.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItemsFromCart: () => dispatch(clearCart()),
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
