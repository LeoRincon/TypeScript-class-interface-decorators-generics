export const princtObject = (arg: any) => {
  console.log(arg);
};

export function genericsFunction<T>(arg: T): T {
  // < > los ponemos para especificar que es una fn generica  y que va a retornar el mismo type od date que recibe por arg
  return arg;
}

export const genericArrowFunction = <T>(arg: T) => arg;
