import { CreateAboutUs, CreateText, message, createImg } from "./page.js";
import { createOpen, Review } from "./home.js";
import { createMenuItems, createMenuLine, CreateItems } from "./menu.js";
import { Reservation, Managger } from "./contact.js";

const ButtonsDiv = () => {
  console.log("in it");
  const body = document.querySelector("body");
  const choose = document.createElement("div");
  choose.classList.add("switch");
  const homeBtn = document.createElement("div");
  homeBtn.innerHTML = " HOME ";
  console.log("now here");
  homeBtn.setAttribute("id", "home");
  homeBtn.classList.add("switch-box");
  const menuBtn = document.createElement("div");
  menuBtn.classList.add("switch-box");
  menuBtn.innerHTML = " MENU ";
  menuBtn.setAttribute("id", "menu");
  const contactBtn = document.createElement("div");
  contactBtn.classList.add("switch-box");
  contactBtn.innerHTML = " CONTACT";
  contactBtn.setAttribute("id", "contact");
  body.appendChild(choose);
  choose.appendChild(homeBtn);
  choose.appendChild(contactBtn);
  choose.appendChild(menuBtn);
};

ButtonsDiv();
const RemoveAll = () => {
  const container = document.getElementById("content");
  container.innerHTML = "";
};
const Home = () => {
  RemoveAll();
  createOpen();
  CreateAboutUs();
  createImg();
  CreateText(message);
  Review();
};
const Menu = () => {
  RemoveAll();
  CreateItems();
  createMenuLine();
  createMenuItems();
};
const Contact = () => {
  RemoveAll();
  Reservation();
  Managger();
};
document.addEventListener("click", (e) => {
  let target = e.target;
  if (target.id == "home") {
    Home();
  }
  if (target.id == "menu") {
    Menu();
  }
  if (target.id == "contact") {
    Contact();
  }
});
