/* eslint-disable */
import axios from "axios";
import { showAlert } from "./../api/alerts";
import FormData from 'form-data';
import fs from 'fs';

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



const data = new FormData();
data.append('photo', fs.createReadStream('/Users/mojtaba/Desktop/biareh-server/public/img/users/user-2.jpg'));

var config = {
  method: 'patch',
  url: 'http://127.0.0.1:4000/api/v1/users/updateMe',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZThjOGY5NGUzM2JiYjdkYTk4MjgyNiIsImlhdCI6MTYwOTA5MTMyNiwiZXhwIjoxNjE2ODY3MzI2fQ.CtBHmPyHV6764ltY-ZINVJ6FJJAdA6BTGyv0meVJ-SI', 
    'Cookie': 'Cookie_1=value; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZThjOGY5NGUzM2JiYjdkYTk4MjgyNiIsImlhdCI6MTYwOTA5MTMyNiwiZXhwIjoxNjE2ODY3MzI2fQ.CtBHmPyHV6764ltY-ZINVJ6FJJAdA6BTGyv0meVJ-SI', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
