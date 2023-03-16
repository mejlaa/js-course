'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000); */
/*
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 232474947,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 232474947) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// console.log(flight);
// console.log(jonas);
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
*/
/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);

  console.log(`transformed by: ${fn.name}`);
};

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

const high5 = function () {
  console.log('hi');
};
document.body.addEventListener('click', high5);

['jonas', 'martha', 'adam'].forEach(high5);
*/
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
greeterHey('jonas');
greeterHey('steven');

greet('hello')('mejla');

const greetArr = greeting => name => console.log(`${greeting}${name}`);
greetArr('hi')('mejla');
*/
/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} bookes a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(230, 'mejla ugljanin');
lufthansa.book(635, 'majda ugljanin');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
// DOES NOT WORK
// book(23, 'sarah williams');

book.call(eurowings, 23, 'sarah williams');
console.log(eurowings);

book.call(lufthansa, 239, 'mary cooper');
*/
/*
const runOnce = function () {
  console.log('this will never run again');
};
runOnce();

(function () {
  console.log('This will never run again!');
})();

(() => console.log('This will ALSO never run again!'))();
*/

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: '24739478384',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739478384) {
    alert('checked in');
  } else {
    alert('wrong passport');
  }
};

// checkIn(flight, jonas);

const newPassport = function (person) {
  person.passenger = Math.trunc(Math.random() * 10000000000);
};

// newPassport(jonas);
// checkIn(flight, jonas);

//replace space
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(' ');
  return [first.toUpperCase(), ...other].join(' ');
};

//higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed bt: ${fn.name}`);
};

// transformer(`JavaScript is the best!`, upperFirstWord);
// transformer(`JavaScript is the best!`, oneWord);

const high5 = function () {
  console.log('👋🏼');
};

// document.body.addEventListener('click', high5);

// ['mejla', 'suad', 'suljovic'].forEach(high5);

//FN RETURNING FN

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey');
// greeterHey('mejla');
// greeterHey('suad');

// greet('hello')('mejla');

// const greet1 = greeting => {
//   return name => {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greet1 = greeting => name => console.log(`${greeting} ${name}`);

// greet1('hejhej')('mejla');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `{this.iataCode}${flightNum}`, name });
  },
};
console.log(lufthansa);

lufthansa.book(239, 'Mejla Ugljanin Suljovic');
lufthansa.book(239, 'Suad Suljovic');
