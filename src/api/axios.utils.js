import axios from "axios";
import { showAlert } from "./alerts";

export const updateSettings = async (data, token) => {
  try {
    // const url = "/api/v1/users/updateMe";
    // type === 'password'
    //   ? '/api/v1/users/updateMyPassword'
    //   : '/api/v1/users/updateMe';

    const res = await axios({
      method: "PATCH",
      url: "/api/v1/users/updateMe",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data,
    });

    if (res.data.status === "success") {
      showAlert("success", `updated successfully!`);
    }
  } catch (err) {
    showAlert("error", err.response.data.message);
  }
};
