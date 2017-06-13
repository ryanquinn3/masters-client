import { getJson } from './config';
import { setAuthToken } from '../auth';

const handleToken = (res) => {
  if(res.token){
    setAuthToken(res.token);
    return res;
  }
  throw new Error(res.message);
}

const saveUser = (res) => {
  const { email, firstName, lastName } = res;
  if(email && firstName && lastName){
    localStorage.setItem('user', JSON.stringify({ email, firstName, lastName }));
  }
  return res;
}

export const makeSignUpRequest = ({ firstName, lastName, email, password }) => {
  return fetch('/api/signup', {
    method: 'post',
    body: JSON.stringify({ firstName, lastName, email, password })
  })
  .then(getJson)
  .then(handleToken)
  .then(saveToken);
};

export const makeLoginRequest = ({ email, password }) => {
 return fetch('/api/signin', {
    method: 'post',
    body: JSON.stringify({ email, password })
  })
  .then(getJson)
  .then(saveToken);
};
