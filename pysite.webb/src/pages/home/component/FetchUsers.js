export const fetchData = (setData, setRegisteredData) => {
  fetch("http://127.0.0.1:5000/api/users", {
    method: "GET",
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error fetching data");
      }
    })
    .then((newData) => {
      setData(newData);
      setRegisteredData(newData);
    })
    .catch((error) => {
      console.error(error);
    });
};
