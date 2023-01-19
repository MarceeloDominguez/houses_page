import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <header
      className={`${
        header ? "bg-primary py-6 shadow-lg" : "bg-transparent py-6"
      } fixed z-50 w-full transition-all duration-500`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-end lg:gap-y-0">
        <nav className="text-slate-50 flex gap-x-4 font-third tracking-[3px] text-[15px] items-center uppercase cursor-pointer">
          <Link to={`/`} className="hover:opacity-80">
            Home
          </Link>
          <a className="hover:opacity-80">Houses</a>
          <a className="hover:opacity-80">Contact</a>
        </nav>
      </div>
    </header>
  );
}
