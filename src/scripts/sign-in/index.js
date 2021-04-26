import {loginUser} from "../api/api.js"

const form = document.body.querySelector(".form.sign-in");
const login = document.body.querySelector(".email");
const pass = document.body.querySelector(".password");

form.addEventListener("submit", () => {
      if (confirm("Login as a user?")) {
        loginUser({
          login: login.value,
          pass: pass.value,
        });
      
    } else {
      alert("Passwords not matched");
    }
  });

