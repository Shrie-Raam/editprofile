const frozenFoods = document.querySelector("#c-frozen-foods");
const cannedGoods = document.querySelector("#c-canned-goods");
const beverage = document.querySelector("#c-beverages");
const personalCare = document.querySelector("#c-personal-care");
const frozenButton = document.querySelector(".c-frozen-foods-button"); // what is this?
const cartContent = document.querySelector(".cart-content");
const cartItems = document.querySelector(".cart-items");
var totalprice = 0; //total price of the list

var list = {};
list["title"] = "list 1";

const frozen = [
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
  // { name: 'Pau', price: 'RM8.50' },
  // { name: 'Frozen Fried Rice', price: 'RM4.50' },
  // { name: 'Beef Patties', price: 'RM9.00' },
  // { name: 'Chicken Patties', price: 'RM9.00' },
  // { name: 'Tilapia Fish', price: 'RM13.00' },
];

const canned = [
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
  // { name: 'Button Mushrooms', price: 'RM8.50' },
  // { name: 'Chicken Curry', price: 'RM4.50' },
  // { name: 'Rendang', price: 'RM9.00' },
  // { name: 'Sambal', price: 'RM9.00' },
  // { name: 'Ayam Brand Sardines', price: 'RM13.00' },
];

const beverages = [
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
  // { name: 'Lipton Green Tea', price: 'RM8.50' },
  // { name: 'Lipton Iced Lemon Tea', price: 'RM4.50' },
  // { name: 'Asahi', price: 'RM9.00' },
  // { name: 'Heineken', price: 'RM9.00' },
  // { name: 'Soya', price: 'RM13.00' },
];

const personalCareProducts = [
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
  // { name: 'Baby Oil', price: 'RM8.50' },
  // { name: 'Deodorant', price: 'RM4.50' },
  // { name: 'Deodorant Spray', price: 'RM9.00' },
  // { name: 'Hair Serum', price: 'RM9.00' },
  // { name: 'Body Wash', price: 'RM13.00' },
];

for (var i = 0; i < frozen.length; i++) {
  var frozenFoodCard = document.createElement("div");
  frozenFoodCard.className = "card card-block mx-2 text-center";

  var frozenFoodPhoto = document.createElement("img");
  frozenFoodPhoto.className = "card-img-top";
  frozenFoodPhoto.src = frozen[i].img;
  frozenFoodPhoto.style.height = "9em";

  var frozenFoodButton = document.createElement("button");
  frozenFoodButton.className =
    "add-to-cart-button btn btn-success align-self-end";
  frozenFoodButton.textContent = "Add to List";
  addtolist(frozenFoodButton, frozen[i].name, frozen[i].price);

  var frozenFoodName = document.createElement("h6");
  frozenFoodName.className = "card-title";
  frozenFoodName.textContent = frozen[i].name;

  var frozenFoodPrice = document.createElement("p");
  frozenFoodPrice.className = "card-text";
  frozenFoodPrice.textContent = "RM " + frozen[i].price.toFixed(2);

  frozenFoodCard.appendChild(frozenFoodPhoto);
  frozenFoodCard.appendChild(frozenFoodName);
  frozenFoodCard.appendChild(frozenFoodPrice);
  frozenFoodCard.appendChild(frozenFoodButton);

  frozenFoods.appendChild(frozenFoodCard);
}

beverages.forEach(function (products) {
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

  beverage.appendChild(beverageCard);
});

canned.forEach(function (products) {
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

  cannedGoods.appendChild(cannedGoodsCard);
});

personalCareProducts.forEach(function (products) {
  var personalCareCard = document.createElement("div");
  personalCareCard.className = "card card-block mx-2 text-center";

  var personalCarePhoto = document.createElement("img");
  personalCarePhoto.className = "card-img-top";

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

  personalCare.appendChild(personalCareCard);
});

function addtolist(button, productname, productprice) {
  button.addEventListener("click", function () {
    if (list.hasOwnProperty(productname)) {
      list[productname] += 1;
      totalprice += productprice;
      document.getElementById(
        "total-price-value"
      ).innerHTML = totalprice.toFixed(2);
      document.getElementById("multiplier" + productname).innerHTML =
        "×" + list[productname];
    } else {
      list[productname] = 1;
      var paper = document.getElementById("list_items");

      var productAdded =
        '<li class="list-group-item" id="li' +
        productname +
        '"><div class="inlist width-auto"><div class="row"><div class="col">' +
        productname +
        '</div><div class="col align-right">RM ' +
        productprice.toFixed(2) +
        '</div><div id="multiplier' +
        productname +
        '" > ×' +
        list[productname] +
        ' </div><div class="col"><a href="#"><img id="Bin' +
        productname +
        '" alt="" src="../images/delete.png" width="35"></a></div></div></div></li>';

      paper.insertAdjacentHTML("beforeend", productAdded);
      totalprice += productprice;
      document.getElementById(
        "total-price-value"
      ).innerHTML = totalprice.toFixed(2);
    }
    var deleteitem = document.getElementById("Bin" + productname + "");

    deleteitem.addEventListener("click", function () {
      delitemlist(productname, productprice);
    });
  });
}
// '+productname+','+ productprice +'
// productname,productprice
function delitemlist(productname, productprice) {
  console.log(productname + "  lol  " + productprice);
  document.getElementById("li" + productname + "").remove();
  totalprice -= list[productname] * productprice;
  document.getElementById("total-price-value").innerHTML = totalprice.toFixed(
    2
  );
  list[productname] = 0;
  document.getElementById("multiplier" + productname + "").innerHTML = list[
    productname
  ] = 0;
}

function toggleCart() {
  var cart = document.querySelector(".cart");
  console.log(cart);
  // if (cart.style.display == "none") {
  //   cart.style.display = "block";
  // } else {
  //   cart.style.display = "none";
  // }
  cart.classList.toggle("display-cart");
}
