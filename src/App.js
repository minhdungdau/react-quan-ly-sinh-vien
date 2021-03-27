import "./App.css";
import { useState } from "react";
import TableBody from "./components/TableBody";
import ModalAdd from "./components/ModalAdd";
import PERSONS from "./components/mockdata";
function App() {
  const [persons, setPersons] = useState(PERSONS);
  const [modalVisible, setModalVisible] = useState(false)
  
  const [newID, setNewID] = useState(PERSONS.length + 1);

  return (
    <>
    <div className="container">
      <h1>Danh sách học viên</h1>
      <div className="table-container">
        <button className="add-btn" onClick={() => setModalVisible(true)}>
          <i className="fas fa-plus-circle add-icon"></i> Thêm học viên
        </button>
        <table className="list-table">
          <thead>
            <tr>
              <th className="name">Họ tên</th>
              <th className="year">Năm sinh</th>
              <th className="email">Email</th>
              <th className="phone">Số điện thoại</th>
              <th className="customize"></th>
            </tr>
          </thead>
          <TableBody persons={persons} setPersons={setPersons} />
        </table>
      </div>
    </div>
    {modalVisible && <ModalAdd setModalVisible={setModalVisible} persons={persons} setPersons={setPersons} newID={newID} setNewID={setNewID}/>}
    </>
  );
}

export default App;
