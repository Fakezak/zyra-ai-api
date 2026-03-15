const generateBtn = document.getElementById("generateBtn");
const apiKeyDiv = document.getElementById("apiKey");

generateBtn.addEventListener("click", async () => {
    try {
        const res = await fetch("/.netlify/functions/generateToken"); // match your function file name
        if (!res.ok) throw new Error("Failed to fetch API key");

        const data = await res.json();
        apiKeyDiv.innerText = "Your Zyra API Key: " + data.apiKey;
    } catch (err) {
        apiKeyDiv.innerText = "Error: " + err.message;
        console.error(err);
    }
});
