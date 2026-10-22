function displayRecipe(response) {
  new Typewriter("#results", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "38f5da86te73fd3db385f6o4407f35aa";
  let context =
    "You are an easy recipe generator and love to create simple, delicious recipes. You mission is to generate short easy recipes and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the recipe. Sign the recipe with 'Happy Mixing!' inside a <strong> element at the end of the recipe and NOT at the beginning";
  let prompt = `User instructions: Generate an easy recipe about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
   let resultsElement = document.querySelector("#results");
  resultsElement.classList.remove("hidden");
  resultsElement.innerHTML = `<div class="generating">⏳</div> Generating a recipe for ${instructionsInput.value}`;

  axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);