import React, { useState } from "react";
import "./login.css";
import errorIcon from "../Design_Material/images/icon-error.svg";

export default function Login() {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    let id = e.target.id;
    if (id === "fname_input") {
      setfname(value);
    } else if (id === "lname_input") {
      setlname(value);
    } else if (id === "email_input") {
      setemail(value);
    } else if (id === "password_input") {
      setpassword(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (fname === "") {
      document.getElementById("fname_span").style.visibility = "visible";
      document.getElementById("fname_icon").style.visibility = "visible";
    } else {
      document.getElementById("fname_span").style.visibility = "hidden";
      document.getElementById("fname_icon").style.visibility = "hidden";
    }

    if (lname === "") {
      document.getElementById("lname_span").style.visibility = "visible";
      document.getElementById("lname_icon").style.visibility = "visible";
    } else {
      document.getElementById("lname_span").style.visibility = "hidden";
      document.getElementById("lname_icon").style.visibility = "hidden";
    }

    if (
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      document.getElementById("email_span").style.visibility = "visible";
      document.getElementById("email_icon").style.visibility = "visible";
    } else {
      document.getElementById("email_span").style.visibility = "hidden";
      document.getElementById("email_icon").style.visibility = "hidden";
    }

    if (password === "") {
      document.getElementById("password_span").style.visibility = "visible";
      document.getElementById("password_icon").style.visibility = "visible";
    } else {
      document.getElementById("password_span").style.visibility = "hidden";
      document.getElementById("password_icon").style.visibility = "hidden";
    }
  };

  return (
    <div className="formWrapper">
      <form className="loginForm formChildren">
        <div className="errorWrapper">
          <input
            type="text"
            placeholder="First Name"
            id="fname_input"
            className="loginInput"
            value={fname}
            onChange={handleChange}
          ></input>
          <img
            src={errorIcon}
            alt="error"
            className="errorIcon"
            id="fname_icon"
          />
        </div>
        <p className="errorSpan" id="fname_span">
          <em>First name cannot be empty</em>
        </p>
        <div className="errorWrapper">
          <input
            type="text"
            placeholder="Last Name"
            id="lname_input"
            className="loginInput"
            value={lname}
            onChange={handleChange}
          />
          <img
            src={errorIcon}
            alt="error"
            className="errorIcon"
            id="lname_icon"
          />
        </div>
        <p className="errorSpan" id="lname_span">
          <em>Last name cannot be empty</em>
        </p>
        <div className="errorWrapper">
          <input
            type="email"
            placeholder="Email Address"
            id="email_input"
            className="loginInput"
            value={email}
            onChange={handleChange}
          />
          <img
            src={errorIcon}
            alt="error"
            className="errorIcon"
            id="email_icon"
          />
        </div>
        <p className="errorSpan" id="email_span">
          <em>Looks like this is not an email</em>
        </p>
        <div className="errorWrapper">
          <input
            type="password"
            placeholder="Password"
            id="password_input"
            className="loginInput"
            value={password}
            onChange={handleChange}
            onKeyDown={handleChange}
            tabIndex="6"
          />
          <img
            src={errorIcon}
            alt="error"
            className="errorIcon"
            id="password_icon"
          />
        </div>
        <p className="errorSpan" id="password_span">
          <em>First name cannot be empty</em>
        </p>

        <button type="submit" onClick={handleSubmit} className="submitButton">
          CLAIM YOUR FREE TRIAL
        </button>
        <p className="disclaimer">
          by clicking the button you are agreeing to our{" "}
          <span className="terms">Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
