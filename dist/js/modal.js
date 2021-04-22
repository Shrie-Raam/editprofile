// modal page
const beveragesModal = document.querySelector(".beverages-modal");
const breadbakeryModal = document.querySelector(".breadbakery-modal");
const cannedModal = document.querySelector(".canned-modal");
const dairyModal = document.querySelector(".dairy-modal");
const drybakingModal = document.querySelector(".drybaking-modal");
const frozenModal = document.querySelector(".frozen-modal");
const meatModal = document.querySelector(".meat-modal");
const produceModal = document.querySelector(".produce-modal");
const cleanersModal = document.querySelector(".cleaners-modal");
const paperModal = document.querySelector(".paper-modal");
const personalCareModal = document.querySelector(".personalCare-modal");
const othersModal = document.querySelector(".others-modal");

// modal data
const modalbeverages = [
  {
    name: "Coca-Cola",
    price: 12.0,
    img: "./images/products/beverages/cocacola.jpg",
  },
  {
    name: "Sprite",
    price: 14.5,
    img: "./images/products/beverages/sprite.jpg",
  },
  {
    name: "Milo",
    price: 8.0,
    img: "./images/products/beverages/milo.jfif",
  },
  {
    name: "Chrysanthemum",
    price: 9.0,
    img: "./images/products/beverages/chrysanthemum.png",
  },
  {
    name: "Carlsberg",
    price: 7.6,
    img: "./images/products/beverages/carlsberg.jpg",
  },
  {
    name: "Sagota",
    price: 10.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Lipton Green Tea",
    price: 8.5,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Lipton Iced Lemon Tea",
    price: 4.5,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Asahi",
    price: 9.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Heineken",
    price: 9.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Soya",
    price: 13.0,
    img: "./images/products/beverages/sagota.jpg",
  },
];

const modalbreadbakery = [
  {
    name: "Coca-Cola",
    price: 12.0,
    img: "./images/products/beverages/cocacola.jpg",
  },
  {
    name: "Sprite",
    price: 14.5,
    img: "./images/products/beverages/sprite.jpg",
  },
  {
    name: "Milo",
    price: 8.0,
    img: "./images/products/beverages/milo.jfif",
  },
  {
    name: "Chrysanthemum",
    price: 9.0,
    img: "./images/products/beverages/chrysanthemum.png",
  },
  {
    name: "Carlsberg",
    price: 7.6,
    img: "./images/products/beverages/carlsberg.jpg",
  },
  {
    name: "Sagota",
    price: 10.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Lipton Green Tea",
    price: 8.5,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Lipton Iced Lemon Tea",
    price: 4.5,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Asahi",
    price: 9.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Heineken",
    price: 9.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Soya",
    price: 13.0,
    img: "./images/products/beverages/sagota.jpg",
  },
];

const modalcanned = [
  {
    name: "Sardines",
    price: 12.0,
    img: "./images/products/canned/sardine.jfif",
  },
  {
    name: "Spaghetti Sauce",
    price: 14.5,
    img: "./images/products/canned/spaghettisauce.jpg",
  },
  {
    name: "Carbonara Sauce",
    price: 8.0,
    img: "./images/products/canned/carbonarasauce.jpg",
  },
  {
    name: "Mackerels",
    price: 9.0,
    img: "./images/products/canned/mackerel.jfif",
  },
  {
    name: "Canned Pineapples",
    price: 7.6,
    img: "./images/products/canned/pineapple.jfif",
  },
  {
    name: "Baked Beans",
    price: 10.0,
    img: "./images/products/canned/bakedbeans.jfif",
  },
  {
    name: "Button Mushrooms",
    price: 8.5,
    img: "./images/products/canned/sardine.jfif",
  },
  {
    name: "Chicken Curry",
    price: 4.5,
    img: "./images/products/canned/sardine.jfif",
  },
  {
    name: "Rendang",
    price: 9.0,
    img: "./images/products/canned/sardine.jfif",
  },
  {
    name: "Sambal",
    price: 9.0,
    img: "./images/products/canned/sardine.jfif",
  },
  {
    name: "Ayam Brand Sardines",
    price: 13.0,
    img: "./images/products/canned/sardine.jfif",
  },
];

