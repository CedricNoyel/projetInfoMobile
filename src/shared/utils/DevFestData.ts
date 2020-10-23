import { SessionsListDTO } from "../models/Session";

const BASE_URL = "https://devfest-nantes-2018-api.cleverapps.io";

export class DevFestData {
  static getSessionsList(): Promise<SessionsListDTO> {
    return fetch(`${BASE_URL}/sessions`).then((res) => res.json());
  }

  static getSpeakersList(): Promise<SessionsListDTO> {
    return fetch(`${BASE_URL}/speakers`).then((res) => res.json());
  }
}
