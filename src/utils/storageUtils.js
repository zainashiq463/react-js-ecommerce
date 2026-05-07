export const getStoredArray = (key) => {
  try {
    const savedValue = localStorage.getItem(key);
    const parsedValue = savedValue ? JSON.parse(savedValue) : [];

    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch {
    return [];
  }
};

export const setStoredValue = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
