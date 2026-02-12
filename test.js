// test.js
function login(password) {
  if (password === "123456") { // 하드코딩된 비밀번호 취약점 유발
    console.log("Logged in!");
  }
}
