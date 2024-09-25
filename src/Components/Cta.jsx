import React from "react";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
  <div className="flex justify-center flex-col md:flex-row md:justify-evenly items-center py-[70px] md:py-[80px] text-white bg-red gap-5">
    <h1 className="text-3xl md:text-4xl text-center p-4">Like what you see? <span className="font-bold">Let's work</span></h1>
    <a href="#" className="py-3 px-8 md:py-6 md:px-14 text-red bg-light hover:text-light hover:bg-red uppercase border border-light transition ease-in-out duration-500 font-bold">Contact Us</a>
  </div>
  );
}
