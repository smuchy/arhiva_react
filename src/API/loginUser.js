import axios from "axios";
// import { LoginUser } from "../API/loginUser-API";

export const LoginUser = (input, setAdmin) => {
  const user = {
    Email: input.email,
    Password: input.password,
  };
  return axios
    .post("api/user/login", JSON.stringify(user), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      localStorage.setItem("userAdmin", response.data.admin);
      setAdmin(response.data.admin);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
