import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { handleToken } from "../actions/index";
import { connect } from "react-redux";

class Payment extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="Pay $5 for 5 credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey="pk_test_51GyBJeBBEFTjIJ6V0aBkIG0rmhyGq6E6UFsZV4ZeWkrpGFJgSoUbxkrWjXM5DV9oLWkYxpMNz7Lney1fVo5MeTQR00CptBKq3m"
      >
        <button className="btn">Add Credits</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, { handleToken })(Payment);
