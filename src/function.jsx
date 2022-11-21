import Axios from "axios";

async function LoginFunc(email, pass) {
  try {
    await Axios.post("http://localhost:5000/quatro_user/login", {
      email: email,
      password: pass,
    });
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

async function RegisterFunc(email, pass) {
  try {
    const response = await Axios.post(
      "http://localhost:5004/quatro_user/create",
      {
        email: email,
        password: pass,
      }
    );
    console.log(response);
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
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
      "http://localhost:5000/quatro_address/create",
      { withCredentials: true }, //hassif port 3002
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

async function UpdateAddressFunc(
  addLine1,
  addLine2,
  addLine3,
  postcode,
  state,
  addressId
) {
  try {
    const response = await Axios.post(
      "http://localhost:5000/quatro_address/update_details",
      { withCredentials: true }, //hassif port 3002
      {
        address_line_1: addLine1,
        address_line_2: addLine2,
        address_line_3: addLine3,
        postcode: postcode,
        state: state,
        address_id: addressId,
      }
    );
    console.log(response);
  } catch (err) {
    console.log(err.response.data);
  }
}

async function FetchProduct() {
  try {
    const response = await Axios.get(
      "http://localhost:5000/quatro_product/get"
      //{ withCredentials: true }
    );
    console.log(response.data.result);
    return response.data.result;
  } catch (err) {
    console.log(err.response);
  }
}

async function UpdateProfileFunc(
  first_name,
  last_name,
  email,
  phone_number,
  date_of_birth,
  oldPassword,
  password,
  user_id
) {
  try {
    const response = await Axios.post(
      "http://localhost:5000/quatro_user/update",
      { withCredentials: true }, //hassif port 3002
      {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone_number: phone_number,
        date_of_birth: date_of_birth,
        oldPassword: oldPassword,
        password: password,
        user_id: user_id,
      }
    );
    console.log(response);
  } catch (err) {
    console.log(err.response.data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export {
  LoginFunc,
  RegisterFunc,
  CreateAddressFunc,
  FetchProduct,
  UpdateAddressFunc,
  UpdateProfileFunc,
};
