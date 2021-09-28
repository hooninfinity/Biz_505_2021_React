import React from "react";

// 하나만 보냈으므로 props 사용하지말고 바로 추출
/**
 * forEach() 류 코드
 * 배열을 활용하는 JS필수 코드들
 * 배열.map() { return 값 } : 배열개수를 그대로 유지하면서 새로운 배열을 만들기
 * 배열.filter() { return boolean } : 어떤 조건에 맞는 리스트만 추출할때
 * 배열.forEach() { 새로운배열.push() } : 배열을 단순히 순서대로 연산 처리할때(많이는 안쓰임)
 */
function TodoList({ todoList }) {
  const viewList = todoList.map((todo) => {
    return (
      <tr>
        <td>{todo.t_id}</td>
        <td>{todo.t_date}</td>
        <td>{todo.t_text}</td>
      </tr>
    );
  });

  return (
    <table className="todo_list">
      <thead>
        <tr>
          <th>ID</th>
          <th>날짜</th>
          <th>TODO</th>
        </tr>
      </thead>
      <tbody>{viewList}</tbody>
    </table>
  );
}

export default TodoList;
