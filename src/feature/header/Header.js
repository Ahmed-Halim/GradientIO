import React from "react";
import ToggleMode from "./ToggleMode";
import logoLight from "./logo-light.png";
import logoDark from "./logo-dark.png";

function Header({ nightMode, setNightMode }) {
  return (
    <>
      <header>
        <a href={window.location.href}>
          <img
            src={nightMode ? logoDark : logoLight}
            className="app-logo"
            alt="logo"
          />
        </a>
        <ToggleMode nightMode={nightMode} setNightMode={setNightMode} />
      </header>
      <h1>
        We provide you with <em>100+ linear gradients</em> to build awesome{" "}
        <span>Websites</span> faster.
      </h1>
    </>
  );
}

export default Header;
