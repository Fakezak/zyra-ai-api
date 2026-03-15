const generateBtn = document.getElementById("generateBtn");
const apiKeyDiv = document.getElementById("apiKey");
const sendBtn = document.getElementById("send");
const messageBox = document.getElementById("message");
const responseBox = document.getElementById("response");

// Store the generated API key in front-end
let zyraApiKey = null;

// Generate a random API key (front-end only)
function generateApiKey() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let token = 'ZYRA-';
    for (let i = 0; i < 64; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}

// Button: Generate API Key
generateBtn.addEventListener("click", () => {
    zyraApiKey = generateApiKey();
    apiKeyDiv.innerText = "Your Zyra API Key: " + zyraApiKey;
});

// Button: Send message to Zyra AI (front-end simulated)
sendBtn.addEventListener("click", () => {
    const message = messageBox.value.trim();
    if (!message) {
        responseBox.innerText = "Please type a message!";
        return;
    }
    if (!zyraApiKey) {
        responseBox.innerText = "Please generate an API key first!";
        return;
    }

    // Simulate Zyra AI response
    responseBox.innerText = `Zyra AI [${zyraApiKey.slice(-6)}] says: I received your message -> "${message}"`;
    messageBox.value = "";
});
