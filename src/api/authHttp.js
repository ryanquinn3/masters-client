
export const http = (url) => {
  const token = localStorage.getItem('auth:token');
  return fetch(`${url}?token=${token}`).then((i) => i.json());
};