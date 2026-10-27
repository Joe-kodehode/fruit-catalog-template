// Fruit Catalog Project

// target fruit container
const container = document.querySelector("#card-container");

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

// Baking cake recipe
// 1. Bake - document.createElement("article")
// 2. Decorate -
// 3. Serve

// Loop starts here!!!

for (let fruit of fruits) {
  // optional 50% chance to show fruit card or not
  //   if (Math.random() > 0.5) {
  //     continue;
  //   }

  // 1. Create a card (article tag)
  const card = document.createElement("article");

  // 2. give it a class, add the title, img, p, p, p
  // 2.1 give class
  card.classList.add("fruit-card");

  // 2.2 title
  const title = document.createElement("h2");
  title.classList.add("fruit-name");
  title.textContent = fruit.name;

  // 2.3 img
  const image = document.createElement("img");
  image.classList.add("fruit-image");
  // give it a src
  image.src = `images/${fruit.name}.jpg`;
  // give it alt text
  image.alt = fruit.alt;

  // 2.4 info p
  const info = document.createElement("p");
  info.classList.add("fruit-info");
  info.textContent = `Color: ${fruit.color}, Country: ${fruit.country}`;

  // 2.5 calories p
  const calories = document.createElement("p");
  calories.classList.add("fruit-calories");
  calories.textContent = `Calories: ${fruit.calories} per 100g`;

  // 2.6 price p
  const price = document.createElement("p");
  price.classList.add("fruit-price");
  price.textContent = `price: ${fruit.price}kr per g`;

  // 2.7 append all the card's tags
  card.append(title, image, info, calories, price);

  // 3. append to the div (card container)
  container.append(card);

  // randomly decide if a fruit is on sale (50/50)
  const onSale = Math.random() > 0.5; // 50% true, 50% false

  // if the fruit IS on sale:
  //  - make a p tag with the sale price inside (sale price will be 50% of original price)
  if (onSale) {
    const salePrice = document.createElement("p");
    salePrice.classList.add("salePrice");
    salePrice.textContent = `Sale Price: ${fruit.price / 2}kr per g`;
    card.append(salePrice);

    // - strikethrough and grey out the old price
    price.classList.add("strikethrough");
  }

  // Loop ends here!!!!
}
