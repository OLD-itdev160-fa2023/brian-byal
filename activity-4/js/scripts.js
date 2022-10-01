//Welcome message
var user = 'Brian!';
var salutation = 'Hello, ';
var greeting = salutation + user + ' Here are the latest Muse reviews:';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//Product price
var price = 399.99,
    studentDiscount = .25,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);