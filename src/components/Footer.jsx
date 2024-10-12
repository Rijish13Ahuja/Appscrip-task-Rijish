'use client'
import React, { useState } from "react";
import './css/Footer.css';
import USD from "../Assets/usFLAG.png";
import insta from "../Assets/Insta.png";
import linkedin from "../Assets/linkedin.png";
import gpay from "../Assets/g-pay.png";
import mastercard from "../Assets/masercard.png";
import amex from "../Assets/amex.png";
import paypal from "../Assets/paypal.png";
import apay from "../Assets/a-pay.png";
import dpay from "../Assets/d-pay.png";
import dropdown from "../Assets/arrow-right.png";

const Footer = () => {
  const [metta, setMetta] = useState(false);
  const [quicklinks, setQuicklinks] = useState(false);
  const [follow, setFollow] = useState(false);
  const [l1class, setL1class] = useState("l1 h75");
  const [l2class, setL2class] = useState("l2 h75");
  const [footerbtmcls, setFooterbtmcls] = useState("footer-bottom");
  const [l1icocls, setL1icocls] = useState("");
  const [l2icocls, setL2icocls] = useState("");

  const handlemettamuse = () => {
    setMetta(!metta);
    setL1class(metta ? "l1 h75" : "l1");
    setL1icocls(!metta ? "rotate180" : "");
    setFooterbtmcls(!metta ? "height536" : "footer-bottom");
  };

  const handleQuicklinks = () => {
    setQuicklinks(!quicklinks);
    setL2class(quicklinks ? "l2 h75" : "l2");
    setL2icocls(!quicklinks ? "rotate180" : "");
    setFooterbtmcls(!quicklinks ? "height536" : "footer-bottom");
  };

  const toggleFollow = () => {
    setFollow(!follow);
  };

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-about">BE THE FIRST TO KNOW</div>
          <p>Sign up for updates from mettā muse.</p>
          <div className="footer-input">
            <input type="email" placeholder="Enter your E-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-top-right">
          <div className="footer-about">CONTACT US</div>
          <div className="footer-contactinfo">
            <span className="contactNo">+44221135360</span>
            <span className="mail">customercare@mettamuse.com</span>
          </div>
          <div className="currencysection">
            <div className="footer-about gap24">CURRENCY</div>
            <img src={USD} alt="usd" />
          </div>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <div className={footerbtmcls}>
        <div className="footer-bottom-left">
          <div className={l1class}>
            <div className="l1-heading">
              mettā muse
              <img
                src={dropdown}
                onClick={handlemettamuse}
                className={l1icocls}
                alt="arrow-drop"
              />
            </div>
            {metta && (
              <>
                <span>About</span>
                <span>Stories</span>
                <span>Artisans</span>
                <span>Boutiques</span>
                <span>Contact Us</span>
                <span style={{ marginBottom: "10px" }}>EU Compliances Docs</span>
              </>
            )}
          </div>

          <div className={l2class}>
            <div className="l2-heading">
              QUICK LINKS
              <img
                src={dropdown}
                className={l2icocls}
                onClick={handleQuicklinks}
                alt="arrow-drop"
              />
            </div>
            {quicklinks && (
              <>
                <span style={{ marginTop: "10px" }}>Order & Shipping</span>
                <span style={{ marginTop: "10px" }}>Join/Login as Seller</span>
                <span style={{ marginTop: "10px" }}>Payment & Pricing</span>
                <span style={{ marginTop: "10px" }}>Return & Refunds</span>
                <span style={{ marginTop: "10px" }}>FAQs</span>
                <span style={{ marginTop: "10px" }}>Privacy Policy</span>
                <span style={{ margin: "10px 0 10px 0" }}>
                  Terms & Conditions
                </span>
              </>
            )}
          </div>
        </div>

        <div className="footer-bottom-right">
          <div className="bot-media">
            <div
              className={`footer-followus ${follow ? "open" : ""}`}
              onClick={toggleFollow}
            >
              FOLLOW US
              {window.innerWidth <= 768 && <img src={dropdown} alt="dropdown" />}
            </div>
            {follow && (
              <div className="footer-media" style={{ paddingBottom: "10px" }}>
                <img src={insta} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
              </div>
            )}
          </div>

          <div className="payment-portals">mettā muse ACCEPTS</div>
          <div className="payment-portals-img">
            <img src={gpay} alt="gpay" />
            <img src={mastercard} alt="mastercard" />
            <img src={paypal} alt="paypal" />
            <img src={amex} alt="amex" />
            <img src={apay} alt="apay" />
            <img src={dpay} alt="dpay" />
          </div>
        </div>
      </div>

      <div className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
