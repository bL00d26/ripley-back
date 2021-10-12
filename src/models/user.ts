import { DataTypes } from "sequelize";
import db from "../db/connection";

const User = db.define("User", {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  birthday: {
    type: DataTypes.DATE,
  },
});

export default User;
