import axios from "axios";

export const GetAllSubjects = (module, setAllSubjects) => {
  return axios
    .post(
      "get_all_subjects" + module, //smer ili ovde
      {
        module: module, //ili ovde, vidi gde treba
      }
    )
    .then((response) => {
      return setAllSubjects(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
