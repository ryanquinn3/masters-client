import { getJson, rootUrl } from './config';
import { setAuthToken } from '../auth';

const handleError = (response) => {
  if (!response.ok) {
    return response.text()
    .then((body) => { throw new Error(body || '404') })
  }
  return response;
} 

const handleToken = (res) => {
  if(res.token){
    setAuthToken(res.token);
    return res;
  }
  throw new Error(res.message);
}

const saveUser = (res) => {
  const { email, name } = res;
  if(email && name){
    localStorage.setItem('user', JSON.stringify({ email, name }));
  }
  return res;
}

export const makeSignUpRequest = ({ firstName, lastName, email, password, passwordConfirm }) => {
  return fetch(`${rootUrl}api/signup`, {
    method: 'post',
    headers: new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }),
    body: JSON.stringify({ 
      entrant: {
          pool_id: 1,
          name: `${firstName.trim()} ${lastName.trim()}`,
          email: email.trim(),
          password: password.trim(),
          password_confirmation: passwordConfirm.trim()
      }
    })
  })
  .then(handleError)
  .then(getJson)
  .then(handleToken)
  .then(saveUser);

};

export const makeLoginRequest = ({ email, password }) => {
 return fetch(`${rootUrl}api/signin`, {
    method: 'POST',
    headers: new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' }),
    body: JSON.stringify({ email, password })
  })
  .then(handleError)
  .then(getJson)
  .then(handleToken)
  .then(saveUser)
};
