import React from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("https://freetestapi.com/api/v1/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="table-responsive table-wrapper">
        <table className="table table-striped">
          <thead className="table-header">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Occupation</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
