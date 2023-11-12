import { fetchData } from "./FetchUsers";

function UpdateUsersButton({ data, setData, setRegisteredData }) {
  const updateUsers = () => {
    fetch("http://127.0.0.1:5000/api/users", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.users),
    })
      .then((response) => {
        if (response.ok) {
          // Here we call fetchdata to retrieve the updated data!
          fetchData(setData, setRegisteredData);
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
      <button onClick={updateUsers}>Update All</button>
    </>
  );
}

export default UpdateUsersButton;
