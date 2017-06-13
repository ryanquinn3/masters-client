import React, { Component } from 'react';
import { isLoggedIn } from './auth';

const AuthOnly = ({ children }) => {
  return isLoggedIn() ? children : null;
};


export default AuthOnly;