// Завдання 1

// const { createElement } = require("react");

// 1 - отримай body елемент і виведи його в консоль;
const bodyEl = document.querySelector("body");
console.log(bodyEl);

// 2 - отримай елемент id="title" і виведи його в консоль;
const id = document.querySelector("#title");
console.log(id);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector(".list");
console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const topicEl = document.querySelectorAll("[data-topic]");
console.log(topicEl);
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const dataEl = document.querySelector("[data-topic]");
console.log(dataEl);
console.log(topicEl[0]);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
const listElements = document.querySelectorAll("[data-topic]");
const lastListElement = listElements[listElements.length - 1];
console.log(lastListElement);
console.log(topicEl[topicEl.length - 1]);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const h1 = document.querySelector("h1");
const next = h1.nextElementSibling;
console.log(next);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
const headerEl = document.querySelectorAll("h3");
console.log(headerEl);
headerEl.forEach((el) => console.log(el.textContent));

// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// const h3 = document.querySelectorAll("h3");
// console.log(h3);
const h3El = headerEl.forEach((h3) => h3.classList.add("active"));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
const listItem = document.querySelector("li[data-topic=navigation]");
console.log(listItem);
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
listItem.style.backgroundColor = "yellow";

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
const paragraph = listItem.querySelector("p");
paragraph.textContent = "Я змінив тут текст!";

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається
// у змінній currentTopic і виведи його в консоль;
const currentTopic = "manipulation";
const currentTopicEl = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log(currentTopicEl);
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
currentTopicEl.style.backgroundColor = "blue";

// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
const titleEl = document.querySelector(".completed");
console.log(titleEl);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
const newEl = titleEl.closest("li");
newEl.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа
// (Document Object Model)"
const newParagraph = document.createElement("p");
newParagraph.textContent = "Об'єктна модель документа (Document Object Model)";
h1.insertAdjacentElement("afterend", newParagraph);

// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) -
//  "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити
//  всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// const liEl = document.createElement("li");
// const h3Element = document.createElement("h3");
// const pEl = document.createElement("p");
// h3Element.textContent = "Властивість innerHTML";
// pEl.textContent =
//   "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу";
// liEl.append(h3El, pEl);
// list.append(liEl);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
const createNewVersion = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>
      Ще один спосіб створити DOM-елементи і помістити їх в дерево - це
      використовувати рядки з тегами і дозволити браузеру зробити всю важку
      роботу
    </p>
  </li>
`;

list.insertAdjacentHTML("beforeend", createNewVersion);

// 20 - очисти список
const UlEl = document.querySelector(".list");
UlEl.innerHTML = "";

// Завдання 2
// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

// const newDiv

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;

// Завдання 3

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.
const formEl = document.querySelector(".js-contact-form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = event.target.elements.userName.value.trim();
  const isChecked = event.target.elements.accept.checked;

  if ((inputValue = "")) {
    alert("Input cannot be empty!");
    return;
  }

  if (!isChecked) {
    alert("You need to accept!");
  }

  console.log({ userName: inputValue });
  formEl.reset();
});

// Завдання 4
// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.
