const messages = [
    "Are you sureee? 🥺👉👈",
    "But... I'll be sad 😢💔",
    "Think again! 💖",
    "You're breaking my heart! 💞",
    "Okay... but I still love you! 💕"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    // Change "No" button text with cute messages
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Make the "Yes" button bigger each time
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;

    // Add a shaking effect for extra cuteness
    yesButton.classList.add("shake");
    setTimeout(() => yesButton.classList.remove("shake"), 500);
}

function handleYesClick() {
    // Remove the buttons
    document.querySelector(".buttons").innerHTML = "";

    // Add a cute message
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = `<h2>YAYYY! 💖 You made the best choice! 🎀💞</h2>`;
    messageDiv.style.textAlign = "center";
    messageDiv.style.fontSize = "24px";
    document.body.appendChild(messageDiv);

    // Add the cute GIF
    const gif = document.createElement("img");
    gif.src = "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif";
    gif.style.width = "300px";
    gif.style.display = "block";
    gif.style.margin = "20px auto";
    document.body.appendChild(gif);
}
