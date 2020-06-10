import axios from "axios";

export const RemoveBlanket = (admin, id) => {
  return axios
    .delete("api/sheets/" + id)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
