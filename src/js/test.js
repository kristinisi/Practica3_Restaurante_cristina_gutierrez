//Probando la creación de los objetos independientes
console.log("Probando la creación de objetos independientes:");

//Probamos con el objeto Dish
let dish01 = new Dish("Pizza");
console.log(dish01.toString());
dish01.description = "Pizza without pineapple, that is not pizza";
dish01.ingredients = ["tomato", "chesse", "jam", "mushrooms"];
dish01.image = "image";
console.log(dish01.toString());

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

//generamos algunos fallos
// let category02 = new Category();
// category01.description = 236;

//Probamos con el objeto Allergen
let allergen01 = new Allergen("Egg");
console.log(allergen01.toString());
allergen01.description = "Person who cannot eat egg";
console.log(allergen01.toString());

//generamos algunos fallos
// let allergen02 = new Allergen();
// allergen01.description = 236;
// allergen01.name = 236;

//Probamos con el objeto Menu
let menu01 = new Menu("Saturday Menu");
console.log(menu01.toString());
menu01.description = "Complete Menu with two Dishes, dessert and a drink.";
console.log(menu01.description);

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
