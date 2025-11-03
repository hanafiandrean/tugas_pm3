import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">🍽️ Kantin Dua Bersaudara</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Tentang</a></li>
          <li><a href="#">Kontak</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
