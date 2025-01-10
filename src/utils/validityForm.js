import React from 'react'

export const validityForm = (email, password) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if(!emailRegex) {
    return "Invalid email";
  } else if(!passwordRegex) {
    return "Invalid password";
  } else {
    return null;
  }
};
