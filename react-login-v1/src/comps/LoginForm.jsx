import React from "react";
import "../css/LoginForm.css";

function LoginForm() {
  return (
    <div>
      <form>
        <input className="input_id" placeholder="아이디를 입력해주세요" />
        <input
          className="input_password"
          placeholder="비밀번호를 입력해주세요"
        />
      </form>
      <p></p>
      <div>
        <button>로그인</button>
      </div>
    </div>
  );
}

export default LoginForm;
