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
    const ret = (await Storage.get({ key: key })) || {};
    // console.log(JSON.parse(ret.value));
    return ret !== null ? JSON.parse(ret.value!) : {};
  };

  static setItem = async (key: string, value: any) => {
    return await Storage.set({
      key: key,
      value: value,
    });
  };

  static getItem = async (key: string) => {
    const { value } = await Storage.get({ key: key });
    return value;
  };

  static removeItem = async (key: string) => {
    await Storage.remove({ key: key });
  };

  static keys = async () => {
    const { keys } = await Storage.keys();
    return keys;
  };

  static clear = async () => {
    await Storage.clear();
  };
}
