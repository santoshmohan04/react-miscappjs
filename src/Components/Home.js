import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import userimg from "../assets/images/img_avatar3.png"
import { fetchUsers } from '../redux'

export default function Home() {
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [usersPerPage] = React.useState(10);
  const [selecteduser, setSelectedUser] = React.useState(null);

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch]);

  // Logic for pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelectedUser = (data) => {
    setSelectedUser(data);
  }

  return (
    <React.Fragment>
      <div className="mt-5">
        <h1 className="text-center">Users Data</h1>
        <table className="table table-bordered table-hover">
          <thead className="sticky-header table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody className="scrollable-content">
            {currentUsers.map((t) => (
              <tr
                key={t.id}
                data-bs-toggle="modal"
                data-bs-target="#userinfoModal"
                onClick={() => handleSelectedUser(t)}
              >
                <td>{t.id}</td>
                <td>{t.name}</td>
                <td>{t.email}</td>
                <td>{t.age}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <nav>
          <ul className="pagination justify-content-center">
            {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(
              (number) => (
                <li
                  key={number}
                  className={`page-item ${
                    currentPage === number + 1 ? "active" : ""
                  }`}
                >
                  <button
                    onClick={() => paginate(number + 1)}
                    className="page-link"
                  >
                    {number + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>

      {/* The Modal */}
      <div className="modal" id="userinfoModal">
        <div className="modal-dialog">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">{selecteduser?.name}</h4>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            {/* Modal body */}
            <div className="modal-body">
            <div className="card" style={{width:450 + 'px'}}>
              <img className="card-img-top" src={userimg} alt="user profile" height={400 + 'px'}/>
              <div className="card-body">
                <h4 className="card-title">{selecteduser?.occupation}</h4>
                <p className="card-text d-inline">{selecteduser?.hobbies.toString()}</p>
              </div>
            </div>
            </div>

            {/* Modal footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
