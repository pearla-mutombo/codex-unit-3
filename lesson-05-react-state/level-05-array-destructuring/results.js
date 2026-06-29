function displayMessage() {
  console.log(
    "array destructuring allows you to unpack values from arrays directly into distinct variables. instead of grabbing items one by one by using their index, you can do it in a sinlge line of code.",
  );
}

function greet() {
  displayMessage();
}

export const results = [5, greet];
