/* eslint-disable */
import axios from "axios";
import { showAlert } from "./alerts";

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

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/signup",
      data: {
        name,
        email,
        password,
        passwordConfirm,
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

/*

{
  "name": "Sign Up",
  "event": [
    {
      "listen": "test",
      "script": {
        "id": "4a5a1b58-6b97-4d86-9d49-719060cab8f5",
        "exec": [
          "pm.environment.set(\"jwt\", pm.response.json().token);"
        ],
        "type": "text/javascript"
      }
    }
  ],
  "request": {
    "method": "POST",
    "header": [
      {
        "key": "Content-Type",
        "name": "Content-Type",
        "value": "application/json",
        "type": "text"
      }
    ],
    "body": {
      "mode": "raw",
      "raw": "{\n\t\"name\": \"Jonas\",\n    \"email\": \"jonas@mailsac.com\",\n\t\"password\": \"pass1234\",\n\t\"passwordConfirm\": \"pass1234\"\n}"
    },
    "url": {
      "raw": "{{URL}}api/v1/users/signup",
      "host": ["{{URL}}api"],
      "path": ["v1", "users", "signup"]
    }
  },
  "response": []
},


*/
