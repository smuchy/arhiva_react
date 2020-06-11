import axios from "axios";

export const AddSheet = (input) => {
  const sheet = {
    Title: input.Title,
    Content: input.Content,
    SubjectName: input.SubjectName,
  };

  return axios
    .post("api/sheets", JSON.stringify(sheet), {
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
