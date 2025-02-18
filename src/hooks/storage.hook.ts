"use client";

function useStorage() {
  function setItem<T>(key: string, value: T, expires?: number) {
    try {
      if (typeof value === "string" || typeof value === "number") {
        (window as any).localStorage.setItem(key, `${value}`);
      } else {
        (window as any).localStorage.setItem(key, JSON.stringify(value));
      }
      if (expires) {
        expires = Math.abs(expires);
        const schedule = Date.now() + expires * 1000;
        (window as any).localStorage.setItem(`${key}_exp`, schedule.toString());
      }
      return true;
    } catch (e) {
      console.log("Error: " + e);
      return false;
    }
  }

  function getItem(key: string) {
    const expires = (window as any).localStorage.getItem(`${key}_exp`);
    if (expires) {
      if (Number(expires) < Date.now()) {
        (window as any).localStorage.removeItem(key);
        (window as any).localStorage.removeItem(`${key}_exp`);
      }
    }
    const data = (window as any).localStorage.getItem(key);
    if (!data) return data;
    try {
      return JSON.parse(data);
    } catch (e) {
      return data;
    }
  }

  function removeItem(key: string) {
    try {
      (window as any).localStorage.removeItem(key);
    } catch (e) {
      console.log("Error: ", e);
      return false;
    }
    return true;
  }

  return { setItem, getItem, removeItem };
}

export default useStorage;
