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




// var axios = require('axios');
// var FormData = require('form-data');
// var fs = require('fs');
// var data = new FormData();
// data.append('photo', fs.createReadStream('/Users/mojtaba/Desktop/biareh-server/public/img/users/user-1.jpg'));

// var config = {
//   method: 'patch',
//   url: 'http://127.0.0.1:4000/api/v1/users/updateMe',
//   headers: { 
//     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTlhYWM4NTgwYzQ5ZDY4YjYyNTM1ZSIsImlhdCI6MTYwOTE0OTEzMiwiZXhwIjoxNjE2OTI1MTMyfQ.CowfZZrO1VUIOq32C4cyIA8A4yK2qP7W6i-kMmQNb48', 
//     'Cookie': 'jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTlhYWM4NTgwYzQ5ZDY4YjYyNTM1ZSIsImlhdCI6MTYwOTE0OTE0NCwiZXhwIjoxNjE2OTI1MTQ0fQ.ofJQo6Ja13QUYUyI7xRs6ufTdgktsaZZwyQ-P4Q0t2Y', 
//     ...data.getHeaders()
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
