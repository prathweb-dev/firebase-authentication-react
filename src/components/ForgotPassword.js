import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"
function ForgotPassword() {
  const emailRef = useRef();
  //   const passwordRef = useRef();
  //const passwordConfirmRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    // if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //   return setError("Passwords do not match");
    // }

    try {
      setMessage("");
      setError("");
      setLoading(true);
      //   await login(emailRef.current.value, passwordRef.current.value);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <div class="container">
        <div class="screen">
          <div class="screen__content">
            <h2 className="text-center mb-4 password">Password Reset</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <form class="login" onSubmit={handleSubmit}>
              <div class="login__field">
                <i class="login__icon">
                  <FontAwesomeIcon icon={faUser} />
                </i>
                <input type="email" class="login__input" placeholder="Email" ref={emailRef} required />
              </div>
              <button class="button login__submit" disabled={loading} >
                <span class="button__text">Reset Password</span>
                <i class="button__icon fas fa-chevron-right">
                  <FontAwesomeIcon icon={faChevronCircleRight} />
                </i>
              </button>
            </form>
            <div className="w-100 text-center mt-3">
              <Link to="/login">Login</Link>
            </div>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
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
    </>
  );
}

export default ForgotPassword;
