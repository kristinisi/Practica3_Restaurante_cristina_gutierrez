//Declaramos las clases específicas como clases
class RestaurantsManagerException extends BaseException {
  constructor(
    message = "Error: RestaurantManager Generic Exception.",
    fileName,
    lineNumber
  ) {
    super(message, fileName, lineNumber);
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
class MenuException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super("Error: The method needs a Menu parameter.", fileName, lineNumber);
    this.name = "MenuException";
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

// class RestaurantException extends RestaurantsManagerException {
//   constructor(fileName, lineNumber) {
//     super(
//       "Error: The method needs a Restaurant parameter.",
//       fileName,
//       lineNumber
//     );
//     this.name = "RestaurantException";
//   }
// }

// class CoordinateException extends RestaurantsManagerException {
//   constructor(fileName, lineNumber) {
//     super(
//       "Error: The method needs a Coordinate parameter.",
//       fileName,
//       lineNumber
//     );
//     this.name = "CoordinateException";
//   }
// }

class CategoryInTheListException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super("Error: Category is already in the list.", fileName, lineNumber);
    this.name = "CategoryInTheListException";
  }
}

class CategoryNotExistsInTheListException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super(
      "Error: The category doesn't exist in the list.",
      fileName,
      lineNumber
    );
    this.name = "CategoryNotExistsInTheListException";
  }
}

class MenuInTheListException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super("Error: Menu is already in the list.", fileName, lineNumber);
    this.name = "MenuInTheListException";
  }
}

class MenuNotExistsInTheListException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super("Error: The menu doesn't exist in the list.", fileName, lineNumber);
    this.name = "MenuNotExistsInTheListException";
  }
}

class AllergenInTheListException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super("Error: Allergen is already in the list.", fileName, lineNumber);
    this.name = "AllergenInTheListException";
  }
}

class AllergenNotExistsInTheListException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super(
      "Error: The allergen doesn't exist in the list.",
      fileName,
      lineNumber
    );
    this.name = "AllergenNotExistsInTheListException";
  }
}

class DishInTheListException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super("Error: Dish is already in the list.", fileName, lineNumber);
    this.name = "DishInTheListException";
  }
}

class DishNotExistsInTheListException extends RestaurantsManagerException {
  constructor(fileName, lineNumber) {
    super("Error: The dish doesn't exist in the list.", fileName, lineNumber);
    this.name = "DishNotExistsInTheListException";
  }
}

