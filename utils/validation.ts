export const validateEmail = (email: string) => {
    if (email.includes("@") && email.includes(".")) {
      return true;
    } else {
      return false;
    }
  };

export const validatePassword = (pass: string) => {
    if (pass.length >= 6) {
      return true;
    } else {
      return false;
    }
  };