import React, { useState, useEffect } from "react";
import "./Buy.css";

const Buy = () => {
  const [showAddress, setShowAddress] = useState(true);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    // Initialize the address field visibility based on the default checked option
    const checkedOption = document.querySelector(
      'input[name="shipping"]:checked'
    );
    setShowAddress(checkedOption?.value !== "pickup");
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

          <form>
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
                      onChange={() => toggleAddressField(option.value)}
                    />
                    <label htmlFor={option.id}>{option.label}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="selector-title">{"//"} $total</div>
              <div className="total-price">100.00</div>
              <div className="total-price-note">
                Note: This is a pre-order. If demand is not met, you will be
                issued a refund
              </div>
            </div>

            <div className="info-section">
              <h1 className="info-title">Info</h1>
              <div className="input-group">
                <div className="input-label">{"//"} name</div>
                <input type="text" id="name" name="name" />
              </div>
              {showAddress && (
                <div id="postal-address-group" className="input-group">
                  <div className="input-label">{"//"} postal address</div>
                  <input
                    type="text"
                    id="postal-address"
                    name="postal-address"
                  />
                </div>
              )}
              <div className="input-group">
                <div className="input-label">{"//"} email</div>
                <input type="email" id="email" name="email" />
              </div>
              <div className="info-footer">
                You will be contacted with bank transfer information
              </div>
            </div>

            <button type="submit">Submit pre-order</button>
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
