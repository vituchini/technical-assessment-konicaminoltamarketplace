import { RequestMessages, ResponseMessages } from "../constans";

type Point = {
  x: number;
  y: number;
};

type Line = {
  start: Point | null;
  end: Point;
};

type StateUpdate = {
  newLine: Line | null;
  heading: string | null;
  message: string | null;
};

export type Payload = {
  msg: RequestMessages | ResponseMessages;
  body: Point | StateUpdate | string | null;
};

type SubscribeCallback = (message: string) => void;

export type App = {
  ports: {
    request: {
      subscribe: (callback: SubscribeCallback) => void;
    };
    response: {
      send: (payload: Payload) => void;
    };
  };
};
