import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Navbar.module.css";
import img from "../../assets/images/ava.jpg";
import img2 from "../../assets/images/ava2.jpg";
import img3 from "../../assets/images/virtuux.jpg";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink
          to="/profile"
          activeClassName={s.activeLink}
          // style={({ isActive }) => ({ color: isActive ? "violet" : "white" })}
        >
          Profile
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/users" activeClassName={s.activeLink}>
          Users
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          News
        </NavLink>
      </div>
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          Music
        </NavLink>
      </div>
      <br />
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          Settings
        </NavLink>
      </div>
      <br />
      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/friends" activeClassName={s.activeLink}>
          Friends <br />
          <img src={img} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