const modaldairy = [
  {
    name: "Coca-Cola",
    price: 12.0,
    img: "./images/products/beverages/cocacola.jpg",
  },
  {
    name: "Sprite",
    price: 14.5,
    img: "./images/products/beverages/sprite.jpg",
  },
  {
    name: "Milo",
    price: 8.0,
    img: "./images/products/beverages/milo.jfif",
  },
  {
    name: "Chrysanthemum",
    price: 9.0,
    img: "./images/products/beverages/chrysanthemum.png",
  },
  {
    name: "Carlsberg",
    price: 7.6,
    img: "./images/products/beverages/carlsberg.jpg",
  },
  {
    name: "Sagota",
    price: 10.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Lipton Green Tea",
    price: 8.5,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Lipton Iced Lemon Tea",
    price: 4.5,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Asahi",
    price: 9.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Heineken",
    price: 9.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Soya",
    price: 13.0,
    img: "./images/products/beverages/sagota.jpg",
  },
];

const modaldrybaking = [
  {
    name: "Colgate Toothpaste",
    price: 12.0,
    img: "./images/products/personalcare/colgate.jpeg",
  },
  {
    name: "Colgate Toothbrush",
    price: 14.5,
    img: "./images/products/personalcare/colgatebrush.jpg",
  },
  {
    name: "Floss",
    price: 8.0,
    img: "./images/products/personalcare/floss.png",
  },
  {
    name: "Gatsby Hair Gel",
    price: 9.0,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Gatsby Hairwax",
    price: 7.6,
    img: "./images/products/personalcare/hairwax.jfif",
  },
  {
    name: "Razors",
    price: 10.0,
    img: "./images/products/personalcare/razors.jpg",
  },
  {
    name: "Baby Oil",
    price: 8.5,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Deodorant",
    price: 4.5,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Deodorant Spray",
    price: 9.0,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Hair Serum",
    price: 9.0,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Body Wash",
    price: 13.0,
    img: "./images/products/personalcare/hairgel.png",
  },
];

const modalfrozen = [
  {
    name: "Waffles",
    price: 12.0,
    img: "./images/products/frozen/waffle.jpg",
  },
  {
    name: "Ayamas Frozen Wings",
    price: 14.5,
    img: "./images/products/frozen/ayamas_wings.jpg",
  },
  {
    name: "Chicken Frankfurters",
    price: 8.0,
    img: "./images/products/frozen/ayamas_frank.png",
  },
  {
    name: "Instant Pizza",
    price: 9.0,
    img: "./images/products/frozen/waffle.jpg",
  },
  {
    name: "Frozen Vegetables",
    price: 7.6,
    img: "./images/products/frozen/vegetables.jpg",
  },
  {
    name: "Paratha",
    price: 10.0,
    img: "./images/products/frozen/paratha.jpg",
  },
  {
    name: "Pau Krapau",
    price: 8.5,
    img: "./images/products/frozen/paratha.jpg",
  },
  {
    name: "Frozen Fried Rice",
    price: 4.5,
    img: "./images/products/frozen/paratha.jpg",
  },
  {
    name: "Beef Patties",
    price: 9.0,
    img: "./images/products/frozen/paratha.jpg",
  },
  {
    name: "Chicken Patties",
    price: 9.0,
    img: "./images/products/frozen/paratha.jpg",
  },
  {
    name: "Tilapia Fish",
    price: 13.0,
    img: "./images/products/frozen/paratha.jpg",
  },
];

