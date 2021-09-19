const Reservation = () => {
  const container = document.querySelector("#content");
  const div = document.createElement("div");
  div.classList.add("contact-div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  h1.innerHTML = " Reservations";
  h2.innerHTML = " +48 888 999 000";
  container.appendChild(div);
  div.appendChild(h1);
  div.appendChild(h2);
};
const Managger = () => {
  const container = document.querySelector("#content");
  const div = document.querySelector("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h = document.createElement("h2");
  h1.innerHTML = " Managger";
  h.innerHTML = "Mateo Dominico";
  h2.innerHTML = " +48 888 999 000";
  let img = document.createElement("img");
  img.src =
    "https://c0.wallpaperflare.com/preview/656/609/102/barcelona-spain-italian-man.jpg";
  container.appendChild(div);
  div.appendChild(h1);
  div.appendChild(h2);
  div.appendChild(h);
  div.appendChild(img);
};
export { Reservation, Managger };
