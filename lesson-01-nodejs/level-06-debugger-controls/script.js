console.log("Attempting to access browser features...");
try {
  localStorage.setItem("Message", "Welcome to Level 3!");
  const pTag = document.querySelector("p");
  console.log("Hello World!");
} catch (error) {
  console.log(
    "To use the Debugger controls, we first we need to start a debug session and do run and debug session. Then we add our breakpoint and we hit Play in the green button or hit step into to move through the code.",
  );
  // console.log("Failed to get item from Storage.");
}
