import { powers } from '../Data/powers';

interface Person {
  name: string;
  powerId: number;
  age: number;
}

export class Hero implements Person {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power(): string {
    return (
      powers.find((power) => power.id === this.powerId)?.desc || 'Not found'
    );
  }
}
