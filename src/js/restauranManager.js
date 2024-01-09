//Declaramos las clases específicas como clases
class RestaurantsManagerException extends BaseException {
  constructor(fileName, lineNumber) {
    super("Error: RestaurantManager Exception.", fileName, lineNumber);
    this.name = "RestaurantManager";
  }
}

class DishException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super("Error: The method needs a Dish parameter.", fileName, lineNumber);
    this.name = "DishException";
  }
}

class CategoryException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super(
      "Error: The method needs a Category parameter.",
      fileName,
      lineNumber
    );
    this.name = "CategoryException";
  }
}

class AllergenException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super(
      "Error: The method needs a Allergen parameter.",
      fileName,
      lineNumber
    );
    this.name = "AllergenException";
  }
}

class MenuException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super("Error: The method needs a Menu parameter.", fileName, lineNumber);
    this.name = "MenuException";
  }
}

class RestaurantException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super(
      "Error: The method needs a Restaurant parameter.",
      fileName,
      lineNumber
    );
    this.name = "RestaurantException";
  }
}

class CoordinateException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super(
      "Error: The method needs a Coordinate parameter.",
      fileName,
      lineNumber
    );
    this.name = "CoordinateException";
  }
}

//Patrón Singleton
let RestaurantsManager = (function () {
  let instanciated;

  //Dentro de la función anónima declaramos la clase RestaurantsMager
  class RestaurantsMager {
    //Definimos los atributos privados del objeto
    #systemName = "";
    #dishesCategory = {
      category,
      dishes: [],
    };
    #allergenType = {
      alergen,
      dishes: [],
    };
    #menus = {
      menuName,
      dishes: [],
    };
    #restaurants = {
      restaurant,
      coodenate,
    };
    constructor(systemName) {
      //La función se invoca con el operador new
      if (!new.target) throw new InvalidAccessConstructorException();
    }

    //Definimos los métodos

    //Devuelve un iterador que permite recorrer las categorías del sistema
    getterCategories() {
      const categories = this.#dishesCategory;
      return {
        *[Symbol.iterator]() {
          for (const category in categories) {
            if (categories.hasOwnProperty(category)) {
              yield category;
            }
          }
        },
      };
    }

    //Devuelve un iterador que permite recorrer los menus del sistema
    getterMenus() {
      const menuIte = this.#menus;
      return {
        *[Symbol.iterator]() {
          for (const menu of menuIte) {
            if (menuIte.hasOwnProperty(menu)) {
              yield menu;
            }
          }
        },
      };
    }

    //Devuelve un iterador que permite recorrer los alérgenos del sistema
    getterAllergens() {
      const allergens = this.#allergenType;
      return {
        *[Symbol.iterator]() {
          for (const allergen of allergens) {
            if (allergens.hasOwnProperty(allergen)) {
              yield allergen;
            }
          }
        },
      };
    }

    //Devuelve un iterador que permite recorrer los restaurantes del sistema
    getterRestaurants() {
      const rest = this.#restaurants;
      return {
        *[Symbol.iterator]() {
          for (const r of rest) {
            if (rest.hasOwnProperty(r)) {
              yield r;
            }
          }
        },
      };
    }
  }

  //Inicialización del Singleton
  function init() {}
  return {
    //Devuelve un objeto con el método getInstance
    getInstace: function () {
      //Si la variable instanciated es undefined, primera ejecución, ejecuta init.
      if (!instanciated) {
        //instanciated contiene el objeto único
        instanciated = init();
      }
      //Si ya está asignado, devuelve la asignación
      return instanciated;
    },
  };
})();
