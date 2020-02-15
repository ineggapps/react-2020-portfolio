import React from "react";
import { Link } from "react-router-dom";

const Gnb = () => (
  <div>
    <ul>
      <li>
        <Link to={"/introduce"}>Introduce</Link>
      </li>
      <li>
        <Link to={"/portfolio"}>Portfolio</Link>
      </li>
      <li>Resume</li>
      <li>Contact</li>
    </ul>
  </div>
);

export default Gnb;
