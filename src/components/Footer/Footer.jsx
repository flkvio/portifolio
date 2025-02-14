import React from "react";
import {} from "./style.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
