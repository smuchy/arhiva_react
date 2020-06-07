import axios from "axios";
// import { LoginUser } from "../API/loginUser-API";

export const RegisterUser = (input) => {
  const user = {
    FirstName: input.first_name,
    LastName: input.last_name,
    StudentId: parseInt(input.id),
    Year: parseInt(input.year),
    Birthday: input.birthday,
    Email: input.email,
    Password: input.password,
  };

  return axios
    .post("api/user", JSON.stringify(user), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("jes");
    })
    .catch((error) => {
      console.log(error);
    });
};
