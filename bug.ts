function greet(person: string, date: Date): string {
  console.log(person, date);
  return `Hello, ${person}, today is ${date.toDateString()}!`;
}

greet("Bill", new Date());