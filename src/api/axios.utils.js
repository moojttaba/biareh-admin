/* eslint-disable */
import axios from "axios";
import { showAlert } from "./../api/alerts";

export const responseData = axios
  .get("/api/v1/products")
  .then((response) => response.data);

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        email,
        password,
      },
    });

    if (res.data.status === "success") {
      showAlert("success", "Logged in successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: "GET",
      url: "/api/v1/users/logout",
    });
    if ((res.data.status = "success")) location.reload(true);
  } catch (err) {
    console.log(err.response);
    showAlert("error", "Error logging out! Try again.");
  }
};

export const updateSettings = async (data, type) => {
  try {
    const url =
      type === "password"
        ? "/api/v1/users/updateMyPassword"
        : "/api/v1/users/updateMe";

    const res = await axios({
      method: "PATCH",
      url,
      data,
    });

    if (res.data.status === "success") {
      showAlert("success", `${type.toUpperCase()} updated successfully!`);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};

export const updateDateUser = async (name) => {
  try {
    axios({
      method: "PATCH",
      url: "/api/v1/users/updateMe",
      data: {
        name,
      },
    });

    // if (res.data.status === "success") {
    //   showAlert("success", `${type.toUpperCase()} updated successfully!`);
    // }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
