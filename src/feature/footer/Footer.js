import React from "react";
import githubIcon from "./github.png";

function Footer() {
  return (
    <footer>
      <div>
        Made with <i>♥</i> by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          title="Github"
          href="https://github.com/Ahmed-Halim/GradientIO"
        >
          Halim
        </a>
      </div>

      <img
        alt="Repo"
        style={{ marginTop: "20px", overflow: "hidden", width: "30px" }}
        src={githubIcon}
      />
    </footer>
  );
}

export default Footer;
