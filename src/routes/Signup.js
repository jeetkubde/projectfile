import React, { useState } from "react";
import "../Components/SignUp.css";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendbtn = () => {
    const formdata = { name: name, email: email, password: password };

    axios
      .post("http://localhost:5000/users/signinto", formdata)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="signup-login">
      <form>
        <h1>SignUp Form</h1>
        <div className="ui form">
          <div className="field">
            <label>UserName</label>
            <input
              type="text"
              name="username"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="username"
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="button"
            className="fluid ui button"
            onClick={() => {
              sendbtn();
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
