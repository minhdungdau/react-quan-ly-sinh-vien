
export default function Body({
  persons,
  handleShowRemove,
  setRemoveId,
  setModalAdd,
  setEditId,
  setEditMode
}) {
  //custom

  const personsList = persons.map((person) => (
    <tr key={person.id}>
      <td className="name">{person.name}</td>
      <td className="year">{person.yearOfBirth}</td>
      <td className="email">{person.email}</td>
      <td className="phone">{person.phone}</td>
      <td className="customize">
        <button
          className="edit-btn"
          onClick={() => {
            setModalAdd(true);
            setEditId(person.id);
            setEditMode(true)
          }}
        >
          <i className="fas fa-edit"></i>Chỉnh sửa
        </button>
        <button
          className="remove-btn"
          onClick={() => {
            handleShowRemove();
            setRemoveId(person.id);
          }}
        >
          <i className="fas fa-trash-alt"></i>Xóa
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <tbody>{personsList}</tbody>
    </>
  );
}
