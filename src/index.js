function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#results", {
    strings: "Generating your recipe...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);