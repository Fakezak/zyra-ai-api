const sendBtn = document.getElementById("send");
const messageBox = document.getElementById("message");
const responseBox = document.getElementById("response");

sendBtn.addEventListener("click", async () => {
    const message = messageBox.value.trim();
    if (!message) return;

    const res = await fetch("/.netlify/functions/api", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer ZYRA-9F2K8M4T7V1X6Q3L5P0R8S2B7N4D1J6H3G9C0E5W8Y2A7U4Z1F6K9L3M5N8Q2"
        },
        body: JSON.stringify({ message })
    });

    const data = await res.json();
    responseBox.innerText = data.response || data.error;
});
