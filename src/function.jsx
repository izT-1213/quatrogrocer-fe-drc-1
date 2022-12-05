import Axios from "axios";

async function LoginFunc(email, pass) {
  try {
    const response = await Axios.post(
      "http://localhost:5000/quatro_user/login",
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
      "http://localhost:5000/quatro_user/create",
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

async function FetchUser(userId) {
  try {
    const response = await Axios.post(
      `http://localhost:5000/quatro_user/search?user_id=${userId}`
    );
    return response.data.result;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

async function SearchProduct(product) {
  try {
    const response = await Axios.get(
      "http://localhost:5000/quatro_product/get",
      {
        params: { product: product.toString() },
      }
    );
    console.log(response.data.result);
    return response.data.result;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

async function GetUserAddress(user_id, address_id) {
  debugger;
  try {
    const response = await Axios.get(
      "http://localhost:5000/quatro_address/get",
      {
        params: { user_id: user_id, address_id: address_id },
      }
    );
    debugger;
    return response.data.result;
  } catch (err) {
    console.log(err.response);
    return err.response;
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
    console.log(addLine1);
    const response = await Axios.post(
      "http://localhost:5000/quatro_address/create",

      // { withCredentials: true }, //hassif port 3002

      {
        address_line_1: addLine1,
        address_line_2: addLine2,
        address_line_3: addLine3,
        postcode: postcode,
        state: state,
        user_id: userId,
      }
    );
    return response.status;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
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
      //hassif port 3002
      {
        address_line_1: addLine1,
        address_line_2: addLine2,
        address_line_3: addLine3,
        postcode: postcode,
        state: state,
        address_id: addressId,
      }
    );
    return response.status;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

async function DeleteAddressFunc(address_id) {
  try {
    console.log(address_id);
    const response = await Axios.delete(
      `http://localhost:5000/quatro_address/delete?address_id=${address_id}`
    );
    return response.status;
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
    return response.data.result;
  } catch (err) {
    console.log(err.response);
  }
}

async function FetchDiscountProduct() {
  try {
    const response = await Axios.get(
      "http://localhost:5000/quatro_product_discount/get"
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
  date_of_birth,
  email,
  oldPassword,
  user_id
) {
  try {
    await Axios.post(
      "http://localhost:5000/quatro_user/update",

      {
        first_name: first_name,
        last_name: last_name,
        date_of_birth: date_of_birth,
        email: email,
        oldPassword: oldPassword,
        user_id: user_id,
      } //hassif port 3002
    );
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

async function UpdatePasswordFunc(oldPassword, password, user_id) {
  console.log(password ? true : false);
  try {
    await Axios.post(
      "http://localhost:5000/quatro_user/update_password",

      {
        oldPassword: oldPassword,
        password: password,
        user_id: user_id,
      } //hassif port 3002
    );
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

async function AddToCartFunc(user_id, product_id, product_quantity) {
  try {
    const response = await Axios.post(
      "http://localhost:5000/quatro_cart/create",
      {
        user_id: user_id,
        product_id: product_id,
        product_quantity: product_quantity,
      } //hassif port 3002
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

async function AddToCartDiscFunc(
  user_id,
  discount_product_id,
  product_quantity
) {
  try {
    await Axios.post(
      "http://localhost:5000/quatro_cart/create_discount",

      {
        user_id: user_id,
        discount_product_id: discount_product_id,
        product_quantity: product_quantity,
      } //hassif port 3002
    );
  } catch (err) {
    console.log(err.response.data);
  }
}

async function FetchTransaction(user_id) {
  try {
    const response = await Axios.get(
      "http://localhost:5000/quatro_transaction/get_details/" + user_id
      //{ withCredentials: true }
    );
    return response.data.result;
  } catch (err) {
    console.log(err.response);
  }
}

async function CheckoutProcess(user_id) {
  try {
    const response1 = await Axios.post(
      // "https://api.quatrogrocer.one/quatro_cart/push"
      "http://localhost:5000/quatro_cart/push",
      { user_id: user_id }
    );

    if (response1.status === 200) {
      try {
        const response2 = await Axios.post(
          // "https://api.quatrogrocer.one/quatro_transaction/update"
          "http://localhost:5000/quatro_transaction/update",
          { user_id: user_id }
        );

        if (response2.status === 200) {
          try {
            const response = await Axios.post(
              // "https://api.quatrogrocer.one/quatro_transaction/checkout"
              "http://localhost:5000/quatro_transaction/checkout",
              { user_id: user_id }
            );
            console.log(response.data.result);
            return response.data.result;
          } catch (err) {
            console.log(err.response);
          }
        }
      } catch (err) {
        console.log(err.response);
      }
    }
  } catch (err) {
    console.log(err.response);
  }
}

async function DeleteCart(user_id) {
  try {
    await Axios.post(
      // "https://api.quatrogrocer.one/quatro_cart/delete"
      "http://localhost:5000/quatro_cart/delete",
      { user_id: user_id }
    );
  } catch (err) {}
}

async function PaidCheckout(user_id) {
  try {
    const response = await Axios.post(
      // "https://api.quatrogrocer.one/quatro_transaction/update_payment"
      "http://localhost:5000/quatro_transaction/update_payment",
      { user_id: user_id }
    );
    return response;
  } catch (err) {
    console.log(err.response);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export {
  // GetPasswordFunc,
  LoginFunc,
  RegisterFunc,
  FetchUser,
  GetUserAddress,
  CreateAddressFunc,
  FetchProduct,
  FetchDiscountProduct,
  SearchProduct,
  UpdateAddressFunc,
  DeleteAddressFunc,
  UpdateProfileFunc,
  UpdatePasswordFunc,
  AddToCartFunc,
  AddToCartDiscFunc,
  FetchTransaction,
  CheckoutProcess,
  DeleteCart,
  PaidCheckout,
};
