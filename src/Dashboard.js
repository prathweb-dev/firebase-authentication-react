import React, { useState } from "react";
import { Card, Alert, Button } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./contexts/MovieContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons"
import './App.css'
function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to logout");
    }
  };
  const navbar = {
    width: "100%",
    background: "linear-gradient(90deg, #5d54a4, #7c78b8)",
    padding: "20px 10px",
    boxSizing: "border-box",
  }
  const title = {
    marginRight: "auto",
    fontWeight: "bold",
    letterSpacing: "1px",
    fontSize: "1.2em",
    listStyle: "none",
    color: "#333",
    marginLeft: "5px",
    cursor: "pointer"
  }
  const uli = {
    display: "flex",
    margin: "0 auto",
    maxWidth: "960px",
    alignItems: "center",

  }
  const email = currentUser.email;
  const name = email.substring(0, email.indexOf('@'));
  console.log(name);
  return (
    <>
      <nav style={navbar}>
        <ul style={uli}>
          <FontAwesomeIcon icon={faUser} />
          <li style={title}>{name}</li>
          <li style={{ listStyle: "none" }}>
            <Button style={{ marginLeft: "16px", color: "#333" }} onClick={handleLogout}>
              Log Out
            </Button>
            <Button style={{ marginLeft: "16px", background: "#000" }}>
              <Link to="/update-profile" style={{ background: "#000", textDecoration: "none", color: "#fff" }}>
                Update Profile
              </Link>
            </Button>
          </li>
        </ul>

      </nav>
      <MovieProvider>
        <div className="App">
          <AddMovie />
          <MovieList />
        </div>
      </MovieProvider>
    </>
  );
}

export default Dashboard;
