import axios from "axios";

export const GetSheet = (subName, setSheets) => {
  return axios
    .get("api/sheets/" + subName)
    .then((response) => {
      return setSheets(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
