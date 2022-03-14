const TOKEN_KEY = "token";

export function setAuthToken(token: string | null) {
  if (token === null) {
    localStorage.removeItem(TOKEN_KEY);
  } else {
    localStorage.setItem(TOKEN_KEY, token);
  }
}

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY) ?? "";
};

export const clearToken = () => {
  return localStorage.removeItem(TOKEN_KEY);
};
