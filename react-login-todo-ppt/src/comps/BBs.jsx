import { useUserContext } from "../context/UserContextProvider";
import TodoMain from "../comps/TodoMain";
import TodoInput from "../comps/TodoInput";
import TodoList from "../comps/TodoList";

function BBs() {
  const { user } = useUserContext();

  return (
    <div>
      {/* <div>
        <h1>자유게시판</h1>
        <h3>USERID : {user.userid}</h3>
      </div> */}
      <TodoMain header="My TodoList" form={<TodoInput />}>
        <TodoList />
      </TodoMain>
    </div>
  );
}

export default BBs;
