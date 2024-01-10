//metemos en una función el for of para recorrer las categorías y que nos las muestre
//eso nos evita ir repitiendo el mismo código
function showCategories() {
  console.log("List of categories");
  for (const category of manager.categories) {
    console.log(category);
  }
}
function showMenus() {
  console.log("List of menus");
  for (const menu of manager.menus) {
    console.log(menu);
  }
}
function showAllergens() {
  console.log("List of allergens");
  for (const allergen of manager.allergens) {
    console.log(allergen);
  }
}

//Probando la creación de los objetos independientes
console.log("Probando la creación de objetos independientes:");

//Probamos con el objeto Dish
let dish01 = new Dish("Pizza");
console.log(dish01.toString());
dish01.description = "Pizza without pineapple, that is not pizza";
dish01.ingredients = ["tomato", "chesse", "jam", "mushrooms"];
dish01.image = "image";
console.log(dish01.toString());
let dish02 = new Dish("Hamburger");
dish02.description = "The best hamburger that you eat in your life.";
dish02.ingredients = [
  "bread",
  "meat of beef",
  "letuce",
  "tomato",
  "bacon",
  "onion",
  "bbq sauce",
];
dish02.image = "image";

//provocamos algunos fallos
// let dish02 = new Dish();
// dish01.description = "";
// dish01.ingredients = "sjdlaj";
// console.log(dish01.ingredients);

//Probamos con el objeto Category
let category01 = new Category("Vegetarian");
console.log(category01.toString());
category01.description = "This category is for vegetarian people";
console.log(category01.toString());
let category02 = new Category("Normal Category");
category02.description =
  "This is a normal category for people who do not have any type of allergen";

//generamos algunos fallos
// let category02 = new Category();
// category01.description = 236;

//Probamos con el objeto Allergen
let allergen01 = new Allergen("Egg");
console.log(allergen01.toString());
allergen01.description = "Person who cannot eat egg";
console.log(allergen01.toString());
let allergen02 = new Allergen("Soya");
allergen01.description = "Person who cannor ear soya";

//generamos algunos fallos
// let allergen02 = new Allergen();
// allergen01.description = 236;
// allergen01.name = 236;

//Probamos con el objeto Menu
let menu01 = new Menu("Saturday Menu");
console.log(menu01.toString());
menu01.description =
  "Complete Menu with entrant, main dish, second dish, dessert and a drink.";
console.log(menu01.description);
let menu02 = new Menu("Daily Menu");
menu02.description =
  "Daily Menu with main dish, second dish, dessert and drink for a better price.";

//generamos algunos fallos
// let menu02 = new Menu();
// menu01.description = [];

//Probamos con el objeto Coordinate
let coordinate01 = new Coordinate("123.45", "-56.456");
console.log(coordinate01.toString());

//generamos algunos fallos
// let coordinate02 = new Coordinate(123.2, -42.36);
// let coordinate03 = new Coordinate();

//Probamos con el objeto restaurant
let restaurant01 = new Restaurant("Blue");
console.log(restaurant01.toString());
restaurant01.description = "Restaurant in the city center of London.";
restaurant01.location = coordinate01;
console.log(restaurant01.toString());

//generamos algunos fallos
// let restaurant02 = new Restaurant();
// restaurant01.description = 1236;
// restaurant01.location = 110.3, 1523.6;

//Probando RestaurantManager
console.log("---------------Probando RestaurantManager---------------");

let manager = RestaurantsManager.getInstace();
manager.addCategory(category01);
manager.addCategory(category02);
// manager.addCategory(category01); //probamos a añadir de nuevo la misma categoría
// mostramos las categorias de manager
showCategories();
manager.removeCategory(category01);
// manager.removeCategory(category01); //probamos a eliminar la misma categoría
// manager.removeCategory("hola que tal"); //probamos a eliminar algo que no sea una categoria
// manager.removeCategory(restaurant01);
// mostramos las categorias de manager.
showCategories();

manager.addMenu(menu01, menu02);
// manager.addMenu(menu01); //probamos que no se pueda introducir un mismo menú
showMenus();
manager.removeMenu(menu01);
// manager.removeMenu(menu01); //probamos a eliminar el mismo menu
// manager.removeMenu(category01); //probamos a eliminar algo que no sea un menu
showMenus();

manager.addAllergen(allergen01, allergen02);
// manager.addAllergen(allergen01); //probamos que no se pueda introducir un mismo menú
// manager.addAllergen(menu01); //pronamos que solo se pueda introducir un alergeno
showAllergens();
manager.removeAllergen(allergen01);
// manager.removeAllergen(allergen01); //probamos a eliminar el mismo alergeno
// manager.removeAllergen(menu01); //probamo a eliminar un tipo que no sea Allergen
showAllergens();

manager.addDish(dish01, dish02);
console.log(manager.dishes);
// manager.addDish(menu01); //probamos a introducir un dato que no sea un plato
// manager.addDish(dish01); //probamos a introducir un plato ya existente
