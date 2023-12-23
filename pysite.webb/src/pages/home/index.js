import React, { useState, useEffect } from "react";
import Alert from "./component/Alert";
import { fetchData } from "./component/FetchUsers";
import DeleteUsersButton from "./component/DeleteUsersButton";
import DeleteUserButton from "./component/DeleteUserButton";
import AddUserButton from "./component/AddUserButton";
import UpdateUserButton from "./component/UpdateUserButton";
import UpdateUsersButton from "./component/UpdateUsersButton";

const Home = () => {
  const [data, setData] = useState(null);
  const [newUser, setNewUser] = useState({ name: "" });
  const [registeredData, setRegisteredData] = useState(null);

  useEffect(() => {
    fetchData(setData, setRegisteredData);
  }, []);

  return (
    <div className="App-header">
      <div className="PUT and Delete">
        <h1>User Registration </h1>
        {data ? (
          <>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <AddUserButton
                  newUser={newUser}
                  setNewUser={setNewUser}
                  data={data}
                  registeredData={registeredData}
                  setData={setData}
                  setRegisteredData={setRegisteredData}
                />
                {data.users !== registeredData.users && newUser.name !== "" ? (
                  <Alert text="Complete updating the users below before Adding User!" />
                ) : null}
                <br />
                <UpdateUsersButton
                  data={data}
                  setData={setData}
                  setRegisteredData={setRegisteredData}
                />
                <DeleteUsersButton
                  setData={setData}
                  setRegisteredData={setRegisteredData}
                />
              </li>
              {Object.keys(data.users).map((userId) => (
                <li key={userId}>
                  <UpdateUserButton
                    data={data}
                    setData={setData}
                    userId={userId}
                    setRegisteredData={setRegisteredData}
                  />
                  <DeleteUserButton
                    userId={userId}
                    setData={setData}
                    setRegisteredData={setRegisteredData}
                  />
                  {data.users[userId].name === "" ? (
                    <Alert text="No data. Please fill in data!" />
                  ) : data.users[userId].name !==
                    registeredData.users[userId].name ? (
                    <Alert text="Click 'Update' to finalize changes!" />
                  ) : null}
                </li>
              ))}
            </ul>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
};

export default Home;
