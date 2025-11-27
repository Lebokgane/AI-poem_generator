function displayPoem(response) {
    console.log("poem generated");
    new Typewriter('#poem', {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
});
}

function generatePoem(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "efab59oa8043330da286420bt3f32b43";
    let context = "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem. Make sure to follow the user instructions. Sign the poem with `SheCodes AI` in a strong element at the bottom of the poem";
    let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`);

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
