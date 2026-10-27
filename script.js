// Fruit Catalog Project

const fruits = [
  {
    name: "Apple",
    color: "Red",
    calories: 52,
    price: 3.5,
    country: "USA",
    alt: "a red apple on a white background",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    price: 1.2,
    country: "Ecuador",
    alt: "A fresh banana on a white background",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    price: 2.8,
    country: "Spain",
    alt: "lots of orange slices",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    price: 6.0,
    country: "Mexico",
    alt: "a pile of cut up strawberries",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    price: 4.0,
    country: "India",
    alt: "a stack of mangos",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    price: 2.5,
    country: "Italy",
    alt: "a heap of grapes",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    price: 3.0,
    country: "Costa Rica",
    alt: "a pineapple cut in half",
  },
];

// 1 - Create a container to hold our fruit cards. ✅
// A - crate
// B - spice - textContent or add a class
// C - append to our page

const container = document.createElement("div");
container.classList.add("fruit-catalog");
document.body.append(container);
// get some images, put them in an images folder ✅

// 2 - Fill the fruit container with articles.

for (let fruit of fruits) {
  // create the article, add a class
  const card = document.createElement("article");
  card.classList.add("fruit-card");

  // create the h2, add text and class
  const title = document.createElement("h2");
  title.textContent = fruit.name;
  title.classList.add("fruit-name");

  // create the img, give it src, alt, class
  const image = document.createElement("img");
  image.src = `./images/${fruit.name}.jpg`;
  image.alt = fruit.alt;
  image.classList.add("fruit-image");

  // Create a p tag for color and country, give it textContent and class
  const info = document.createElement("p");
  info.textContent = `Color: ${fruit.color}, Country: ${fruit.country}`;
  info.classList.add("fruit-info");

  // Create a p tag for calories, give it textContent and class
  const calories = document.createElement("p");
  calories.textContent = `Calories: ${fruit.calories} per 100g`;
  calories.classList.add("fruit-calories");

  // Create a p tag for price, give it textContent and class
  const price = document.createElement("p");
  price.textContent = `Price: ${fruit.price}kr per kg`;
  price.classList.add("fruit-price");

  // place the h2, img in the article
  card.append(title, image, info, calories, price);

  // Randomly decide if each fruit is on sale. 50% chance to be on sale.
  fruit.onSale = Math.random() > 0.5 ? true : false;

  // If the fruit is on sale, make a new sale p tag and give the old sale a line-through
  if (fruit.onSale) {
    const sale = document.createElement("p");
    sale.textContent = `Sale Price: ${fruit.price / 2}kr per kg`;
    sale.classList.add("salePrice");
    price.classList.add("strikethrough");
    card.append(sale);
  }
  // place the article in the continer div
  container.append(card);
  console.log(fruit);
}
