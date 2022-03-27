import express, { Request, Response } from "express";
import morgan from "morgan";

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  private middleware() {
    this.server.use(express.json());
    this.server.use(morgan("dev"));
  }

  private routes() {
    this.server.get("/", (req: Request, res: Response) => {
      res.send({
        message:
          "A minimalist boilerplate for a Node.js API written in TypeScript",
        status: "ok",
      });
    });
  }
}
