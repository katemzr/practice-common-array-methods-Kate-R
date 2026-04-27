//Task 1: Create the Order System
//Create two arrays:
//● The drinks array stores three drink orders (e.g., “Latte”, “Tea”, “Espresso”).
//● The pastry array stores three pastry orders (e.g., “Croissant”, “Muffin”, “Bagel”).

let drinkOrders = ["Latte", "Tea", "Espresso"];
let pastryOrders = ["Croissant", "Muffin", "Bagel"];

//Task 2: Log the number of drinks and number of pastries by using .length on each row.

console.log(`Total number of drink orders: ${drinkOrders.length}`);
console.log(`Total number of pastry orders: ${pastryOrders.length}`);

//Task 3: Access Orders Using Bracket Notation
//Use bracket notation to log a specific drink and a specific pastry using
//hardcoded numbers. For example, you might want to log the first drink and last
//pastry. Do this for three combinations.

console.log(`Order 1: ${drinkOrders[0]} and ${pastryOrders[0]}`);
console.log(`Order 2: ${drinkOrders[1]} and ${pastryOrders[2]}`);
console.log(`Order 3: ${drinkOrders[2]} and ${pastryOrders[1]}`);

//Task 4: Access Orders Dynamically with Variables

for (let i = 0; i < drinkOrders.length && i < pastryOrders.length; i++) { 
    console.log(`Order ${(i+4)}: ${drinkOrders[i]} and ${pastryOrders[i]}`);
}

//Task 5: Write a loop that logs all the items in the drink category, ensuring the loop
//dynamically adjusts to the number of items using .length.

for (let i = 0; i < drinkOrders.length; i++) {
    console.log(drinkOrders[i]);
}

//Task 6: Add a New Order & Track Length
//Suppose a new order has been placed: a customer ordered a flat white. Add “flat
//white” to the drinks category dynamically. Log the updated number of drinks after the addition.

drinkOrders[3] = "flat white";
console.log(`Total number of drink orders: ${drinkOrders.length}`);

//Declare two variables and use them with bracket notation to log the selected order
//dynamically.

let newOrderDrink = "Green Tea";
let newOrderPastry = "English Muffin";
drinkOrders[4] = newOrderDrink;
pastryOrders[3] = newOrderPastry;

console.log(`Order 7: ${drinkOrders[4]} and ${pastryOrders[3]}`);
