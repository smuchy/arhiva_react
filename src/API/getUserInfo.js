import axios from "axios";

export const GetUserInfo = (admin, setUserInfo) => {
  return axios
    .get("api/user")
    .then((response) => {
      return setUserInfo(findAdmin(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

function findAdmin(data) {
  var i;
  for (i = 0; i < data.length; i++) {
    if (data[i].admin == true) {
      return data[i];
    }
  }
}
