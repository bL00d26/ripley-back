import moment from "moment";

export const averageAge = (users: any) => {
  let prom = 0;
  users.forEach((user: any) => {
    let dateString = new Date(user.birthday);
    let momentObj = moment(dateString);
    let age = moment().diff(momentObj, "years");
    prom = prom + age;
  });
  return (prom / users.length).toFixed(2);
};
