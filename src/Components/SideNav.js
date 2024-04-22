import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";

export default function SideNav() {
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink
                to="/chat"
                className={(isActive) =>
                  "nav-link d-flex align-items-center gap-2" +
                  (!isActive ? " active" : "")
                }
                aria-current="page"
              >
                <i className="bi bi-wechat"></i> Chat UI
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/bot"
                className={(isActive) =>
                  "nav-link d-flex align-items-center gap-2" +
                  (!isActive ? " active" : "")
                }
                aria-current="page"
              >
                <i className="bi bi-chat-square-text"></i> Chat Window
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/table"
                className={(isActive) =>
                  "nav-link d-flex align-items-center gap-2" +
                  (!isActive ? " active" : "")
                }
                aria-current="page"
              >
                <i className="bi bi-table"></i> Table View
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cards"
                className={(isActive) =>
                  "nav-link d-flex align-items-center gap-2" +
                  (!isActive ? " active" : "")
                }
                aria-current="page"
              >
                <i className="bi bi-card-text"></i> Card View
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
