const imageInput = document.getElementById("imageInput");
const originalImage = document.getElementById("originalImage");
const resultImage = document.getElementById("resultImage");
const statusText = document.getElementById("status");
const downloadBtn = document.getElementById("downloadBtn");

const API_KEY = "vZYpCMt3pPG8GdLjrnhbUFuZ"; 

imageInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  statusText.textContent = "Uploading to AI...";

  // Show original image instantly
  const reader = new FileReader();

  reader.onload = async (e) => {
    const imageURL = e.target.result;
    originalImage.src = imageURL;

    // Convert image to form data
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");

    try {
      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": API_KEY
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("API error");
      }

      const blob = await response.blob();
      const outputURL = URL.createObjectURL(blob);

      resultImage.src = outputURL;

      statusText.textContent = "Background removed with AI!";
    } catch (error) {
      console.error(error);
      statusText.textContent = "Error removing background.";
    }
  };

  reader.readAsDataURL(file);
});

// Download result
downloadBtn.addEventListener("click", () => {
  if (!resultImage.src) {
    statusText.textContent = "Upload an image first.";
    return;
  }

  const link = document.createElement("a");
  link.href = resultImage.src;
  link.download = "ai-background-removed.png";
  link.click();
});