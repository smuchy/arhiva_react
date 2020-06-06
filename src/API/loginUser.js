import axios from "axios";
// import { LoginUser } from "../API/loginUser-API";

export const LoginUser = (input) => {
  return axios
    .post("api/user/login", {
      Email: input.email,
      Password: input.password,
    })
    .then((response) => {
      console.log("uspeh");
    })
    .catch((error) => {
      console.log(error);
    });
};
