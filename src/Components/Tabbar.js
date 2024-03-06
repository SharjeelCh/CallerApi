import React, { useState } from "react";
import "../CSS/index.css";
import { FaHome, FaPersonBooth, FaPhone } from "react-icons/fa";

export default function Tabbar() {
  const [active, setactive] = useState(false);
  const [active1, setactive1] = useState(false);
  const [active2, setactive2] = useState(false);

  return (
    <div className="tab_container flex justify-between  bg-blue-500 text-white p-4">
      <div>
        <h1>CallerApp</h1>
      </div>
      <div className="items_container flex gap-x-7">
        <div
          className="tab_item bg-blue-500 hover:text-blue-800"
          onMouseOver={() => {
            setactive(true);
          }}
          onMouseLeave={() => {
            setactive(false);
          }}
        >
          {active ? (
            <FaHome size={23} />
          ) : (
            <span className="hover:text-green">Home</span>
          )}
        </div>
        <div
          className="tab_item bg-blue-500 hover:text-blue-800"
          onMouseOver={() => {
            setactive1(true);
          }}
          onMouseLeave={() => {
            setactive1(false);
          }}
        >
          {active1 ? (
            <FaPersonBooth size={23} />
          ) : (
            <span className="hover:text-green">Contacts</span>
          )}
        </div>
        <div
          className="tab_item bg-blue-500 hover:text-blue-800"
          onMouseOver={() => {
            setactive2(true);
          }}
          onMouseLeave={() => {
            setactive2(false);
          }}
        >
          {active2 ? (
            <FaPhone size={23} />
          ) : (
            <span className="hover:text-green">Contact Us</span>
          )}
        </div>
      </div>
    </div>
  );
}
