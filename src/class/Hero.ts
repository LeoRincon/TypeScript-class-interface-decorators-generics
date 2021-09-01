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
}
