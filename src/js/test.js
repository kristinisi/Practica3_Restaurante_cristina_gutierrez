//Probando la creación de los objetos independientes
console.log("Probando la creación de objetos independientes:");

//Probamos con el objeto Dish
let pizza = new Dish("Pizza");
console.log(pizza.toString());
pizza.description = "Pizza without pineapple, that is not pizza";
pizza.ingredients = ["tomato", "chesse", "jam", "mushrooms"];
pizza.image = "image";
console.log(pizza.toString());
let hamburger = new Dish("Hamburger");
hamburger.description = "The best hamburger that you eat in your life.";
hamburger.ingredients = [
  "bread",
  "meat of beef",
  "letuce",
  "tomato",
  "bacon",
  "onion",
  "bbq sauce",
];
hamburger.image = "image";

//provocamos algunos fallos
// let dish02 = new Dish();
// pizza.description = "";
// pizza.ingredients = "sjdlaj";
// console.log(pizza.ingredients);

//Probamos con el objeto Category
let vegetarian = new Category("Vegetarian");
console.log(vegetarian.toString());
vegetarian.description = "This category is for vegetarian people";
console.log(vegetarian.toString());
let normalCategory = new Category("Normal Category");
normalCategory.description =
  "This is a normal category for people who do not have any type of allergen";

//generamos algunos fallos
// let normalCategory = new Category();
// vegetarian.description = 236;

//Probamos con el objeto Allergen
let egg = new Allergen("Egg");
console.log(egg.toString());
egg.description = "Person who cannot eat egg";
console.log(egg.toString());
let soya = new Allergen("Soya");
egg.description = "Person who cannor ear soya";

//generamos algunos fallos
// let soya = new Allergen();
// egg.description = 236;
// egg.name = 236;

//Probamos con el objeto Menu
let saturdayMenu = new Menu("Saturday Menu");
console.log(saturdayMenu.toString());
saturdayMenu.description =
  "Complete Menu with entrant, main dish, second dish, dessert and a drink.";
console.log(saturdayMenu.description);
let dailymenu = new Menu("Daily Menu");
dailymenu.description =
  "Daily Menu with main dish, second dish, dessert and drink for a better price.";

//generamos algunos fallos
// let dailymenu = new Menu();
// saturdayMenu.description = [];

//Probamos con el objeto Coordinate
let coordinate01 = new Coordinate("123.45", "-56.456");
console.log(coordinate01.toString());
let coordinate02 = new Coordinate("-43.5", "-34.26");

//generamos algunos fallos
// let coordinate02 = new Coordinate(123.2, -42.36);
// let coordinate03 = new Coordinate();

//Probamos con el objeto restaurant
let restaurant01 = new Restaurant("Blue");
console.log(restaurant01.toString());
restaurant01.description = "Restaurant in the city center of London.";
restaurant01.location = coordinate01;
console.log(restaurant01.toString());
let restaurant02 = new Restaurant("Jone's Restaurant");
restaurant02.description = "The best restaurant in Cambridge.";
restaurant02.location = coordinate02;

//generamos algunos fallos
// let restaurant02 = new Restaurant();
// restaurant01.description = 1236;
// restaurant01.location = 110.3, 1523.6;

//Probando RestaurantManager
console.log("---------------Probando RestaurantManager---------------");

let manager = RestaurantsManager.getInstance();

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
function showRestaurants() {
  console.log("List of restaurants");
  for (const restaurant of manager.restaurants) {
    console.log(restaurant);
  }
}

function showDishesIn(iterator) {
  console.log("Dishes: ");
  for (const dish of iterator) {
    console.log(dish);
  }
}

//nos creamos una función de comparación para meterla como un argumento
const comparison = function (elemA, elemB) {
  return elemA.name.localeCompare(elemB.name);
};

//con creamos una función que cumpla un criterio concreto
const filt = function (dishIngredient) {
  for (let ing of dishIngredient.ingredients) {
    if (ing === "tomato") {
      return true;
    }
  }
  return false;
};

manager.addCategory(vegetarian);
manager.addCategory(normalCategory);
// manager.addCategory(vegetarian); //probamos a añadir de nuevo la misma categoría
// mostramos las categorias de manager
showCategories();
// manager.removeCategory(vegetarian);
// manager.removeCategory(vegetarian); //probamos a eliminar la misma categoría
// manager.removeCategory("hola que tal"); //probamos a eliminar algo que no sea una categoria
// manager.removeCategory(restaurant01);
// mostramos las categorias de manager.
showCategories();

manager.addMenu(saturdayMenu, dailymenu);
// manager.addMenu(menu01); //probamos que no se pueda introducir un mismo menú
showMenus();
manager.removeMenu(saturdayMenu);
// manager.removeMenu(menu01); //probamos a eliminar el mismo menu
// manager.removeMenu(vegetarian); //probamos a eliminar algo que no sea un menu
showMenus();

