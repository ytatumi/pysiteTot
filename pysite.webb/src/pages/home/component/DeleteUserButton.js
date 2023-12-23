import { fetchData } from "./FetchUsers";

function DeleteUserButton({ userId, setData, setRegisteredData }) {
  const deleteUser = () => {
    fetch(`http://127.0.0.1:5000/api/users/${userId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          fetchData(setData, setRegisteredData); // Fetch data again to reflect the changes
        } else {
          console.log("Error deleting the user");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <button onClick={deleteUser}>Delete</button>
    </>
  );
}

export default DeleteUserButton;
