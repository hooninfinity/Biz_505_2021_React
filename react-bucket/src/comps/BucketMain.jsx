import React from "react";
import "../css/Bucket.css";
import moment from "moment";

function BucketMain() {
  const bbs = {
    b_date: moment().format("YYYY[-]MM[-]DD"),
    b_time: moment().format("HH:mm:ss"),
  };
  return (
    <div>
      <div className="main_input">
        <input type="text" placeholder="이번주에는 무엇을" />
      </div>
      <table className="main_list">
        <tr>
          <th>FLAG</th>
          <th>날짜</th>
          <th>BUCKET</th>
          <th>완료</th>
          <th>취소</th>
        </tr>
        <tr>
          <td>일반</td>
          <td>
            {bbs.b_time}&nbsp;
            {bbs.b_date}
          </td>
          <td>리액트 정복</td>
          <td>
            {bbs.b_time}&nbsp;
            {bbs.b_date}
          </td>
          <td>
            <input type="checkbox" />
          </td>
        </tr>
      </table>
    </div>
  );
}

export default BucketMain;
