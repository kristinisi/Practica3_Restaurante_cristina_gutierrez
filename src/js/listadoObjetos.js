//Importamos las excepciones generales
// import {
//   BaseException,
//   InvalidAccessConstructorException,
//   EmptyValueException,
//   InvalidValueException,
//   AbstractClassException,
// } from "./exceptions";

// Objeto Dish: para indentificar los datos de un plato
class Dish {
  // Campos privados
  #name;
  #description;
  #ingredients;
  #image;
  constructor(name) {
    //Verificador con el operador new
    if (!new.target) throw new InvalidAccessConstructorException();

    //Validación de parámetros obligatorios
    if (!name) throw new EmptyValueException("name");

    //Definición de atributos privados del objeto
    this.#name = name;
    this.#description = "";
    this.#ingredients = [];
    this.#image = "";

    Object.defineProperty(this, "name", {
      enumerable: true,
      get() {
        return this.#name;
      },
      set(value) {
        if (!value) throw new EmptyValueException("name");
        this.#name = value;
      },
    });

    Object.defineProperty(this, "description", {
      enumerable: true,
      get() {
        return this.#description;
      },
      set(value) {
        if (!value) throw new EmptyValueException("description");
        this.#description = value;
      },
    });
    Object.defineProperty(this, "ingredients", {
      enumerable: true,
      get() {
        return this.#ingredients;
      },
      set(value) {
        if (!value) throw new EmptyValueException("ingredients");
        this.#ingredients = value;
      },
    });
    Object.defineProperty(this, "image", {
      enumerable: true,
      get() {
        return this.#image;
      },
      set(value) {
        if (!value) throw new EmptyValueException("image");
        this.#image = value;
      },
    });
  }

  toString() {
    return `Name of Dish: ${this.name} \n
            Description: ${this.description} \n
            Ingredients: ${this.ingredients} \n
            Image:: ${this.image}`;
  }
}

// Objeto Category: podemos crear la estructura de categorías.
class Category {
  // Campos privados
  #name;
  #description;
  constructor(name) {
    //Verificador con el operador new
    if (!new.target) throw new InvalidAccessConstructorException();

    //Validación de parámetros obligatorios
    if (!name) throw new EmptyValueException("name");

    //Definición de atributos privados del objeto
    this.#name = name;
    this.#description = "";

    Object.defineProperty(this, "name", {
      enumerable: true,
      get() {
        return this.#name;
      },
      set(value) {
        if (!value) throw new EmptyValueException("name");
        this.#name = value;
      },
    });
    Object.defineProperty(this, "description", {
      enumerable: true,
      get() {
        return this.#description;
      },
      set(value) {
        if (!value) throw new EmptyValueException("description");
        this.#description = value;
      },
    });
  }

  toString() {
    return `Name of Category: ${this.name} \n
              Description: ${this.description}`;
  }
}

// Objeto Allergen: representa los alérgenos que puede tener un plato
class Allergen {
  // Campos privados
  #name;
  #description;
  constructor(name) {
    //Verificador con el operador new
    if (!new.target) throw new InvalidAccessConstructorException();

    //Validación de parámetros obligatorios
    if (!name) throw new EmptyValueException("name");

    //Definición de atributos privados del objeto
    this.#name = name;
    this.#description = "";

    Object.defineProperty(this, "name", {
      enumerable: true,
      get() {
        return this.#name;
      },
      set(value) {
        if (!value) throw new EmptyValueException("name");
        this.#name = value;
      },
    });
    Object.defineProperty(this, "description", {
      enumerable: true,
      get() {
        return this.#description;
      },
      set(value) {
        if (!value) throw new EmptyValueException("description");
        this.#description = value;
      },
    });
  }

  toString() {
    return `Name of Allergen: ${this.name} \n
                Description: ${this.description}`;
  }
}

