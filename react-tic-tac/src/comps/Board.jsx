import React from "react";
import { RenderSquare } from "../modules/main";

function Board() {
  // RenderSquare를 바닐라 함수로 불러 사용하는 방법
  // return <div>{RenderSquare()}</div>;

  // RenderSquare를 컴포넌트로 사용하는 방법
  return (
    <div>
      <RenderSquare />
    </div>
  );
}

export default Board;
