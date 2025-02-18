const choices = document.querySelectorAll(".choice");
const resultText = document.querySelector(".result");
const resetButton = document.querySelector(".reset");
const options = ["rock", "paper", "scissors"];

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("data-choice");
        let computerChoice = options[Math.floor(Math.random() * options.length)];
        let result = getResult(userChoice, computerChoice);
        
        resultText.textContent = `You: ${userChoice} | Computer: ${computerChoice} - ${result}`;
        resultText.classList.add("show-result");
    });
});

resetButton.addEventListener("click", () => {
    resultText.textContent = "Choose your move!";
    resultText.classList.remove("show-result");
});

function getResult(user, computer) {
    if (user === computer) return "It's a tie!";
    if ((user === "rock" && computer === "scissors") || 
        (user === "paper" && computer === "rock") || 
        (user === "scissors" && computer === "paper")) {
        return "You win!";
    }
    return "You lose!";
}
