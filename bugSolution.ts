function greet(person: string, date?: Date): string {
  const dateToUse = date || new Date();
  return `Hello, ${person}, today is ${dateToUse.toDateString()}!`;
}

greet("Bill");
greet("Bill", new Date());