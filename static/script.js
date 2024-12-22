document.addEventListener("DOMContentLoaded", () => {
    const interactiveBox = document.getElementById("interactive-box");
    
    if (interactiveBox) {
      // Create the game container
      const gameContainer = document.createElement("div");
      gameContainer.classList.add("p-4", "bg-gray-200", "rounded", "shadow");
  
      // Create the counter
      let count = 0;
      const counterDisplay = document.createElement("p");
      counterDisplay.classList.add("text-lg", "font-bold");
      counterDisplay.textContent = `Count: ${count}`;
  
      // Create the button
      const button = document.createElement("button");
      button.textContent = "Increase Count";
      button.classList.add("bg-blue-500", "text-white", "py-2", "px-4", "rounded", "mt-2");
      button.addEventListener("click", () => {
        count++;
        counterDisplay.textContent = `Count: ${count}`;
      });
  
      // Append the elements
      gameContainer.appendChild(counterDisplay);
      gameContainer.appendChild(button);
      interactiveBox.appendChild(gameContainer);
    }
  });
  