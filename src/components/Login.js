import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faLock, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
import './Login.css'
function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  //const passwordConfirmRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to sign in");
    }

    setLoading(false);
  }

  return (
    <>
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            {error && <Alert variant="danger">{error}</Alert>}
            <form class="login" onSubmit={handleSubmit}>
              <div class="login__field">
                <i class="login__icon">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <input type="email" class="login__input" placeholder="Email" ref={emailRef} required />
              </div>
              <div class="login__field">
                <i class="login__icon">
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <input type="password" class="login__input" placeholder="Password" ref={passwordRef} required />
              </div>
              {!loading &&
                <button class="button login__submit" disabled={loading} >
                  <span class="button__text">Log In Now</span>
                  <i class="button__icon">
                    <FontAwesomeIcon icon={faChevronCircleRight} />
                  </i>
                </button>
              }
              {loading && <button className="button login__submit" disabled>
                <span className="button__text">Loading...</span>
                <i className="button__icon">
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                </i>
              </button>}
            </form>
            <div class="social-login">
              <h3>log in via</h3>
              <div class="social-icons">
                <a href="#" class="social-login__icon">
                  <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" />
                </a>
                <a href="#" class="social-login__icon">
                  <img src="https://img.icons8.com/material-outlined/24/000000/facebook-new.png" />
                </a>
                <a href="#" class="social-login__icon">
                  <img src="https://img.icons8.com/material-outlined/24/000000/twitter.png" />
                </a>
              </div>
            </div>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
      <div className="w-100 text-center mt-3">
        <Link to="/forgot-password">Forgot Password ?</Link>
      </div>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

export default Login;
