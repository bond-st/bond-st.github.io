import React, { useState, useEffect } from "react";
import "./Buy.css";

const Buy = () => {
  const [showAddress, setShowAddress] = useState(true);
  const [modalImage, setModalImage] = useState(null);
  const [total, setTotal] = useState("97.5");
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const checkedOption = document.querySelector(
      'input[name="shipping"]:checked'
    );
    setShowAddress(checkedOption?.value !== "pickup");
    updateTotal(checkedOption?.value);
  }, []);

  const toggleAddressField = (show) => {
    setShowAddress(show);
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const updateTotal = (shippingOption) => {
    if (shippingOption === "pickup") {
      setTotal("90.0");
    } else if (shippingOption === "domestic") {
      setTotal("97.5");
    } else if (shippingOption === "international") {
      setTotal("90.0 + shipping");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    if (
      !formObject.name ||
      !formObject.email ||
      (showAddress && !formObject["postal-address"])
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxVj2B5OI4rupIY22ctjhY1sO9lkDl-tNgd3ZQHXtbFihBRcYSDkkwVzQ1L_EqM01xJXQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formObject),
        }
      );

      if (response.type === "opaque") {
        setFormSubmitted(true);
        alert("Order submitted successfully!");
        event.target.reset();
      } else {
        throw new Error("Unexpected response");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="buy-page">
      <div className="buy-container">
        <div
          className="desktop-front-image"
          onClick={() => openModal("/CCT001/front.png")}
        ></div>

        <div className="product-details">
          <div>
            <h1 className="product-title">CCT001</h1>
            <div className="due-date">Orders due 13th October 2024</div>
            <div className="mobile-img-container">
              <img
                src="/CCT001/front.png"
                alt="front"
                className="mobile-front-image"
                onClick={() => openModal("/CCT001/front.png")}
              />
              <img
                src="/CCT001/back.png"
                alt="back"
                className="mobile-back-image"
                onClick={() => openModal("/CCT001/back.png")}
              />
            </div>
            <div className="print-info-text">
              Double-sided print on{" "}
              <a
                className="product-link"
                href="https://dougs.com.au/products/mighty-tshirt"
              >
                Doug's Mighty T-shirt
              </a>
              . Heavyweight 230gsm fabric made from 50% recycled cotton.
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="selector-container">
              <div className="selector-title">{"//"} size</div>
              <div className="selector-selector">
                {["S", "M", "L", "XL"].map((size) => (
                  <div className="selector-option" key={size}>
                    <input
                      type="radio"
                      id={`size-${size.toLowerCase()}`}
                      name="size"
                      value={size}
                      defaultChecked={size === "L"}
                      required
                    />
                    <label htmlFor={`size-${size.toLowerCase()}`}>{size}</label>
                  </div>
                ))}
              </div>
              <a
                className="sizing-link"
                target="_blank"
                rel="noopener noreferrer"
                href="/CCT001/sizing.png"
              >
                sizing guide
              </a>
            </div>

            <div id="color-selector" className="selector-container">
              <div className="selector-title">{"//"} color</div>
              <div className="selector-selector">
                {[1, 2, 3].map((num) => (
                  <div className="selector-option" key={num}>
                    <input
                      type="radio"
                      id={`black${num}`}
                      name="color"
                      value={`black${num}`}
                      required
                    />
                    <label htmlFor={`black${num}`}>BLACK</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="shipping-section">
              <div className="selector-title">{"//"} shipping</div>
              <div className="shipping-options">
                {[
                  {
                    id: "pickup",
                    label: "Pickup - Wellington CBD",
                    value: false,
                  },
                  { id: "domestic", label: "Domestic - $7.50", value: true },
                  {
                    id: "international",
                    label: "International - POA",
                    value: true,
                  },
                ].map((option) => (
                  <div className="shipping-option" key={option.id}>
                    <input
                      type="radio"
                      id={option.id}
                      name="shipping"
                      value={option.id}
                      defaultChecked={option.id === "domestic"}
                      onChange={() => {
                        toggleAddressField(option.value);
                        updateTotal(option.id);
                      }}
                      required
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="selector-title">{"//"} $total</div>
              <div className="total-price">{total}</div>
              <div className="total-price-note">
                Note: This is a pre-order. If demand is not met, you will be
                issued a refund
              </div>
            </div>

            <div className="info-section">
              <h1 className="info-title">Info</h1>
              <div className="input-group">
                <div className="input-label">{"//"} name</div>
                <input type="text" id="name" name="name" required />
              </div>
              {showAddress && (
                <div id="postal-address-group" className="input-group">
                  <div className="input-label">{"//"} postal address</div>
                  <input
                    type="text"
                    id="postal-address"
                    name="postal-address"
                    required
                  />
                </div>
              )}
              <div className="input-group">
                <div className="input-label">{"//"} email</div>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="info-footer">
                You will be contacted with bank transfer information
              </div>
            </div>

            <button type="submit" disabled={formSubmitted}>
              {formSubmitted ? "Order Submitted" : "Submit pre-order"}
            </button>
          </form>
        </div>
        <div
          className="desktop-back-image"
          onClick={() => openModal("/CCT001/back.png")}
        ></div>

        {modalImage && (
          <div className="modal" onClick={closeModal}>
            <span className="close">&times;</span>
            <img className="modal-content" src={modalImage} alt="Modal" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Buy;
