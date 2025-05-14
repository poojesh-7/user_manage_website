export const isValidName = (name) => {
  if (name.trim().length >= 5) {
    return "";
  } else {
    return "Mininum length of 5";
  }
};
export const isValidCompany = (company, e) => {
  if (company.trim() === "") {
    return "Enter company name";
  } else {
    if (e === 400) {
      return "Company doesnt exist";
    } else {
      if (company.trim() === "") {
        return "Enter company name";
      } else {
        return "";
      }
    }
  }
};

export const isValidEmail = (email, login = false, e) => {
  if (email.trim() === "") {
    return "enter valid email";
  } else {
    if (login) {
      if (e === 404) {
        return "incorrect combination";
      } else {
        return "";
      }
    } else {
      if (email.trim().includes(" ") || !email.includes("@")) {
        return "Enter valid email";
      } else {
        return "";
      }
    }
  }
};

export const isValidPassword = (pass, login, e) => {
  let password = pass.trim();

  let hasUpper = false;
  let hasDigit = false;
  let hasSymbol = false;

  for (let char of password) {
    const code = char.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      hasUpper = true;
    } else if (code >= 48 && code <= 57) {
      hasDigit = true;
    } else if (
      !(code >= 97 && code <= 122) &&
      !(code >= 65 && code <= 90) &&
      !(code >= 48 && code <= 57)
    ) {
      hasSymbol = true;
    }
  }

  if (password.length < 8) {
    return "Password length minimum 8";
  } else {
    if (login) {
      if (!hasUpper && !hasDigit && !hasSymbol) {
        return "Weak Password()";
      } else if (e === 404) {
        return "";
      } else if (password.includes(" ")) {
        return "invalid password";
      } else {
        return "";
      }
    } else {
      if (!hasUpper && !hasDigit && !hasSymbol) {
        return "Weak Password()";
      } else if (password.includes(" ")) {
        return "invalid password";
      } else {
        return "";
      }
    }
  }
};
