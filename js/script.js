// ----------------------
// Button Counter Feature
// ----------------------
let count = 0;

function incrementCounter() {
    count++;
    document.getElementById("counterOutput").textContent = `You've clicked ${count} times.`;
}

document.getElementById("counterBtn").addEventListener("click", incrementCounter);

// ----------------------
// Greeting Feature
// ----------------------
function greetUser() {
    const name = document.getElementById("nameInput").value.trim();
    
    if (name) {
        document.getElementById("greetingOutput").textContent = `Hello, ${name}! Welcome to my page.`;
    } else {
        document.getElementById("greetingOutput").textContent = "Please enter a name so I can greet you!";
    }
}

document.getElementById("greetBtn").addEventListener("click", greetUser);

// ----------------------
// Random Fun Fact Feature
// ----------------------
const facts = [
    "Honey never spoils — archaeologists have found edible honey in ancient Egyptian tombs.",
    "Bananas are berries, but strawberries aren’t.",
    "Sharks existed before trees.",
    "Octopuses have three hearts.",
    "There’s enough DNA in your body to stretch to the sun and back — 70 times."
];

function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("factOutput").textContent = facts[randomIndex];
}

document.getElementById("factBtn").addEventListener("click", showRandomFact);

// ----------------------
// Click Animation Effect
// ----------------------
function addClickEffect(btn) {
    btn.classList.add("clicked");
    setTimeout(() => btn.classList.remove("clicked"), 400);
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => addClickEffect(button));
});
