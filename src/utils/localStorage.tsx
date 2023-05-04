export const getStorageItem = <T,>(key: string): T | null => {
  const result = localStorage.getItem(key);
  return result && JSON.parse(result);
};

export const setStorageItem = (key: string, data: unknown) => {
  localStorage.setItem(key, JSON.stringify(data));
};
