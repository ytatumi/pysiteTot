import { fetchData } from "./FetchUsers";

function AddUserButton({
  newUser,
  setNewUser,
  data,
  registeredData,
  setData,
  setRegisteredData,
}) {
  const addUser = () => {
    // sendNewUser(newUser)
    fetch("http://127.0.0.1:5000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (response.ok) {
          // Here we call fetchdata to retrieve the updated data!
          fetchData(setData, setRegisteredData);
          setNewUser({ name: "" });
        } else {
          console.log("Error updating users");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <input
        type="text"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        placeholder="Name"
      />
      <button
        onClick={
          data.users === registeredData.users && newUser.name !== ""
            ? addUser
            : undefined
        }
      >
        Add User
      </button>
    </>
  );
}

export default AddUserButton;
