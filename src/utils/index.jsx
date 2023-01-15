const serverRequest = async (url, success = () => {}, error = () => {}) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    success(data);
  } catch (err) {
    error(err);
  }
};

const base64Encode = (value) => {
  return btoa(value);
};

const base64Decode = (value) => {
  return atob(value);
};

export { serverRequest, base64Encode, base64Decode };
