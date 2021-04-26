import { form, img, validate } from "./validations.js";
import { fileInput, onLoadImg } from "./img-loader.js";

form.addEventListener("submit", validate);

fileInput.addEventListener("change", (e) => onLoadImg(e, img));
