import Axios from "axios";

async function LoginFunc(email, pass) {
  try {
    const response = await Axios.post(
      "http://localhost:5004/quatro_user/login",
      {
        email: email,
        password: pass,
      },
      { withCredentials: true }
    );
    console.log(response);
    return response;
  } catch (err) {
    return err.response.data;
  }
}

async function RegisterFunc(email, pass, fname, lname, dob, gender) {
  try {
    const response = await Axios.post(
      "http://localhost:5004/quatro_user/create",
      {
        email: email,
        password: pass,
        first_name: fname,
        last_name: lname,
        date_of_birth: dob,
        gender: gender,
      }
    );
  } catch (err) {
    return err.response.data;
  }
}

async function SearchProduct(keyword) {
  try {
    const response = await Axios.get(
      "http://localhost:5004/quatro_product/get",
      {
        params: { keyword: keyword.toString() },
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
      "http://localhost:5004/quatro_address/create",

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
    await Axios.post(
      "http://localhost:5004/quatro_address/update_details",

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
  } catch (err) {
    console.log(err.response.data);
  }
}

async function FetchProduct() {
  try {
    const response = await Axios.get(
      "http://localhost:5004/quatro_product/get"
      //{ withCredentials: true }
    );
    return response.data.result;
  } catch (err) {
    console.log(err.response);
  }
}

async function FetchDiscountProduct() {
  try {
    const response = await Axios.get(
      "http://localhost:5004/quatro_discount_product/get"
      //{ withCredentials: true }
    );
    return response.data.result;
  } catch (err) {
    console.log(err.response);
  }
}

async function UpdateProfileFunc(
  first_name,
  last_name,
  email,
  date_of_birth,
  oldPassword,
  password,
  user_id
) {
  try {
    await Axios.post(
      "http://localhost:5004/quatro_user/update",

      {
        first_name: first_name,
        last_name: last_name,
        email: email,
        date_of_birth: date_of_birth,
        oldPassword: oldPassword,
        password: password,
        user_id: user_id,
      },
      { withCredentials: true } //hassif port 3002
    );
  } catch (err) {
    console.log(err.response.data);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export {
  // GetPasswordFunc,
  LoginFunc,
  RegisterFunc,
  CreateAddressFunc,
  FetchProduct,
  FetchDiscountProduct,
  SearchProduct,
  UpdateAddressFunc,
  UpdateProfileFunc,
};
