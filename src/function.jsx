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
  await Axios.post("http://localhost:3001/quatro_user/create", {
    email: email,
    password: pass,
  }).then((response) => {
    console.log(response.message);
  });
}

async function CreateAddressFunc(
  addLine1,
  addLine2,
  addLine3,
  postcode,
  state,
  userId
) {
  try {
    const response = await Axios.post(
      "http://localhost:3002/quatro_address/create", //hassif port 3002
      {
        address_line_1: addLine1,
        address_line_2: addLine2,
        address_line_3: addLine3,
        postcode: postcode,
        state: state,
        user_id: userId,
      }
    );
    console.log(response);
  } catch (err) {
    console.log(err.response.data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export { LoginFunc, RegisterFunc, CreateAddressFunc };
