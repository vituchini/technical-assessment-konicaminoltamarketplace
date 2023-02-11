import { App, Payload } from "./types";

declare const app: any;

const start = (app: App): void => {
  console.log("START");
  app.ports.request.subscribe((message: string) => {
    const payload: Payload = JSON.parse(message);
    console.log(payload);
  });
};

start(app);
