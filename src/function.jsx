import React, { useState } from "react";

function LoginFunc(username, pass) {
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001//quatro_user/login", {
      username: usernameLogin,
      password: passwordLogin,
    }).then((response) => {
      console.log(response);
    });
  };
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
