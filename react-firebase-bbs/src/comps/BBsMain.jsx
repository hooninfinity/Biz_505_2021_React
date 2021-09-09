import React from "react";
import moment from "moment";
import UUID from "react-uuid";

function BBsMain() {
  const bbs = {
    b_date: moment().format("YYYY[-]MM[-]DD"),
    b_time: moment().format("HH:mm:ss"),
  };
  return (
    <table className="main_table">
      <tr>
        <th>작성일자</th>
        <th>작성시각</th>
        <th>작성자</th>
        <th>제목</th>
      </tr>
      <tr>
        <td>{bbs.b_date}</td>
        <td>{bbs.b_time}</td>
        <td>홍길동</td>
        <td>BBS</td>
      </tr>
    </table>
  );
}

export default BBsMain;
