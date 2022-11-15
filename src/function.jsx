import Axios from "axios";

async function LoginFunc(email, pass) {
  try {
    await Axios.post("http://localhost:3001/quatro_user/login", {
      email: email,
      password: pass,
    });
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

async function RegisterFunc(email, pass) {
  await Axios.post("http://localhost:3002 /quatro_user/create", {
    email: email,
    password: pass,
  }).then((response) => {
    console.log(response.message);
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export { LoginFunc, RegisterFunc };
