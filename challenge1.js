// Create a variable called password.
// Check how many letters are in the password,
// if there are less than 8 log to the console that the password is too short.
// Otherwise log the password to the console.

let password = "short";
// let password = "mytrickypassword";
passwordLength = password.length;

if (passwordLength < 8) {
  console.log("password is too short");
} else {
  console.log(password);
}
