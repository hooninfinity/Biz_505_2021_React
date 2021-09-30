import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todoList } = useTodoContext();

  const viewList = todoList.map(({ t_id, t_text, t_isComplete }) => {
    // map()안에 매개변수로 받고 아래에는 todo.t_text 이렇게 받았던것을 직접 다 받고 아래에는 t_text로 쓰기
    return (
      <TodoItem
        key={t_id}
        t_id={t_id}
        t_text={t_text}
        t_isComplete={t_isComplete}
      />
    );
  });

  return <div>{viewList}</div>;
}

export default TodoList;
