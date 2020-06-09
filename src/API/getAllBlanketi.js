import axios from "axios";

export const GetAllBlanketi = (admin, setBlanketi) => {
  return axios
    .get("api/sheets")
    .then((response) => {
      return setBlanketi(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
