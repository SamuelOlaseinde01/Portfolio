import React from "react";
import { Email, GitHub, LinkedIn, Twitter } from "@mui/icons-material";

export default function Header() {
  return (
    <header>
      <h1>{"<Samuel />"}</h1>
      <nav>
        <a href="#section-home">Home</a>
        <a href="#section-about">About</a>
        <a href="#section-services">Services</a>
        <a href="">Projects</a>
        <a href="">Contact Me</a>
      </nav>
      <div className="social-links">
        <a href="">
          <LinkedIn />
        </a>
        <a href="">
          <Twitter />
        </a>
        <a href="">
          <GitHub />
        </a>
      </div>
    </header>
  );
}
