import axios from "axios";

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
      console.log(response.data);
      localStorage.setItem("userAdmin", response.data.admin);
      return setAdmin(response.data.admin);
    })
    .catch((error) => {
      console.log(error);
    });
};
