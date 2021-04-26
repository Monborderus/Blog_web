const fileInput = document.body.querySelector(".file-hidden");

const onLoadImg = (e, img) => {
  const file = e.target.files[0];

  const reader = new FileReader();

  reader.onloadend = () => {
    if (file.type.startsWith("image")) {
      img.src = window.URL.createObjectURL(file);
    } else {
      console.log("errrrrrror");
    }
  };

  if (file) {
    reader.readAsDataURL(file);
  }
};

export { fileInput, onLoadImg };
