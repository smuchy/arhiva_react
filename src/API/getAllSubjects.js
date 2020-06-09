import axios from "axios";

export const GetAllSubjects = (module, setAllSubjects) => {
  return axios
    .get("api/subject/" + module)
    .then((response) => {
      return setAllSubjects(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
