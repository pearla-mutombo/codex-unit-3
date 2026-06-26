console.log("Attempting to access browser features...");
try {
  localStorage.setItem("message", "Welcome to Level 3!");
  const pTag = document.querySelector("p");
  console.log("Welcome to Level 3!");
} catch (error) {
  console.log("Failed to get item from Storage.");
}
