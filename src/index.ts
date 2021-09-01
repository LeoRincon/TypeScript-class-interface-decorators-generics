import { Hero as superHero } from './class/Hero'; // Nombrando con un alias el import hero
// import * as heroClass from './class/Hero'; darle el mismo alias a todos export
// const Batman = new heroClass.Hero('Batman', 1, 34); llamamos el export que necesitamos en expecifico
const Batman = new superHero('Batman', 1, 34);

console.log({ Batman });
console.log(Batman.power);
