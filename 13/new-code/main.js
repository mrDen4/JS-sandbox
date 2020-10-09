let userCoding = () => {
  let userCode = prompt('Введите JavaScript код');
  try {
    eval("'use strict'; " + userCode);
  } 
  catch (e) {
    alert(e);
  }
};

userCoding();