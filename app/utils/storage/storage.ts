import { MMKV } from "react-native-mmkv"

export class ClientStorage {
  private storage: MMKV

  constructor(storage?: MMKV) {
    if (storage) {
      this.storage = storage
      return
    }

    this.storage = new MMKV()
  }

  /**
   * Loads a string from storage.
   *
   * @param key The key to fetch.
   */
  loadString(key: string): string | null {
    return this.storage.getString(key) ?? null
  }

  /**
   * Saves a string to storage.
   *
   * @param key The key to fetch.
   * @param value The value to store.
   */
  saveString(key: string, value: string): void {
    this.storage.set(key, value)
  }

  /**
   * Loads something from storage and runs it thru JSON.parse.
   *
   * @param key The key to fetch.
   */
  load<T = any>(key: string): T | null {
    const data = this.storage.getString(key)
    return data ? (JSON.parse(data) as T) : null
  }

  /**
   * Saves an object to storage.
   *
   * @param key The key to fetch.
   * @param value The value to store.
   */
  save(key: string, value: any): void {
    this.storage.set(key, JSON.stringify(value))
  }

  /**
   * Removes something from storage.
   *
   * @param key The key to kill.
   */
  remove(key: string): void {
    this.storage.delete(key)
  }

  /**
   * Burn it all to the ground.
   */
  clear(): void {
    this.storage.clearAll()
  }
}

export const clientStorage = new ClientStorage()
