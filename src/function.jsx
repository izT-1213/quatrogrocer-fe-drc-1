import React, { useState } from "react";
import Axios from "axios";

function LoginFunc(username, pass) {
  Axios.post("http://localhost:3001//quatro_user/login", {
    username: username,
    password: pass,
  }).then((response) => {
    console.log(response);
  });
}

function RegisterFunc(username, pass) {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001//quatro_user/create", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };
}

export default LoginFunc;
