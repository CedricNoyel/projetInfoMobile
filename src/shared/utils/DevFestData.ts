import { SessionsListDTO } from "../models/Session";
import { SpeakersListDTO } from "../models/Speaker";
import { StorageService } from "./StorageService";

const BASE_URL = "https://devfest-nantes-2018-api.cleverapps.io";
export const IMAGE_BASE_URL = "https://devfest2018.gdgnantes.com/";

export class DevFestData {
  static getSessionsList(): Promise<SessionsListDTO> {
    return fetch(`${BASE_URL}/sessions`)
      .then((res) => res.json())
      .then((res) => {
        StorageService.setObject("sessions", res);
        return res;
      });
  }

  static getSpeakersList(): Promise<SpeakersListDTO> {
    return fetch(`${BASE_URL}/speakers`)
      .then((res) => res.json())
      .then((res) => {
        StorageService.setObject("speakers", res);
        return res;
      });
  }
}
