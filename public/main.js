const generateBtn = document.getElementById("generateBtn");
const apiKeyDiv = document.getElementById("apiKey");

generateBtn.addEventListener("click", async () => {
    const res = await fetch("/.netlify/functions/generate");
    const data = await res.json();
    apiKeyDiv.innerText = "Your Zyra API Key: " + data.apiKey;
});