const modalmeat = [
  {
    name: "Coca-Cola",
    price: 12.0,
    img: "./images/products/beverages/cocacola.jpg",
  },
  {
    name: "Sprite",
    price: 14.5,
    img: "./images/products/beverages/sprite.jpg",
  },
  {
    name: "Milo",
    price: 8.0,
    img: "./images/products/beverages/milo.jfif",
  },
  {
    name: "Chrysanthemum",
    price: 9.0,
    img: "./images/products/beverages/chrysanthemum.png",
  },
  {
    name: "Carlsberg",
    price: 7.6,
    img: "./images/products/beverages/carlsberg.jpg",
  },
  {
    name: "Sagota",
    price: 10.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Lipton Green Tea",
    price: 8.5,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Lipton Iced Lemon Tea",
    price: 4.5,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Asahi",
    price: 9.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Heineken",
    price: 9.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Soya",
    price: 13.0,
    img: "./images/products/beverages/sagota.jpg",
  },
];

const modalproduce = [
  {
    name: "Sardines",
    price: 12.0,
    img: "./images/products/canned/sardine.jfif",
  },
  {
    name: "Spaghetti Sauce",
    price: 14.5,
    img: "./images/products/canned/spaghettisauce.jpg",
  },
  {
    name: "Carbonara Sauce",
    price: 8.0,
    img: "./images/products/canned/carbonarasauce.jpg",
  },
  {
    name: "Mackerels",
    price: 9.0,
    img: "./images/products/canned/mackerel.jfif",
  },
  {
    name: "Canned Pineapples",
    price: 7.6,
    img: "./images/products/canned/pineapple.jfif",
  },
  {
    name: "Baked Beans",
    price: 10.0,
    img: "./images/products/canned/bakedbeans.jfif",
  },
  {
    name: "Button Mushrooms",
    price: 8.5,
    img: "./images/products/canned/sardine.jfif",
  },
  {
    name: "Chicken Curry",
    price: 4.5,
    img: "./images/products/canned/sardine.jfif",
  },
  {
    name: "Rendang",
    price: 9.0,
    img: "./images/products/canned/sardine.jfif",
  },
  {
    name: "Sambal",
    price: 9.0,
    img: "./images/products/canned/sardine.jfif",
  },
  {
    name: "Ayam Brand Sardines",
    price: 13.0,
    img: "./images/products/canned/sardine.jfif",
  },
];

const modalcleaners = [
  {
    name: "Colgate Toothpaste",
    price: 12.0,
    img: "./images/products/personalcare/colgate.jpeg",
  },
  {
    name: "Colgate Toothbrush",
    price: 14.5,
    img: "./images/products/personalcare/colgatebrush.jpg",
  },
  {
    name: "Floss",
    price: 8.0,
    img: "./images/products/personalcare/floss.png",
  },
  {
    name: "Gatsby Hair Gel",
    price: 9.0,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Gatsby Hairwax",
    price: 7.6,
    img: "./images/products/personalcare/hairwax.jfif",
  },
  {
    name: "Razors",
    price: 10.0,
    img: "./images/products/personalcare/razors.jpg",
  },
  {
    name: "Baby Oil",
    price: 8.5,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Deodorant",
    price: 4.5,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Deodorant Spray",
    price: 9.0,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Hair Serum",
    price: 9.0,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Body Wash",
    price: 13.0,
    img: "./images/products/personalcare/hairgel.png",
  },
];

const modalpaper = [
  {
    name: "Coca-Cola",
    price: 12.0,
    img: "./images/products/beverages/cocacola.jpg",
  },
  {
    name: "Sprite",
    price: 14.5,
    img: "./images/products/beverages/sprite.jpg",
  },
  {
    name: "Milo",
    price: 8.0,
    img: "./images/products/beverages/milo.jfif",
  },
  {
    name: "Chrysanthemum",
    price: 9.0,
    img: "./images/products/beverages/chrysanthemum.png",
  },
  {
    name: "Carlsberg",
    price: 7.6,
    img: "./images/products/beverages/carlsberg.jpg",
  },
  {
    name: "Sagota",
    price: 10.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Lipton Green Tea",
    price: 8.5,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Lipton Iced Lemon Tea",
    price: 4.5,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Asahi",
    price: 9.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Heineken",
    price: 9.0,
    img: "./images/products/beverages/sagota.jpg",
  },
  {
    name: "Soya",
    price: 13.0,
    img: "./images/products/beverages/sagota.jpg",
  },
];

