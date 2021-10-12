import express, { Application } from "express";
import cors from "cors";

import userRoutes from "./routes/users";
import db from "./db/connection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    users: "/api/users",
  };

  constructor() {
    //inicializaciones
    this.app = express();
    this.port = process.env.PORT || "4000";

    this.dbConnection();
    this.middlewares();
    this.routes();
  }

  async dbConnection() {
    try {
      await db.authenticate();
      console.log("Database corriendo");
    } catch (error) {
      console.log(error);
    }
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

export default Server;
