import logo from "./logo.svg";
import "./App.css";
import "./css/menu.css";
import MainNav from "./comps/MainNav";
import Home from "./comps/Home";
import About from "./comps/About";
import BBsWrite from "./comps/BBsWrite";

// BrowserRouter
// react에서 navigation을 구현할때 navigation에 포함될
// 컴포넌트들을 감싸는 Super Navi 컴포넌트
//
// Link
// Navigation Menu를 구현할때 사용하는 컴포넌트
// 실제 rendering이 되면 a tag로 변환되는 컴포넌트
// React에서는 a tag 사용하여 page를 전환하는 코드를 사용하지 않는다
//
// Route
// navigation의 menu를 선택했을때
// 선택적으로 컴포넌트를 나타나게 하는 도구
// 이 컴포넌트를 사용하여 Home, About, BBsWrite 컴포넌트와
// Link 컴포넌트를 연결하기
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  /**
   * Navigation menu 설정할때
   * Link 또는 NavLink 컴포넌트를 사용한다
   *
   * NaveLink를 사용하면
   * NavLink에 의해 활성화된 페이지가 열리면
   * menu style을 지정하여 어떤 메뉴가 활성화 된 것인지를
   * 표현할 수 있다
   * activeStyle={스타일변수}
   * activeClassName="클래스명"
   */
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3>나의 React 프로젝트</h3>
        </header>
        <MainNav />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/bbs" component={BBsWrite} exact />
        <Route path="/bbs/write" component={BBsWrite} />
      </div>
    </BrowserRouter>
  );
}

export default App;
