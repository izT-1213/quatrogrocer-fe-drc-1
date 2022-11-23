import Nav from "./Components/navbar/navbar.jsx";
import Footer from "./Components/footer/footer.jsx";
import Layout from "./Components/context/Layout.js";
import Home from "./Pages/Home/home.jsx";
import ProductPage from "./Pages/ProductPage/product-page.jsx";
// import BestSellers from "./Pages/BestSellers";
// import Deals from "./Pages/Deals";
import AboutPage from "./Pages/About/about.jsx";
import CheckoutPage from "./Pages/Checkout/checkout";
import UserProfilePage from "./Pages/ProfilePage/profile.jsx";
import EditProfilePage from "./Pages/ProfilePage/EditProfilePage/edit-profile.jsx";
import SignUpPage from "./Pages/SignUp/signup.jsx";
import LoginPage from "./Pages/Login/login.jsx";
import ErrorPage from "./Pages/404-Error-page/error.jsx";
import ConstructionPage from "./Pages/ConstructionPage/construction.jsx";
import YourShippingAddressPage from "./Pages/YourShippingAddressPage/address.jsx";
import AddAddressPage from "./Pages/AddAddressPage/add-address.jsx";
import NoResultPage from "./Pages/NoResultPage/no-result";
import ProductDetailsPage from "./Pages/ProductDetailsPage/product-detail-page";
import EditAddressPage from "./Pages/EditAddressPage/edit-address.jsx";
import CategoryPage from "./Pages/CategoryPage/category.jsx";
import PaymentSuccessPage from "./Pages/PaymentSuccessPage/payment-success.jsx";
import RequireAuth from "./Components/context/RequireAuth.js";
import { Route, Routes } from "react-router-dom";
import "./App.css";

////encode url
import React from "react";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*
          <Route path="/best-sellers" element={<BestSellers />} />
        <Route path="/deals-&-promotions" element={<Deals />} />*/}

          {/* Public pages */}
          <Route path="/" element={<Home />} />
          <Route path="marketplace" element={<ProductPage />} />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route
            path="profile/addresses"
            element={<YourShippingAddressPage />}
          />
          <Route path="error" element={<ErrorPage />} />
          <Route path="maintenance" element={<ConstructionPage />} />

          <Route
            path="cart/checkout/payment-success"
            element={<PaymentSuccessPage />}
          />

          <Route path="no-result" element={<NoResultPage />} />
          <Route
            path="product-details/:product_name"
            element={<ProductDetailsPage />}
          />
          <Route path="about" element={<AboutPage />} />

          {/* Public pages but not available if not logged out */}
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />

          {/* Protected pages */}
          <Route element={<RequireAuth />}>
            <Route path="profile" element={<UserProfilePage />} />
            <Route path="address" element={<YourShippingAddressPage />} />
            <Route path="add-address" element={<AddAddressPage />} />
            <Route path="edit-address" element={<EditAddressPage />} />
            <Route path="cart/checkout" element={<CheckoutPage />} />
            <Route path="profile/edit-profile" element={<EditProfilePage />} />
            <Route
              path="profile/addresses"
              element={<YourShippingAddressPage />}
            />
            <Route
              path="cart/checkout/payment-success"
              element={<PaymentSuccessPage />}
            />
          </Route>

          {/* Error pages */}
          <Route path="error" element={<ErrorPage />} />
          <Route path="no-result" element={<NoResultPage />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
