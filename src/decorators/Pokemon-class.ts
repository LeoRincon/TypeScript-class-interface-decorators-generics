//! Decorator basic
function printToConosole(constructor: Function) {
  console.log(constructor);
}

//! Factory decorators
const printToCOnsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConosole;
  } else {
    return () => {};
  }
};

//! Decorator from bloquear a class
const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype); // nos permite que la clss no sea extendible.
};

//! decorator to valid a method
function CheckValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('El ID debe estar entre 1 y 800');
      } else {
        return originalMethod(id);
      }
    };
  };
}

//! Decorator from propertys
function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get(): string {
        // console.log(this);
        return 'leonardo';
      },

      set(this, val: string) {
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };
    return descriptor;
  };
}

@bloquearPrototipo
@printToCOnsoleConditional(true)
export class Pokemon {
  @readOnly()
  public publicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}

  @CheckValidPokemonId() //* Decorator of method
  savePokemonToDB(id: number) {
    console.log(`ID:${id} Guardado en DB`);
  }
}

// (Pokemon.prototype as any).customName = 'Pikachu'; // nos arroja error por que no permite agregar mas propiedades o metodos a la clss pokemon
