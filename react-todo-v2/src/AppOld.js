import React from "react";
import TodoInput from "./comps/TodoInput";

export default function AppOld() {
  return (
    <AppContextProvider>
      <main className="todo_main_layout">
        <div>오늘할일</div>
        <section>
          <TodoInput />
        </section>
        <section>
          <TodoInput />
        </section>
      </main>
    </AppContextProvider>
  );
}
