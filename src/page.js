const CreateAboutUs = () => {
  const container = document.querySelector("#content");
  const h1 = document.createElement("h1");
  h1.innerText = "About Us ...";
  container.appendChild(h1);
};
const CreateText = (message) => {
  const container = document.querySelector("#content");
  const h2 = document.createElement("h2");
  h2.innerText = message;
  container.appendChild(h2);
};
let message =
  " Siciliana is a a beutifull true to Sicilian spirit restauran founded in\
1982 by a Domicnico family. Today it still is run by this family member\
Mateo Dominico who keeps the place cosy hospital and simply beutiful.\
The food and the atmosphere make yhis place trurly one of a kind!";
const createImg = () => {
  const container = document.querySelector("#content");
  const img = document.createElement("img");
  img.src = "italian.jpg";
  container.appendChild(img);
};
export { CreateAboutUs, CreateText, message, createImg };
