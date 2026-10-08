(function () {
  const IMAGE_SRC = "https://github.com/gl0ckchan/block-ai/blockai.png";

  Object.assign(document.body.style, {
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    background: "#000",
  });

  document.body.innerHTML = "";

  const img = new Image();
  img.alt = "";
  img.decoding = "async";
  Object.assign(img.style, {
    display: "block",
    width: "100vw",
    height: "100vh",
    objectFit: "cover",  
    objectPosition: "center",
  });
  img.src = IMAGE_SRC;

  document.body.appendChild(img);
})();