import logo from "./logo.svg";
import "./App.css";
import AddressInput from "./comps/AddressInput";
import AddressList from "./comps/AddressList";
import { useState } from "react";
import UUID from "react-uuid";
import BackImage from "../src/image/header_background.jpg";

function App() {
  // const backgroundStyle = {
  //   backgroundImage: `url(${BackImage})`,
  //   backgroundRepeat: `no-repeat`,
  //   backgroundAttachment: `scroll`,
  //   backgroundSize: "100%",
  // };

  // 주소 한개의 데이터를 저장할 state 선언하기
  const [address, setAddress] = useState({
    a_id: UUID(),
    a_name: "",
    a_tel: "",
    a_addr: "",
    a_age: "",
  });
  // List 데이터를 관리할 배열 state 선언하기
  const [addrBook, setAddrBook] = useState([]);
  const stateGroup = {
    address,
    setAddress,
    addrBook,
    setAddrBook,
  };

  return (
    <div className="App">
      <header className="App-header">React-Address-v3</header>
      <AddressInput stateGroup={stateGroup} />
      <AddressList addrBook={addrBook} />
    </div>
  );
}

export default App;