const modalpersonalCareProducts = [
  {
    name: "Colgate Toothpaste",
    price: 12.0,
    img: "./images/products/personalcare/colgate.jpeg",
  },
  {
    name: "Colgate Toothbrush",
    price: 14.5,
    img: "./images/products/personalcare/colgatebrush.jpg",
  },
  {
    name: "Floss",
    price: 8.0,
    img: "./images/products/personalcare/floss.png",
  },
  {
    name: "Gatsby Hair Gel",
    price: 9.0,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Gatsby Hairwax",
    price: 7.6,
    img: "./images/products/personalcare/hairwax.jfif",
  },
  {
    name: "Razors",
    price: 10.0,
    img: "./images/products/personalcare/razors.jpg",
  },
  {
    name: "Baby Oil",
    price: 8.5,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Deodorant",
    price: 4.5,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Deodorant Spray",
    price: 9.0,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Hair Serum",
    price: 9.0,
    img: "./images/products/personalcare/hairgel.png",
  },
  {
    name: "Body Wash",
    price: 13.0,
    img: "./images/products/personalcare/hairgel.png",
  },
];

const modalothers = [
  {
    name: "Waffles",
    price: 12.0,
    img: "./images/products/frozen/waffle.jpg",
  },
  {
    name: "Ayamas Frozen Wings",
    price: 14.5,
    img: "./images/products/frozen/ayamas_wings.jpg",
  },
  {
    name: "Chicken Frankfurters",
    price: 8.0,
    img: "./images/products/frozen/ayamas_frank.png",
  },
  {
    name: "Instant Pizza",
    price: 9.0,
    img: "./images/products/frozen/waffle.jpg",
  },
  {
    name: "Frozen Vegetables",
    price: 7.6,
    img: "./images/products/frozen/vegetables.jpg",
  },
  {
    name: "Paratha",
    price: 10.0,
    img: "./images/products/frozen/paratha.jpg",
  },
  {
    name: "Pau Krapau",
    price: 8.5,
    img: "./images/products/frozen/paratha.jpg",
  },
  {
    name: "Frozen Fried Rice",
    price: 4.5,
    img: "./images/products/frozen/paratha.jpg",
  },
  {
    name: "Beef Patties",
    price: 9.0,
    img: "./images/products/frozen/paratha.jpg",
  },
  {
    name: "Chicken Patties",
    price: 9.0,
    img: "./images/products/frozen/paratha.jpg",
  },
  {
    name: "Tilapia Fish",
    price: 13.0,
    img: "./images/products/frozen/paratha.jpg",
  },
];

modalbeverages.forEach((products) => {
  var beverageCard = document.createElement("div");
  beverageCard.className = "card card-block mx-2 text-center";

  var beveragePhoto = document.createElement("img");
  beveragePhoto.className = "card-img-top";
  beveragePhoto.src = products.img;
  beveragePhoto.style.height = "9em";

  var beverageButton = document.createElement("button");
  beverageButton.className = "add-to-cart-button btn btn-success";
  beverageButton.textContent = "Add to List";
  addtolist(beverageButton, products.name, products.price);

  var beverageName = document.createElement("h6");
  beverageName.className = "card-title";
  beverageName.textContent = products.name;

  var beveragePrice = document.createElement("p");
  beveragePrice.className = "card-text";
  beveragePrice.textContent = "RM " + products.price.toFixed(2);

  beverageCard.appendChild(beveragePhoto);
  beverageCard.appendChild(beverageName);
  beverageCard.appendChild(beveragePrice);
  beverageCard.appendChild(beverageButton);
  beveragesModal.appendChild(beverageCard);
});

