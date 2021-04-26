import { fileInput } from "./img-loader.js";
import { createNewUser } from "../api/api.js";

const form = document.body.querySelector(".form.sign-up");
const img = document.body.querySelector(".img");
const login = document.body.querySelector(".login");
const email = document.body.querySelector(".email");
const pass1 = document.body.querySelector(".password-1");
const pass2 = document.body.querySelector(".password-2");

const validate = () => {
  if (pass1.value === pass2.value) {
    if (confirm("Create a user?")) {
      createNewUser({
        img: fileInput.files[0],
        login: login.value,
        email: email.value,
        pass: pass1.value,
      });
    }
  } else {
    alert("Passwords not matched");
  }
};

export { form, img, validate };
