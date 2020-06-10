import axios from "axios";

export const EditUserInfo = (input, userInfo, admin) => {
  const updateData = {
    FirstName: input.first_name,
    LastName: input.last_name,
    Email: input.email,
    Birthday: userInfo.birthday,
    Password: userInfo.password,
    StudentId: userInfo.studentId,
    Year: userInfo.year,
    Admin: true,
  };
  return axios
    .put("api/user/" + userInfo.id, JSON.stringify(updateData), {
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