modalbreadbakery.forEach((products) => {
  var breadBakeryCard = document.createElement("div");
  breadBakeryCard.className = "card card-block mx-2 text-center";

  var breadBakeryPhoto = document.createElement("img");
  breadBakeryPhoto.className = "card-img-top";
  breadBakeryPhoto.src = products.img;
  breadBakeryPhoto.style.height = "9em";

  var breadBakeryButton = document.createElement("button");
  breadBakeryButton.className =
    "add-to-cart-button btn btn-success align-self-end";
  breadBakeryButton.textContent = "Add to List";
  addtolist(breadBakeryButton, products.name, products.price);

  var breadBakeryName = document.createElement("h6");
  breadBakeryName.className = "card-title";
  breadBakeryName.textContent = products.name;

  var breadBakeryPrice = document.createElement("p");
  breadBakeryPrice.className = "card-text";
  breadBakeryPrice.textContent = "RM " + products.price.toFixed(2);

  breadBakeryCard.appendChild(breadBakeryPhoto);
  breadBakeryCard.appendChild(breadBakeryName);
  breadBakeryCard.appendChild(breadBakeryPrice);
  breadBakeryCard.appendChild(breadBakeryButton);

  breadbakeryModal.appendChild(breadBakeryCard);
});

modalcanned.forEach((products) => {
  var cannedGoodsCard = document.createElement("div");
  cannedGoodsCard.className = "card card-block mx-2 text-center";

  var cannedGoodsPhoto = document.createElement("img");
  cannedGoodsPhoto.className = "card-img-top";
  cannedGoodsPhoto.src = products.img;
  cannedGoodsPhoto.style.height = "9em";

  var cannedButton = document.createElement("button");
  cannedButton.className = "add-to-cart-button btn btn-success";
  cannedButton.textContent = "Add to List";
  addtolist(cannedButton, products.name, products.price);

  var cannedGoodsName = document.createElement("h6");
  cannedGoodsName.className = "card-title";
  cannedGoodsName.textContent = products.name;

  var cannedGoodsPrice = document.createElement("p");
  cannedGoodsPrice.className = "card-text";
  cannedGoodsPrice.textContent = "RM " + products.price.toFixed(2);

  cannedGoodsCard.appendChild(cannedGoodsPhoto);
  cannedGoodsCard.appendChild(cannedGoodsName);
  cannedGoodsCard.appendChild(cannedGoodsPrice);
  cannedGoodsCard.appendChild(cannedButton);

  cannedModal.appendChild(cannedGoodsCard);
});

modaldairy.forEach((products) => {
  var dairyCard = document.createElement("div");
  dairyCard.className = "card card-block mx-2 text-center";

  var dairyPhoto = document.createElement("img");
  dairyPhoto.className = "card-img-top";
  dairyPhoto.src = products.img;
  dairyPhoto.style.height = "9em";

  var dairyButton = document.createElement("button");
  dairyButton.className = "add-to-cart-button btn btn-success";
  dairyButton.textContent = "Add to List";
  addtolist(dairyButton, products.name, products.price);

  var dairyName = document.createElement("h6");
  dairyName.className = "card-title";
  dairyName.textContent = products.name;

  var dairyPrice = document.createElement("p");
  dairyPrice.className = "card-text";
  dairyPrice.textContent = "RM " + products.price.toFixed(2);

  dairyCard.appendChild(dairyPhoto);
  dairyCard.appendChild(dairyName);
  dairyCard.appendChild(dairyPrice);
  dairyCard.appendChild(dairyButton);

  dairyModal.appendChild(dairyCard);
});

modaldrybaking.forEach((products) => {
  var drybakingCard = document.createElement("div");
  drybakingCard.className = "card card-block mx-2 text-center";

  var drybakingPhoto = document.createElement("img");
  drybakingPhoto.className = "card-img-top";
  drybakingPhoto.src = products.img;
  drybakingPhoto.style.height = "9em";

  var drybakingButton = document.createElement("button");
  drybakingButton.className = "add-to-cart-button btn btn-success";
  drybakingButton.textContent = "Add to List";
  addtolist(drybakingButton, products.name, products.price);

  var drybakingName = document.createElement("h6");
  drybakingName.className = "card-title";
  drybakingName.textContent = products.name;

  var drybakingPrice = document.createElement("p");
  drybakingPrice.className = "card-text";
  drybakingPrice.textContent = "RM " + products.price.toFixed(2);

  drybakingCard.appendChild(drybakingPhoto);
  drybakingCard.appendChild(drybakingName);
  drybakingCard.appendChild(drybakingPrice);
  drybakingCard.appendChild(drybakingButton);

  drybakingModal.appendChild(drybakingCard);
});

