const TOKEN_KEY = 'auth:token';

export const isLoggedIn = () => !!localStorage.getItem(TOKEN_KEY);

export const setAuthToken = (authToken) => localStorage.setItem(TOKEN_KEY, authToken);

export const logOut = () => localStorage.clear();

export const getUser = () => {
  if(isLoggedIn()) { 
    return JSON.parse(localStorage.getItem('user'));
  }
  return null;
};