const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach((ingredient) => {
  const ingredientsEL = document.querySelector("#ingredients");
  const listEl = document.createElement("li");
  listEl.textContent = ingredient;
  listEl.classList = "item";
  ingredientsEL.append(listEl);
});