modalfrozen.forEach((products) => {
  var frozenFoodCard = document.createElement("div");
  frozenFoodCard.className = "card card-block mx-2 text-center";

  var frozenFoodPhoto = document.createElement("img");
  frozenFoodPhoto.className = "card-img-top";
  frozenFoodPhoto.src = products.img;
  frozenFoodPhoto.style.height = "9em";

  var frozenFoodButton = document.createElement("button");
  frozenFoodButton.className =
    "add-to-cart-button btn btn-success align-self-end";
  frozenFoodButton.textContent = "Add to List";
  addtolist(frozenFoodButton, products.name, products.price);

  var frozenFoodName = document.createElement("h6");
  frozenFoodName.className = "card-title";
  frozenFoodName.textContent = products.name;

  var frozenFoodPrice = document.createElement("p");
  frozenFoodPrice.className = "card-text";
  frozenFoodPrice.textContent = "RM " + products.price.toFixed(2);

  frozenFoodCard.appendChild(frozenFoodPhoto);
  frozenFoodCard.appendChild(frozenFoodName);
  frozenFoodCard.appendChild(frozenFoodPrice);
  frozenFoodCard.appendChild(frozenFoodButton);

  frozenModal.appendChild(frozenFoodCard);
});

modalmeat.forEach((products) => {
  var meatCard = document.createElement("div");
  meatCard.className = "card card-block mx-2 text-center";

  var meatPhoto = document.createElement("img");
  meatPhoto.className = "card-img-top";
  meatPhoto.src = products.img;
  meatPhoto.style.height = "9em";

  var meatButton = document.createElement("button");
  meatButton.className = "add-to-cart-button btn btn-success";
  meatButton.textContent = "Add to List";
  addtolist(meatButton, products.name, products.price);

  var meatName = document.createElement("h6");
  meatName.className = "card-title";
  meatName.textContent = products.name;

  var meatPrice = document.createElement("p");
  meatPrice.className = "card-text";
  meatPrice.textContent = "RM " + products.price.toFixed(2);

  meatCard.appendChild(meatPhoto);
  meatCard.appendChild(meatName);
  meatCard.appendChild(meatPrice);
  meatCard.appendChild(meatButton);

  meatModal.appendChild(meatCard);
});

modalproduce.forEach((products) => {
  var produceCard = document.createElement("div");
  produceCard.className = "card card-block mx-2 text-center";

  var producePhoto = document.createElement("img");
  producePhoto.className = "card-img-top";
  producePhoto.src = products.img;
  producePhoto.style.height = "9em";

  var produceButton = document.createElement("button");
  produceButton.className = "add-to-cart-button btn btn-success";
  produceButton.textContent = "Add to List";
  addtolist(produceButton, products.name, products.price);

  var produceName = document.createElement("h6");
  produceName.className = "card-title";
  produceName.textContent = products.name;

  var producePrice = document.createElement("p");
  producePrice.className = "card-text";
  producePrice.textContent = "RM " + products.price.toFixed(2);

  produceCard.appendChild(producePhoto);
  produceCard.appendChild(produceName);
  produceCard.appendChild(producePrice);
  produceCard.appendChild(produceButton);

  produceModal.appendChild(produceCard);
});

