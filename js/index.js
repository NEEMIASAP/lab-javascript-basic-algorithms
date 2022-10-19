// Iteration 1: Names and Input

const hacker1 = "Jhon";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Colombo";

console.log(`The navigator is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2) {
  console.log(`The driver has the longest name, it has ${hacker1} characters.`);
} else {
  if (hacker1.length < hacker2.length) {
    console.log(
      `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
  } else {
    console.log(
      `Wow, you both have equally long names, ${hacker1.length} characters !`
    );
  }
}

// Iteration 3: Loops

const driver = [];

for (let i = 0; i < hacker1.length; i++) {
  driver[i] = hacker1[i].toUpperCase();
}

console.log(driver.join(" "));
