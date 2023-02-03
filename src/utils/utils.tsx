export const updateStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
}
