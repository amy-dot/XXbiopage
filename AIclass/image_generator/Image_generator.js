// ===== ELEMENTS =====

const promptInput = document.getElementById("promptInput");
const generateBtn = document.getElementById("generateBtn");
const generatedImage = document.getElementById("generatedImage");
const loadingText = document.getElementById("loading");

// ===== GENERATE IMAGE FUNCTION =====

async function generateImage() {

  const prompt = promptInput.value.trim();

  // CHECK EMPTY INPUT
  if (prompt === "") {
    alert("Please enter a word or prompt.");
    return;
  }

  // SHOW LOADING
  loadingText.style.display = "block";
  generatedImage.style.display = "none";

  try {

    // AI IMAGE URL
    const imageUrl =
      `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`;

    // LOAD IMAGE
    generatedImage.src = imageUrl;

    generatedImage.onload = () => {
      loadingText.style.display = "none";
      generatedImage.style.display = "block";
    };

    generatedImage.onerror = () => {
      loadingText.innerText = "Failed to generate image.";
    };

  } catch (error) {

    console.error(error);

    loadingText.innerText =
      "Something went wrong. Try again.";

  }
}

// ===== BUTTON CLICK =====

generateBtn.addEventListener("click", generateImage);

// ===== ENTER KEY SUPPORT =====

promptInput.addEventListener("keypress", function (event) {

  if (event.key === "Enter") {
    generateImage();
  }

});