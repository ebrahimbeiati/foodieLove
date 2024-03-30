
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState(null);
  const [cvv, setCvv] = useState("");
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to process the payment

    // Set paymentSubmitted to true to indicate that payment has been submitted
    setPaymentSubmitted(true);

    // Clear form fields after successful submission
    setCardNumber("");
    setExpiryDate(null);
    setCvv("");
  };

  const formatCardNumber = (value) => {
    // Implement card number formatting logic
    setCardNumber(value);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <main className="container mx-auto py-8">
        <section className="payment-form">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Payment Form</h2>
            {!paymentSubmitted && (
              <form id="paymentForm" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="cardNumber"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => formatCardNumber(e.target.value)}
                    placeholder="Enter card number"
                    maxLength="19"
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="expiryDate"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Expiry Date
                  </label>
                  <DatePicker
                    id="expiryDate"
                    selected={expiryDate}
                    onChange={(date) => setExpiryDate(date)}
                    placeholderText="MM/YYYY"
                    dateFormat="MM/yyyy"
                    showMonthYearPicker
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="cvv"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="CVV"
                    maxLength="3"
                    className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Pay Now
                </button>
              </form>
            )}
            {paymentSubmitted && (
              <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
                Payment Successful!
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PaymentPage;
