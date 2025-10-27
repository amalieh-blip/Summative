const facts = [
  "I love being with friends !",
  "My favorite sport is Swimming.",
  "I enjoy making videoes.",
  "I like to bake cookies on weekends."
];

const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
});

