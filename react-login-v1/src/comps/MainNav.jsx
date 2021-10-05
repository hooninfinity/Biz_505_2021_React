import React from "react";
import { NavLink } from "react-router-dom";
import "../css/MainNav.css";

function MainNav() {
  return (
    <nav className="main_nav">
      <NavLink to="/" exact>
        Home
      </NavLink>
      <NavLink to="/notice" exact>
        공지사항
      </NavLink>
      <NavLink to="/board" exact>
        자유게시판
      </NavLink>
      <NavLink to="/login" exact>
        로그인
      </NavLink>
      <NavLink to="join" exact>
        회원가입
      </NavLink>
    </nav>
  );
}

export default MainNav;
