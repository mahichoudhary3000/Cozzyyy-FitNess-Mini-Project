import React from "react";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return <>
    <Navbar />
    <main>{children}</main>
    <footer className="footer">© 2026 Cozzyyy FitNess · Your Simple Guide to a Healthier You</footer>
  </>;
}
