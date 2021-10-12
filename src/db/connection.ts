import { Sequelize } from "sequelize";
import credentials from "./credentials";
const db = new Sequelize(
  credentials.database,
  credentials.username,
  credentials.password,
  {
    host: credentials.host,
    dialect: "postgres",
    port: credentials.port,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: console.log,
    sync: {
      force: true,
    },
  }
);

export default db;
