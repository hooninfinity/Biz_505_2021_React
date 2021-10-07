import "../css/LoginForm.css";
import { useState } from "react";
import { useUserContext } from "../context/UserContextProvider";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const { setUser } = useUserContext();
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const history = useHistory();

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async (e) => {};

  return (
    <div className="login_form">
      <input
        name="userid"
        placeholder="아이디를 입력하세요"
        onChange={onChange}
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호를 입력하세요"
        onChange={onChange}
      />
      <button onClick={onLogin}>로그인</button>
    </div>
  );
}

export default LoginForm;
