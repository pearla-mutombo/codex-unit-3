
    try {
        const MessageData = localStorage.setItem("message", "Welcome to Level 3!");
        const pTag = document.querySelector("p");
        pTag.innerText = "Welcome to Level 3!";
    } catch (error) {
        console.error(error);
        pTag.innerText = "Failed to get item from Storage.";
    } 


console.log("Attempting to access browser features...");
