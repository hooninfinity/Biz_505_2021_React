import React from "react";
import moment from "moment";

function BBsDetail() {
  const bbs = {
    b_date: moment().format("YYYY[-]MM[-]DD"),
    b_time: moment().format("HH:mm:ss"),
  };
  return (
    <div>
      <div>
        <div>작성일자</div>
        <div>작성시각</div>
        <div>글쓴이</div>
        <div>제목</div>
        <div>내용</div>
      </div>
      <div>
        <div>{bbs.b_date}</div>
        <div>{bbs.b_time}</div>
        <div>홍길동</div>
        <div>리액트 BBS</div>
        <div>리액트 Firebase BBS</div>
      </div>
    </div>
  );
}

export default BBsDetail;
