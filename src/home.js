const createOpen = () => {
  const container = document.querySelector("#content");
  const open = document.createElement("div");
  open.classList.add("open-box");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  h1.innerHTML = " Open Hours";
  h2.innerHTML = "Mon -Sun: 10am-11pm";
};
const Review = () => {
  const container = document.querySelector("#content");
  const review = document.createElement("div");
  review.classList.add("review-box");
  review.innerHTML =
    "It’s a great experience. The ambiance is very welcoming and charming. Amazing wines, food and service. Staff are extremely knowledgeable and make great recommendations.          ";
  const label = document.createElement("label");
  label.classList.add("home-label");
  label.innerHTML = "The New York Times";
  let img = document.createElement("img");
  img.classList.add("home-img");
  img.src =
    "https://www.pikpng.com/pngl/b/116-1166390_rating-star-background-png-four-out-of-five.png";
  container.appendChild(review);
  review.appendChild(label);
  review.appendChild(img);
};
export { createOpen, Review };
