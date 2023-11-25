const validateEmail: RegExp = /^[a-zA-Z]{3,}[a-zA-Z0-9]*@[a-zA-Z]{4,}\.[a-zA-Z]{2,}$/;
const withoutWhiteSpace: RegExp = /\S+/;
const usernameRules: RegExp = /^[a-z0-9_]+$/;
const withoutSpaceBetweenLetter: RegExp = /^[A-Za-z0-9_]+$/;

export { validateEmail, withoutWhiteSpace, usernameRules, withoutSpaceBetweenLetter };