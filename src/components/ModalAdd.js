import { useState } from "react";
export default function ModalAdd({ setModalVisible, persons, setPersons, newID, setNewID }) {
  const [newPerson, setNewPerson] = useState({});

  function changeName(e) {
    let input = e.target.value;
    let clone = { ...newPerson };
    clone.name = input;
    setNewPerson(clone);
  }

  function changeYear(e) {
    let input = e.target.value;
    let clone = { ...newPerson };
    clone.yearOfBirth = input;
    setNewPerson(clone);
  }

  function changeEmail(e) {
    let input = e.target.value;
    let clone = { ...newPerson };
    clone.email = input;
    setNewPerson(clone);
  }

  function changePhone(e) {
    let input = e.target.value;
    let clone = { ...newPerson };
    clone.phone = input;
    setNewPerson(clone);
  }

  function addNew() {
    let clone = { ...newPerson };
    clone.id = newID;
    setNewPerson(clone);
    console.log(clone);
    setPersons([clone, ...persons]);

    setNewID(newID + 1);
  }

  const Render = (
    <form method="get" className="form-add">
      <div className="row">
        <label htmlFor="name">
          Họ tên <span className="require">*</span>
        </label>
        <input type="text" id="name" required onChange={(e) => changeName(e)} />
      </div>
      <div className="row">
        <label htmlFor="year">Năm sinh</label>
        <input type="text" id="year" onChange={(e) => changeYear(e)} />
      </div>
      <div className="row">
        <label htmlFor="email">
          Email <span className="require">*</span>
        </label>
        <input
          type="email"
          id="email"
          required
          onChange={(e) => changeEmail(e)}
        />
      </div>
      <div className="row">
        <label htmlFor="phone">
          Phone <span className="require">*</span>
        </label>
        <input
          type="text"
          id="phone"
          required
          onChange={(e) => changePhone(e)}
        />
      </div>
      <div className="btn-row">
        <button
          className="btn back-btn"
          type="button"
          onClick={() => setModalVisible(false)}
        >
          <i className="fas fa-chevron-left" /> Quay lại
        </button>
        <button
          className="btn save-btn"
          type="button"
          onClick={() => {
            addNew();
            setModalVisible(false);
          }}
        >
          <i className="fas fa-save" /> Lưu
        </button>
      </div>
    </form>
  );

  return (
    <div className="modal-container">
      <h1>Thêm mới học viên</h1>
      {Render}
    </div>
  );
}
