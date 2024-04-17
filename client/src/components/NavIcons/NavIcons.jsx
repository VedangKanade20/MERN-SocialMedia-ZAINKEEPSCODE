import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Settings from "../../img/settings.png";
import Help from "../../img/help.png"
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      <Link to="../settings">
        <img src={Settings} alt="" />
      </Link>
      <Link to="../notifications">
        <img src={Noti} alt="" />
      </Link>
      <Link to="../help">
        <img src={Help} alt="" />
      </Link>
    </div>
  );
};

export default NavIcons;
