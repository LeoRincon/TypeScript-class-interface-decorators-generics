function printToConosole(constructor: Function) {
  console.log(constructor);
}

const printToCOnsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConosole;
  } else {
    return () => {};
  }
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype); // nos permite que la clss no sea extendible.
};

@bloquearPrototipo
@printToCOnsoleConditional(true)
export class Pokemon {
  public publicApi: string = 'https://pokeapi.co';

  constructor(public name: string) {}
}

(Pokemon.prototype as any).customName = 'Pikachu'; // nos arroja error por que no permite agregar mas propiedades o metodos a la clss pokemon
