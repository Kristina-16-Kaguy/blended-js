// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];
// const doubleNumbers = numbers.map(num => num ** 2);

// const doubleNumbers = numbers.map((num) => {
//   return num ** 2;
// // });
// const getDoubleNumbers = (array) => {
//   return array.map((el) => {
//     return el ** 2;
//   });
// };
// console.log(getDoubleNumbers(numbers));

// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];
// const result = data.flatMap((item) => item.values);
// console.log(result);

// const getValues = (data) => data.flatMap((item) => item.values);
// console.log(getValues(data));

// Завдання 3:

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const result = people.some((item) => item.age < 20);
// console.log(result);

// const getAge = (people) => people.some((item) => item.age < 20);
// console.log(getAge(people));

// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const res = numbers.every((item) => item % 2 === 0);
// console.log(res);

// const getNumbers = (numbers) => numbers.every((item) => item % 2 === 0);
// console.log(getNumbers(numbers));

// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const res = numbers.find((item) => item % 2 !== 0);
// console.log(res);

// const getNumbers = (numbers) => numbers.find((item) => item % 2 !== 0);
// console.log(getNumbers(numbers));

// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const res = numbersArray.toSorted((a, b) => a - b);
// console.log(res);

// const sortNumbers = (numbersArray) => numbersArray.toSorted((a, b) => a - b);
// console.log(sortNumbers(numbersArray));

// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ["banana", "orange", "apple", "pear"];

// const res = stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(res);

// const sortString = (stringArray) =>
//   stringArray.toSorted((a, b) => a.localeCompare(b));
// console.log(sortString(stringArray));

// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const sortByAge = users.toSorted((a, b) => a.age - b.age);
// console.log(sortByAge);

// const getSortedNames = (users) => users.toSorted((a, b) => a.age - b.age);
// console.log(getSortedNames(users));

// Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const res = user.filter((item) => item.age > 20);
// console.log(res);

// const getSortedNames = (user) => user.filter((item) => item.age > 20);
// console.log(getSortedNames(user));

// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((total, item) => total + item, 0);
// console.log(sum);

// const getSum = (numbers) => numbers.reduce((acc, item) => acc + item, 0);
// console.log(getSum(numbers));

// Завдання 11:

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод substruct - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// class Calculator {
//   number(value) {
//     this.value = value;
//     return this;
//   }
//   getResult(value) {
//     return this.value;
//   }
//   add(value) {
//     this.value += value;
//     return this;
//   }
//   substruct(value) {
//     this.value -= value;
//     return this;
//   }
//   divide(value) {
//     if (value === 0) {
//       console.error("Не можливо ділення на 0.");
//       this.value = NaN;
//       return this;
//     }
//     this.value /= value;
//     return this;
//   }
//   multiply(value) {
//     this.value *= value;
//     return this;
//   }
// }

// // Приклад використання:
// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .substruct(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

class Client {
  #login;
  #email;

  constructor(login, email) {
    this.#login = login;
    this.#email = email;
  }
  get login() {
    return this.#login;
  }
  set login(newLogin) {
    this.#login = newLogin;
  }
  get email() {
    return this.#email;
  }
  set email(newEmail) {
    this.#email = newEmail;
  }
}

const client = new Client("vasya", "vasya@gmail.com");
console.log(client.login);
console.log(client.email);

// Завдання 13:

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// Задача 14 Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію
//
// getMostExpensiveMeatProduct(products) = {
//     if(products.category = meat){

//     }
// };

// const products = [
//   { name: 'Apple', category: 'fruits', price: 1.2, stock: 50 },
//   { name: 'Banana', category: 'fruits', price: 0.8, stock: 100 },
//   { name: 'Carrot', category: 'vegetables', price: 0.5, stock: 200 },
//   { name: 'Broccoli', category: 'vegetables', price: 1.0, stock: 150 },
//   { name: 'Milk', category: 'dairy', price: 1.5, stock: 20 },
//   { name: 'Cheese', category: 'dairy', price: 2.5, stock: 5 },
//   { name: 'Chicken', category: 'meat', price: 5.0, stock: 30 },
//   { name: 'Beef', category: 'meat', price: 7.0, stock: 25 }
// ];
