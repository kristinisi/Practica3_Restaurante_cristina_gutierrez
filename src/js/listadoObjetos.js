//Importamos las excepciones generales
import {
  BaseException,
  InvalidAccessConstructorException,
  EmptyValueException,
  InvalidValueException,
  AbstractClassException,
} from "./exceptions";

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
  }
}