// Objeto Menu: se trata de una agregación de platos. Los platos que componen el menú se implementarán desde el gestor de restaurante
class Menu {
  // Campos privados
  #name;
  #description;
  constructor(name) {
    //Verificador con el operador new
    if (!new.target) throw new InvalidAccessConstructorException();

    //Validación de parámetros obligatorios
    if (!name) throw new EmptyValueException("name");

    //Definición de atributos privados del objeto
    this.#name = name;
    this.#description = "";

    Object.defineProperty(this, "name", {
      enumerable: true,
      get() {
        return this.#name;
      },
      set(value) {
        if (!value) throw new EmptyValueException("name");
        this.#name = value;
      },
    });
    Object.defineProperty(this, "description", {
      enumerable: true,
      get() {
        return this.#description;
      },
      set(value) {
        if (!value) throw new EmptyValueException("description");
        this.#description = value;
      },
    });
  }

  toString() {
    return `Name of Menu: ${this.name} \n
                Description: ${this.description}`;
  }
}

// Objeto Restaurant: representa un recurso restaurante para formar parte de la cadena de restaurantes a gestionar.
class Restaurant {
  // Campos privados
  #name;
  #description;
  #location;
  constructor(name) {
    //Verificador con el operador new
    if (!new.target) throw new InvalidAccessConstructorException();

    //Validación de parámetros obligatorios
    if (!name) throw new EmptyValueException("name");

    //Definición de atributos privados del objeto
    this.#name = name;
    this.#description = "";
    this.#location = "";

    Object.defineProperty(this, "name", {
      enumerable: true,
      get() {
        return this.#name;
      },
      set(value) {
        if (!value) throw new EmptyValueException("name");
        this.#name = value;
      },
    });
    Object.defineProperty(this, "description", {
      enumerable: true,
      get() {
        return this.#description;
      },
      set(value) {
        if (!value) throw new EmptyValueException("description");
        this.#description = value;
      },
    });
    Object.defineProperty(this, "location", {
      enumerable: true,
      get() {
        return this.#location;
      },
      set(value) {
        if (!value) throw new EmptyValueException("location");
        if (!(value instanceof Coordinate))
          throw new InvalidValueException("location", location);
        this.#location = value;
      },
    });
  }

  toString() {
    return `Name of Restaurant: ${this.name} \n
                Description: ${this.description} \n
                Location: ${this.location}`;
  }
}

// Objeto Coordinate: son coordenadas para localizar una ubicación
class Coordinate {
  // Campos privados
  #latitude;
  #longitude;
  constructor(latitude, longitude) {
    //Verificador con el operador new
    if (!new.target) throw new InvalidAccessConstructorException();

    //Validación de parámetros obligatorios
    if (!latitude) throw new EmptyValueException("latitude");
    if (/^[-]?\d+(\.\d+)?$/.test(latitude))
      throw new InvalidValueException("latitude", latidute);

    if (!longitude) throw new EmptyValueException("longitude");
    if (/^[-]?\d+(\.\d+)?$/.test(longitude))
      throw new InvalidValueException("longitude", longitude);

    //Definición de atributos privados del objeto
    this.#latitude = latitude;
    this.#longitude = longitude;

    Object.defineProperty(this, "latitude", {
      enumerable: true,
      get() {
        return this.#latitude;
      },
      set(value) {
        if (!value) throw new EmptyValueException("latitude");
        if (/^[-]?\d+(\.\d+)?$/.test(value))
          throw new InvalidValueException("latitude", value);
        this.#latitude = value;
      },
    });
    Object.defineProperty(this, "longitude", {
      enumerable: true,
      get() {
        return this.#longitude;
      },
      set(value) {
        if (!value) throw new EmptyValueException("longitude");
        if (/^[-]?\d+(\.\d+)?$/.test(value))
          throw new InvalidValueException("longitude", value);
        this.#longitude = value;
      },
    });
  }

  toString() {
    return `Latitude: ${this.#latitude} \n
                  Longitude: ${this.#longitude}`;
  }
}
