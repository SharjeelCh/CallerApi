import React, { useState } from "react";
import "../CSS/index.css";
import { Link } from "react-router-dom";

export default function Tabbar() {
  const [active, setactive] = useState(false);
  const [active1, setactive1] = useState(false);
  const [active2, setactive2] = useState(false);

  return (
    <div className="tab_container flex justify-between  text-white p-4 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 h-16">
      <div>
        <h1>CallerApp</h1>
      </div>
      <div className="items_container flex gap-x-7">
        <div
          className="tab_item hover:text-blue-800"
          onMouseOver={() => {
            setactive(true);
            setactive1(false);
            setactive2(false);
          }}
          onMouseLeave={() => {
            setactive(false);
          }}
        >
          {active ? (
            <button className="text-blue-300 border-0 border-b-2 border-green-400">
              <Link to={"/Home"}>Home</Link>
            </button>
          ) : (
            <span className="">Home</span>
          )}
        </div>
        <div
          className="tab_item  hover:text-blue-800"
          onMouseOver={() => {
            setactive1(true);
            setactive2(false);
            setactive(false);
          }}
          onMouseLeave={() => {
            setactive1(false);
          }}
        >
          {active1 ? (
            <button className="text-blue-300 border-0 border-b-2 border-green-400">
              <Link to={"/contacts"}>Contacts</Link>
            </button>
          ) : (
            <span className="hover:text-green">Contacts</span>
          )}
        </div>
        <div
          className="tab_item hover:text-blue-800"
          onMouseOver={() => {
            setactive2(true);
            setactive1(false);
            setactive(false);
          }}
          onMouseLeave={() => {
            setactive2(false);
          }}
        >
          {active2 ? (
            <button className="text-blue-300 border-0 border-b-2 border-green-400">
              <Link to={"/ContactUs"}>Contact Us</Link>
            </button>
          ) : (
            <span className="hover:text-green ">Contact Us</span>
          )}
        </div>
      </div>
    </div>
  );
}
