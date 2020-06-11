import axios from "axios";

export const ApproveBlanket = (admin, blanket) => {
  const updateData = {
    Content: blanket.content,
    Title: blanket.title,
    Status: true,
    SubjectName: blanket.subjectName,
  };
  return axios
    .put("api/sheets/" + blanket.id, JSON.stringify(updateData), {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
