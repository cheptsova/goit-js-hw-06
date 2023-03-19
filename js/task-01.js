const categoriesEl = document.querySelector("#categories");
const categoriesItemEl = categoriesEl.children;
console.log(`Number of categories : ${categoriesItemEl.length}`);

for (let i = 0; i < categoriesItemEl.length; i += 1) {
  console.log(`Category: ${categoriesItemEl[i].firstElementChild.textContent}`);

  const categoryItemEl = categoriesItemEl[i].querySelectorAll("li");

  console.log(`Elements: ${categoryItemEl.length}`);
}

console.log(document);
