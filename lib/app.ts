import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/userRoutes";
import * as mongoose from "mongoose";
import * as cors from "cors";

import { config } from 'dotenv';

config();

class App {
  public app: express.Application;
  public routePrv: Routes = new Routes();
  public mongoUrl: string = process.env.MONGO_DB_URL;

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    // serving static files
    this.app.use(express.static("public"));
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, });
    mongoose.set('useCreateIndex', true);
  }
}

export default new App().app;
