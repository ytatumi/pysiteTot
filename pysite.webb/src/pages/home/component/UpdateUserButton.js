import { fetchData } from "./FetchUsers";

function UpdateUserButton({ data, setData, userId, setRegisteredData }) {
  const updateUser = () => {
    fetch(`http://127.0.0.1:5000/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.users[userId]),
    })
      .then((response) => {
        if (response.ok) {
          fetchData(setData, setRegisteredData); // Fetch data again to reflect the changes
        } else {
          console.log("Error updating the user");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // console.log({ userId, data });
  return (
    <>
      <input
        type="text"
        value={data.users[userId].name || ""}
        onChange={(e) => {
          setData({
            ...data,
            users: {
              ...data.users,
              [userId]: {
                ...data.users[userId],
                name: e.target.value,
              },
            },
          });
        }}
        placeholder="Name"
      />
      <button onClick={() => updateUser(userId)}>Update</button>
    </>
  );
}

export default UpdateUserButton;