//Patrón Singleton
let RestaurantsManager = (function () {
  let instanciated;

  //Dentro de la función anónima declaramos la clase RestaurantsManager
  class RestaurantsManager {
    //Definimos los atributos privados del objeto
    #systemName = "Undefined";
    #dishesCategory = [];
    #allergenType = [];
    #menus = [];
    #restaurants = [];
    #dishes = [];

    //Declaración de métodos privados
    //Dado una categoría, devuelve la posición de esa categoría o -1 si no lo encontramos
    #getCategoryPosition(obj) {
      return this.#dishesCategory.findIndex(
        (busqueda) => busqueda.category === obj.category
      );
    }

    //Dado un Menu, devuelve la posición de ese menú o -1 si no lo encontramos
    #getMenuPosition(obj) {
      return this.#menus.findIndex((busqueda) => busqueda.menu === obj.menu);
    }

    //Dado una alergia, devuelve la posición de esa alergoa o -1 so no lo encontramos
    #getAllergenPosition(obj) {
      return this.#allergenType.findIndex(
        (busqueda) => busqueda.allerge === obj.allerge
      );
    }

    //Dado un plato, devuelve la posición de esa plato o -1 so no lo encontramos
    #getDishPosition(obj) {
      return this.#dishes.findIndex((busqueda) => busqueda.dish === obj.dish);
    }

    constructor() {
      //La función se invoca con el operador new
      if (!new.target) throw new InvalidAccessConstructorException();

      Object.defineProperty(this, "systemName", {
        enumerable: true,
        get() {
          return this.#systemName;
        },
        set(value) {
          if (!value) throw new EmptyValueException();
          if (typeof value !== "string")
            throw new InvalidValueException("systemName", value);
          this.#systemName = value;
        },
      });

      Object.defineProperty(this, "dishes", {
        enumerable: true,
        get() {
          return this.#dishes;
        },
      });
    }

    //Definimos los métodos
    //Devuelve un iterador que permite recorrer las categorías del sistema
    get categories() {
      const categories = this.#dishesCategory;
      return {
        *[Symbol.iterator]() {
          for (const category of categories) {
            yield category.category;
          }
        },
      };
    }

    //Devuelve un iterador que permite recorrer los menus del sistema
    get menus() {
      const menuIte = this.#menus;
      return {
        *[Symbol.iterator]() {
          for (const menu of menuIte) {
            yield menu.menu;
          }
        },
      };
    }

    //Devuelve un iterador que permite recorrer los alérgenos del sistema
    get allergens() {
      const allergens = this.#allergenType;
      return {
        *[Symbol.iterator]() {
          for (const allergen of allergens) {
            yield allergen.allerge;
          }
        },
      };
    }

    //Devuelve un iterador que permite recorrer los restaurantes del sistema
    get restaurants() {
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

    //Añade una nueva categoría
    addCategory(...categories) {
      for (const cat of categories) {
        if (!(cat instanceof Category)) {
          throw new CategoryException();
        }
        if (cat === null) {
          throw new EmptyValueException();
        }
        let obj = { category: cat, dishes: [] };
        if (this.#getCategoryPosition(obj) !== -1) {
          throw new CategoryInTheListException();
        } else {
          this.#dishesCategory.push(obj);
          console.log("Successfully added");
        }
      }
    }

    //Elimina una categoría. Los platos quedarán desasignados de la categoria
    removeCategory(...categories) {
      for (const cat of categories) {
        if (!(cat instanceof Category)) {
          throw new CategoryException();
        }
        let obj = { category: cat, dishes: [] };
        let position = this.#getCategoryPosition(obj);
        if (position !== -1) {
          this.#dishesCategory.splice(position, 1);
          console.log("Succesfully removed");
        } else {
          throw new CategoryNotExistsInTheListException();
        }
      }
    }

    //Añade un nuevo menú
    addMenu(...menus) {
      for (const m of menus) {
        if (!(m instanceof Menu)) {
          throw new MenuException();
        }
        if (m === null) {
          throw new EmptyValueException();
        }
        let obj = { menu: m, dishes: [] };
        if (this.#getMenuPosition(obj) !== -1) {
          throw new MenuInTheListException();
        } else {
          this.#menus.push(obj);
          console.log("Successfully added");
        }
      }
    }

    //Elimina un menu
    removeMenu(...menus) {
      for (const m of menus) {
        if (!(m instanceof Menu)) {
          throw new MenuException();
        }
        let obj = { menu: m, dishes: [] };
        let position = this.#getMenuPosition(obj);
        if (position !== -1) {
          this.#menus.splice(position, 1);
          console.log("Succesfully removed");
        } else {
          throw new MenuNotExistsInTheListException();
        }
      }
    }

    //Añade un nuevo alérgeno
    addAllergen(...allergens) {
      for (const aller of allergens) {
        if (!(aller instanceof Allergen)) {
          throw new AllergenException();
        }
        if (aller === null) {
          throw new EmptyValueException();
        }
        let obj = { allerge: aller, dishes: [] };
        if (this.#getAllergenPosition(obj) !== -1) {
          throw new AllergenInTheListException();
        } else {
          this.#allergenType.push(obj);
          console.log("Successfully added");
        }
      }
    }

    //Elimina un alérgeno
    removeAllergen(...allergens) {
      for (const aller of allergens) {
        if (!(aller instanceof Allergen)) {
          throw new AllergenException();
        }
        let obj = { allerge: aller, dishes: [] };
        let position = this.#getAllergenPosition(obj);
        if (position !== -1) {
          this.#allergenType.splice(position, 1);
          console.log("Succesfully removed");
        } else {
          throw new AllergenNotExistsInTheListException();
        }
      }
    }

    //Añade un nuevo plato
    addDish(...dishes) {
      for (const di of dishes) {
        if (!(di instanceof Dish)) {
          throw new DishException();
        }
        if (di === null) {
          throw new EmptyValueException();
        }
        let obj = { dish: di };
        if (this.#getDishPosition(obj) !== -1) {
          throw new DishInTheListException();
        } else {
          this.#dishes.push(obj);
          console.log("Successfully added");
        }
      }
    }

    //Elimina un plato y todas sus asignaciones a categorias, alergenos y menus
    // removeAllergen(...allergens) {
    //   for (const aller of allergens) {
    //     if (!(aller instanceof Allergen)) {
    //       throw new AllergenException();
    //     }
    //     let obj = { allerge: aller, dishes: [] };
    //     let position = this.#getAllergenPosition(obj);
    //     if (position !== -1) {
    //       this.#allergenType.splice(position, 1);
    //       console.log("Succesfully removed");
    //     } else {
    //       throw new AllergenNotExistsInTheListException();
    //     }
    //   }
    // }
  }

  //Inicialización del Singleton
  function init() {
    let rm = new RestaurantsManager();
    Object.freeze(rm);
    return rm;
  }
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
