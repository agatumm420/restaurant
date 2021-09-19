const createMenuLine = () => {
  const container = document.getElementById("content");
  const menu_line = document.createElement("div");
  menu_line.innerText = " MAIN MENU";
  menu_line.classList.add("heading");
  container.appendChild(menu_line);
};
const createBevLine = () => {
  const container = document.getElementById("content");
  const bev_line = document.createElement("div");
  bev_line.innerText = " BEVRAGES";
  bev_line.classList.add("heading");
  container.appendChild(menu_line);
};
let menu = [];

let bevreges = [
  "Pink Sicilian Lemonade  glass:5$ jar:15$",
  "Classic Lemonade   glass:5$ jar:15$",
  "Light Cerveza    glass:5$ jar:15$ ",
  " Expresso   15$",
  "Latte    15$",
];
const Itemsfactory = (name, price, src, discription) => {
  return { name, price, src, discription };
};
const CreateItems = () => {
  const item1 = Itemsfactory(
    "Rissoto Verde ",
    "15$",
    "https://s27957.pcdn.co/wp-content/uploads/2015/08/Food-Puglia-9.jpg",
    "Italy is a very diverse country, and this diversity is reflected in traditional food. Here we share 9 regional specialties"
  );
  menu.push(item1);
  const item2 = Itemsfactory(
    "Pizzoccheri",
    "16$",
    "https://s27957.pcdn.co/wp-content/uploads/2015/08/640px-Esno4Wkmana_jul_2014_Cassnam_066.jpg",
    "This is a dish from Valtellina, an Alpine valley in Northern Lombardy. It’s made with buckwheat pasta, boiled and mixed with potatoes, chard and a mixture of mountain cheeses, as well as copious amounts of butter."
  );
  menu.push(item2);
  const item3 = Itemsfactory(
    "Canederli",
    "16$",
    "https://s27957.pcdn.co/wp-content/uploads/2015/08/486px-Semmelkn%C3%B6del.jpg",
    "From one side of the Alps to the other, canederli are another mountain specialty, typical of the Sudtirol area. They’re ball-shaped dumplings, made with bread and flavored with speck (cured mountain ham), spinach or cheese – or all three together."
  );
  menu.push(item3);
  const item4 = Itemsfactory(
    "Focaccia di Recco ",
    "17$",
    "https://s27957.pcdn.co/wp-content/uploads/2015/08/9025215001_e41a682056_k.jpg",
    "Enter any bakery in Liguria, the Genoa region, and you’ll find slabs of focaccia fresh from the oven. Focaccia is a kind of flatbread, seasoned with salt and olive oil, and it can be topped with onion, olives, cheese, pesto, fresh tomatoes… you name it."
  );
  menu.push(item4);
  const item5 = Itemsfactory(
    "Gnocco fritto con salumi",
    "19$",
    "https://s27957.pcdn.co/wp-content/uploads/2015/08/Gnocco_fritto_salame_and_lambrusco.jpg",
    "The Emilia-Romagna region, where you’ll find the cities of Modena and Bologna, is famous for its gastronomic tradition. This region is the birthplace of Parmesan cheese, Bolognaise sauce (called ragù in Italian) and balsamic vinegar."
  );
  menu.push(item5);
  const item6 = Itemsfactory(
    "Fiorentina",
    "25$",
    "https://s27957.pcdn.co/wp-content/uploads/2015/08/640px-Bistecca_alla_fiorentina_400gr.jpg",
    "Meat lovers just got another reason to go to Florence. The city’s namesake dish is a delicious hunk of T-bone steak, grilled on a charcoal barbecue, cut thick and served bloody."
  );
  menu.push(item6);
  const item7 = Itemsfactory(
    "Orecchiette ",
    "16$",
    "https://s27957.pcdn.co/wp-content/uploads/2015/08/640px-Orecchiette_carbonara.jpg",
    "Orecchiette are traditionally served with cime di rapa (turnip greens) but are tasty with all kinds of seasonings, from ragù bolognese to a simple tomato sauce."
  );
  menu.push(item7);
};

const createMenuItems = () => {
  console.log(menu);
  for (let thing in menu) {
    console.log(menu[thing]);
    const container = document.getElementById("content");
    const item = document.createElement("div");
    item.classList.add("item");
    const name = document.createElement("label");
    name.innerHTML = menu[thing].name;
    name.classList.add("name");

    const img = document.createElement("img");
    img.src = menu[thing].src;
    img.classList.add("menu-img");
    const price = document.createElement("h2");
    price.innerHTML = menu[thing].price;
    price.classList.add("price");
    const discr = document.createElement("h2");
    discr.innerHTML = menu[thing].discription;
    discr.classList.add("discr");

    container.appendChild(item);
    item.appendChild(name);
    item.appendChild(img);
    item.appendChild(price);
    item.appendChild(discr);
  }
};
//const createBevrages = () => {
//for (let i = 0; i < bevreges.length; i++) {
//let curr = i + 1;
// const container = document.getElementById("content");
//const item = document.createElement("div");
//item.classList.add("item");
//const img = document.createElement("img");
//img.src = `"dish${curr}.jpg"`;
//const label = document.createElement("label");
//label.innerHTML = bevreges[i];
//container.appendChild(item);
//item.appendChild(img);
//item.appendChild(label);
//}
//};
export { createMenuItems, createMenuLine, CreateItems };
