import axios from "axios";
// import { LoginUser } from "../API/loginUser-API";

export const RegisterUser = (input) => {
  return axios
    .post("api/user", {
      FirstName: input.first_name,
      LastName: input.last_name,
      StudentId: input.id,
      Email: input.email,
      Year: input.year,
      Birthday: input.birthday,
      Password: input.password,
    })
    .then((response) => {
      console.log("uspeh");
    })
    .catch((error) => {
      console.log(error);
    });
};
