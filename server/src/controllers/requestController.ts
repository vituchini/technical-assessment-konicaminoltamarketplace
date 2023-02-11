import { Payload } from "../types";
import { Players, RequestMessages, ResponseMessages } from "../constans";

const INIT_GAME_RESPONSE = {
  msg: ResponseMessages.INITIALIZE,
  body: {
    newLine: null,
    heading: Players.PLAYER_1,
    message: null,
  },
};

export const sendResponse = (payload: Payload): void => {
  app.ports.response.send(payload);
};

export const requestHandler = (payload: Payload) => {
  console.log("REQUEST:", payload);
  let response = null;
  switch (payload.msg) {
    case RequestMessages.INITIALIZE:
      response = INIT_GAME_RESPONSE;
      break;
    case RequestMessages.NODE_CLICKED:
      break;
    case RequestMessages.ERROR:
      break;
  }

  if (response) {
    console.log("RESPONSE:", response);
    sendResponse(response);
  }
};
