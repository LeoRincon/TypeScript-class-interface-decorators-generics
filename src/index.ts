import { Pokemon } from './decorators/Pokemon-class';

const charmander = new Pokemon('charmander');

charmander.savePokemonToDB(90);
console.log(charmander);
