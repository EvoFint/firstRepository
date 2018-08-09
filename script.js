/* Task 2 */
var budget = prompt("Ваш Бюджет на месяц?");
var nameShop = prompt("Название вашего магазина?");

/* Task 3 */
var mainList = {
    money: budget,
    name: nameShop,
    shopGoods: [],
    employers: {},
    open: true
};

/* Task 4 */
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));
mainList.shopGoods.push(prompt("Какой тип товаров будем продавать?"));

/* Task 5 */
var oneDayBudget = mainList.money / 30;
alert('Ваш бюджет на 1 день составляет: ' + oneDayBudget);