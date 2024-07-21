import React from "react";
import "./LeftCheckout.css";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaStripe } from "react-icons/fa6";

const LeftCheckout = () => {
  return (
    <div>
      <div className="card-div2 ">
        <div>
          <input type="checkbox" checked className="round-check" />
        </div>
        <div>
          <span className="font-size">CHOOSE A DELIVERY OPTION</span>
          <span className="font-size1">Ikeja Keystone block</span>
          <span className="font-size2">
            1234 Maplewood Crescent, Apartment 56B, Greenfield Heights,
            Springfield, Illinois, 62704, United States of America.
          </span>

          <div className="div-check">
            <input type="checkbox" />
            <span>Check this box if you have instructions</span>
          </div>
        </div>
        <div className="font-size3">
          <span>Change</span>

          <span class="health-style remove-arr"> &gt;</span>
        </div>
      </div>
      <div className="card-div2">
        <div className="check-div3">
          <input type="checkbox" checked className="round-check" />
        </div>
        <div>
          <span className="font-size">PAYMENT OPTION</span>
          <div className="desc">
            <div className="check-div2">
              <input type="checkbox" className="round-check round-check2" />
              <span className="">Pay now</span>
            </div>
            <div className="font3">
              <span className="font-size2  ">
                Pay instantly and securely using Alpha wallet or your
                credit/debit card.
              </span>
            </div>
            <div className="flex-payment font2">
              <span>
                <RiVisaLine />
              </span>
              <span>
                <FaCcMastercard />
              </span>
              <FaPaypal />
              <span>
                <FaStripe />
              </span>
              {/* </span> */}
            </div>
          </div>
          <div className="desc">
            <div className="check-div2">
              <input type="checkbox" className="round-check round-check2" />
              <span>Pay On delivery</span>
            </div>
            <div className="font3">
              <span className="font-size2 ">
                Please be aware that payment is required before opening your
                package. Once the seal is broken, returns are only accepted if
                the item is damaged, defective, or has missing parts.
              </span>
            </div>
          </div>
          <div className="desc">
            <div className="check-div2">
              <input type="checkbox" className="round-check round-check2" />
              <span>Buy now pay later</span>
            </div>
            <div className="font3">
              <span className="font-size2 ">
                With the buy now, pay later option, you can spread your payments
                over a convenient period. Enjoy the benefits of
                installment-based purchases.
              </span>
            </div>
          </div>
          <p className="font-size">Add a voucher code </p>
          <span className="font-size2">
            Do you have a voucher? Enter the voucher code below
          </span>
          <form action="" class="coupon-form">
            <input
              type="text"
              class="coupon-input"
              placeholder="Discount code or gift card"
            />
            <button type="button" class="coupon-button">
              Apply
            </button>
          </form>
          <p>
            By clicking this button, you agree to our
            <span>terms and conditions.</span>
          </p>
          <button className="checkout">Continue to payment</button>
        </div>
      </div>
    </div>
  );
};

export default LeftCheckout;
