import { App } from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT ?? 3000;

new App().server.listen(port, () => {
  console.info(`Application running on port ${port}`);
});
