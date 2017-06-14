
export const http = (url, params = {}) => {
  const token = localStorage.getItem('auth:token');
  const tokenParam = token ? `?token=${token}` : '';
  return fetch(`${url}${tokenParam}`, params).then((i) => i.json());
};