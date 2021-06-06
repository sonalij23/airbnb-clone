import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  const history = useHistory();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
          alt=""
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <IconButton onClick= {()=>history.push("/search")}>
          <SearchIcon />
        </IconButton>
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
