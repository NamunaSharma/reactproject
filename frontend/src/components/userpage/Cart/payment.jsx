import React, { useEffect, useState } from "react";
import { Stripe } from "react-stripe-checkout"; // Corrected import statement
import axios from "axios"; // Added import statement for axios

const Payment = () => {
  const handleToken = (totalAmount, token) => {
    try {
      axios
        .post("http://localhost:5555/api/stripe/pay", {
          amount: totalAmount,
          token: token,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const tokenHandler = (token) => {
    console.log(token);
    handleToken(100, token);
  };

  return (
    <div>
      <Stripe // Corrected component name
        stripeKey="pk_test_51P4amLSAphL6wHSj0piExWnr3B9bLt2xlsa1DzFdSnXVceC97LOSWGb9Ztq1KKeiaeGrhBdVnM18CT6gRYkhaKFL00vb4wKhvm"
        token={tokenHandler}
      />
    </div>
  );
};

export default Payment;