modalcleaners.forEach((products) => {
  var cleanersCard = document.createElement("div");
  cleanersCard.className = "card card-block mx-2 text-center";

  var cleanersPhoto = document.createElement("img");
  cleanersPhoto.className = "card-img-top";
  cleanersPhoto.src = products.img;
  cleanersPhoto.style.height = "9em";

  var cleanersButton = document.createElement("button");
  cleanersButton.className = "add-to-cart-button btn btn-success";
  cleanersButton.textContent = "Add to List";
  addtolist(cleanersButton, products.name, products.price);

  var cleanersName = document.createElement("h6");
  cleanersName.className = "card-title";
  cleanersName.textContent = products.name;

  var cleanersPrice = document.createElement("p");
  cleanersPrice.className = "card-text";
  cleanersPrice.textContent = "RM " + products.price.toFixed(2);

  cleanersCard.appendChild(cleanersPhoto);
  cleanersCard.appendChild(cleanersName);
  cleanersCard.appendChild(cleanersPrice);
  cleanersCard.appendChild(cleanersButton);

  cleanersModal.appendChild(cleanersCard);
});

modalpaper.forEach((products) => {
  var paperCard = document.createElement("div");
  paperCard.className = "card card-block mx-2 text-center";

  var paperPhoto = document.createElement("img");
  paperPhoto.className = "card-img-top";
  paperPhoto.src = products.img;
  paperPhoto.style.height = "9em";

  var paperButton = document.createElement("button");
  paperButton.className = "add-to-cart-button btn btn-success";
  paperButton.textContent = "Add to List";
  addtolist(paperButton, products.name, products.price);

  var paperName = document.createElement("h6");
  paperName.className = "card-title";
  paperName.textContent = products.name;

  var paperPrice = document.createElement("p");
  paperPrice.className = "card-text";
  paperPrice.textContent = "RM " + products.price.toFixed(2);

  paperCard.appendChild(paperPhoto);
  paperCard.appendChild(paperName);
  paperCard.appendChild(paperPrice);
  paperCard.appendChild(paperButton);

  paperModal.appendChild(paperCard);
});

modalpersonalCareProducts.forEach((products) => {
  var personalCareCard = document.createElement("div");
  personalCareCard.className = "card card-block mx-2 text-center";

  var personalCarePhoto = document.createElement("img");
  personalCarePhoto.className = "card-img-top";
  personalCarePhoto.src = products.img;
  personalCarePhoto.style.height = "9em";

  var personalCareButton = document.createElement("button");
  personalCareButton.className = "add-to-cart-button btn btn-success";
  personalCareButton.textContent = "Add to List";
  addtolist(personalCareButton, products.name, products.price);

  var personalCareName = document.createElement("h6");
  personalCareName.className = "card-title";
  personalCareName.textContent = products.name;

  var personalCarePrice = document.createElement("p");
  personalCarePrice.className = "card-text";
  personalCarePrice.textContent = products.price.toFixed(2);

  personalCareCard.appendChild(personalCarePhoto);
  personalCareCard.appendChild(personalCareName);
  personalCareCard.appendChild(personalCarePrice);
  personalCareCard.appendChild(personalCareButton);

  personalCareModal.appendChild(personalCareCard);
});

modalothers.forEach((products) => {
  var othersCard = document.createElement("div");
  othersCard.className = "card card-block mx-2 text-center";

  var othersPhoto = document.createElement("img");
  othersPhoto.className = "card-img-top";
  othersPhoto.src = products.img;
  othersPhoto.style.height = "9em";

  var othersButton = document.createElement("button");
  othersButton.className = "add-to-cart-button btn btn-success";
  othersButton.textContent = "Add to List";
  addtolist(othersButton, products.name, products.price);

  var othersName = document.createElement("h6");
  othersName.className = "card-title";
  othersName.textContent = products.name;

  var othersPrice = document.createElement("p");
  othersPrice.className = "card-text";
  othersPrice.textContent = "RM " + products.price.toFixed(2);

  othersCard.appendChild(othersPhoto);
  othersCard.appendChild(othersName);
  othersCard.appendChild(othersPrice);
  othersCard.appendChild(othersButton);

  othersModal.appendChild(othersCard);
});
