import React from "react";
import "./view.css";

/**
 * View.jsx
 * Javascript Extention React 문법형 JS 확장편
 *
 * @returns
 */
function View() {
  return (
    <div className="bbs_view">
      <div>
        <label>작성일</label>
        <span></span>
      </div>
      <div>
        <label>작성시각</label>
        <span></span>
      </div>
      <div>
        <label>글쓴이</label>
        <span></span>
      </div>
      <div>
        <label>제목</label>
        <span></span>
      </div>
      <div>
        <label>내용</label>
        <span></span>
      </div>
    </div>
  );
}

export default View;
