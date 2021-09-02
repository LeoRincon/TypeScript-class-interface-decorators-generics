// import { Hero } from './class/Hero'; // Nombrando con un alias el import hero
// import * as heroClass from './class/Hero'; darle el mismo alias a todos export
import {
  princtObject,
  genericsFunction,
  genericArrowFunction,
} from '../generics/generics';
import { Hero, Villain } from '../interface';
// const Batman = new heroClass.Hero('Batman', 1, 34); llamamos el export que necesitamos en expecifico
// const Batman = new Hero('Batman', 1, 34);

// console.log({ Batman });
// console.log(Batman.power);

//*----------------------------GENERICS---------------------------------------------------

// princtObject('hola');
// princtObject(new Date());
// princtObject(1234);
// princtObject({ greeting: 'hola' });
// princtObject([1, 2, 34, 5]);

// como ya establecemos que la entrada y la salida seran del mismo type TS nos arroja el error si ve que la salida es de otro tipo
// let name: string = 'Leonardo';
// console.log(genericsFunction(123.41341).toFixed(2));
// console.log(genericsFunction(name).toUpperCase());
// console.log(genericArrowFunction(new Date()).getDate());

const deadPool = {
  name: 'DeadPool',
  realName: 'Wade1',
  dangerLevel: 120,
};
// console.log(genericArrowFunction<Hero>(deadPool));
