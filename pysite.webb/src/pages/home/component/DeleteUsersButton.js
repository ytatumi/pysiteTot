import { fetchData } from "./FetchUsers";

function DeleteUsersButton({ setData, setRegisteredData }) {
  const deleteUsers = () => {
    fetch(`http://127.0.0.1:5000/api/users`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          fetchData(setData, setRegisteredData); // Fetch data again to reflect the changes
        } else {
          console.log("Error deleting users");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDeleteUsers = () => {
    const choice = window.confirm(
      "Are you sure you want to delete all the users below? "
    );
    if (choice) {
      deleteUsers();
    }
  };

  return (
    <>
      <button onClick={handleDeleteUsers}>Delete All</button>
    </>
  );
}

export default DeleteUsersButton;
