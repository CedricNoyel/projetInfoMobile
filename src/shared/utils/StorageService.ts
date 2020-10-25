import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

export class StorageService {
  static setObject = async (key: string, object: object) => {
    await Storage.set({
      key: key,
      value: JSON.stringify(object),
    });
  };

  static getObject = async (key: string) => {
    const ret = await Storage.get({ key: key });
    return JSON.parse(ret.value);
  };
}
