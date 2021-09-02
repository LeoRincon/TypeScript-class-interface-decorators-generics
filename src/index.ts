import { Pokemon } from './decorators/Pokemon-class';

const charmander = new Pokemon('charmander');

(Pokemon.prototype as any).customName = 'Pikachu';