manager.addAllergen(egg, soya);
// manager.addAllergen(egg); //probamos que no se pueda introducir un mismo menú
// manager.addAllergen(saturdayMenu); //pronamos que solo se pueda introducir un alergeno
showAllergens();
manager.removeAllergen(egg);
// manager.removeAllergen(egg); //probamos a eliminar el mismo alergeno
// manager.removeAllergen(saturdayMenu); //probamo a eliminar un tipo que no sea Allergen
showAllergens();

manager.addDish(pizza);
console.log(manager.dishes);
// manager.addDish(saturdayMenu); //probamos a introducir un dato que no sea un plato
// manager.addDish(pizza); //probamos a introducir un plato ya existente
// manager.removeDish(pizza);
// manager.removeDish(pizza);//probamos a eliminar el mismo plato
// manager.removeDish(saturdayMenu); //probamos a eliminar un tipo que no sea plato
console.log(manager.dishes);

manager.addRestaurant(restaurant01, restaurant02);
// manager.addRestaurant(restaurant01); //añadimos de nuevo el mismo restaurante
// manager.addRestaurant("lkasjd"); //añadimos un tipo que no es Restaurant
showRestaurants();
manager.removeRestaurant(restaurant01);
// manager.removeRestaurant(restaurant01); //eliminamos el mismo restaurante
// manager.removeRestaurant("laksjd"); //eliminamos un tipo que no es Restaurant
showRestaurants();

console.log("---añadidos---");
//probamos a añadir un plato a la categoria
showCategories();
console.log(manager.dishes);
manager.assignCategoryToDish(normalCategory, pizza, hamburger);
showCategories();
console.log(manager.dishes);
let veganCategory = new Category("Vegan");
manager.assignCategoryToDish(veganCategory, pizza);
showCategories();

let fish = new Dish("Fish");
console.log("añadimos el plato fish");
manager.assignCategoryToDish(vegetarian, fish);
showCategories();
console.log(manager.dishes);

console.log("-----eliminacion de platos-----");
//desasignar plato a la categoria
// manager.deassignCategoryToDish(normalCategory, hamburger);
manager.removeDish(hamburger);
showCategories();
console.log(manager.dishes);

//comprobamos las funciones asignar alergia al plato y desasignar
console.log("-----asignación y desasignacion en alergeno-----");
showAllergens();
manager.assignAllergenToDish(egg, hamburger);
manager.assignAllergenToDish(soya, pizza, fish);
showAllergens();
//probamos a meter el mismo plato para que nos genere una excepcion
// manager.assignAllergenToDish(egg, hamburger);
// manager.assignAllergenToDish(restaurant01, "shoda");
// manager.assignAllergenToDish(egg, "alsdj");
//desasignamos un alergeno a un plato
manager.deassignAllergenToDish(soya, fish);
showAllergens();
try {
  // manager.deassignAllergenToDish(saturdayMenu, fish);
  manager.deassignAllergenToDish(egg, "hamburger");
} catch (error) {
  console.log(error.message);
}

//vamos con asignar y desasignar menu
showMenus();
manager.addMenu(saturdayMenu);
showMenus();
manager.removeMenu(dailymenu);
showMenus();
manager.assignDishToMenu(saturdayMenu, pizza, hamburger);
manager.assignDishToMenu(dailymenu, fish);
showMenus();
try {
  manager.assignDishToMenu(dailymenu, fish);
} catch (error) {
  console.log(error.message);
}

manager.deassignDishToMenu(saturdayMenu, pizza);
showMenus();
try {
  manager.deassignDishToMenu(saturdayMenu, pizza);
} catch (error) {
  console.log(error.message);
}

//probamos cambiar de orden los platos en el menu
showMenus();
manager.assignDishToMenu(saturdayMenu, pizza);
showMenus();
// manager.changeDishesPositionsInMenu(saturdayMenu, hamburger, fish);
showMenus();
try {
  // manager.changeDishesPositionsInMenu(saturdayMenu, hamburger);
  // manager.changeDishesPositionsInMenu("hola", hamburger, fish);
  // manager.changeDishesPositionsInMenu("hola", hamburger, fish);
  // manager.changeDishesPositionsInMenu(saturdayMenu, hamburger, fish);
} catch (error) {
  console.log(error.message);
}

console.log("probando metodos iterar platos");
showCategories();
manager.assignCategoryToDish(normalCategory, fish, hamburger);
let iteratorCategory = manager.getDishesInCategroy(normalCategory);
showDishesIn(iteratorCategory);
let iteratorC2 = manager.getDishesInCategroy(normalCategory, comparison);
showDishesIn(iteratorC2);

try {
  let iteratorC3 = manager.getDishesInCategroy(comparison);
  showDishesIn(iteratorC3);
} catch (error) {
  console.log(error.message);
}

showAllergens();
manager.assignAllergenToDish(soya, hamburger, fish);
showAllergens();
let i1 = manager.getDishesWithAllergen(soya, comparison);
showDishesIn(i1);
try {
  let i2 = manager.getDishesWithAllergen();
  showDishesIn(i2);
} catch (error) {
  console.log(error.message);
}

console.log("---------------------------------------");
console.log(manager.dishes);
let i3 = manager.findDishes(filt);
showDishesIn(i3);
