import UUID from "react-uuid";
import "../css/AddressInput.css";

// 방법은 여러가지 있다. props를 통해 통째로 받거나, stateGroup을 받아 분해하거나
// function AddressInput(props) {
// 	const {stateGroup} = props;
function AddressInput({ stateGroup }) {
  const { address, setAddress, addrBook, setAddrBook } = stateGroup;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const addrBookInsert = () => {
    setAddress({ ...address, a_id: UUID() });
    setAddrBook([...addrBook, address]);
  };

  return (
    <div className="input_box">
      <input
        value={address.a_name}
        name="a_name"
        placeholder="이름"
        onChange={onChangeHandler}
      />
      <input
        value={address.a_addr}
        name="a_addr"
        placeholder="주소"
        onChange={onChangeHandler}
      />
      <input
        value={address.a_tel}
        name="a_tel"
        placeholder="전화번호"
        onChange={onChangeHandler}
      />
      <input
        value={address.a_age}
        name="a_age"
        placeholder="나이"
        onChange={onChangeHandler}
      />
      <button onClick={addrBookInsert}>추가</button>
    </div>
  );
}

export default AddressInput;
