const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const reverse = document.getElementById("reverseBtn");
const copy = document.getElementById("copyBtn");
const theme = document.getElementById("toggleTheme");
const clear = document.getElementById("clear");


inputText.addEventListener("input", function () {
    const plainText = inputText.value;
    let cipherText = "";

    for (let char of plainText) {
        if (char >= 'A' && char <= 'Z') {
            // For uppercase letters
            const encoded = String.fromCharCode(90 - (char.charCodeAt(0) - 65));
            cipherText += encoded;
        } else if (char >= 'a' && char <= 'z') {
            // For lowercase letters
            const encoded = String.fromCharCode(122 - (char.charCodeAt(0) - 97));
            cipherText += encoded;
        } else {
            // Numbers, spaces, punctuation stays unchanged
            cipherText += char;
        }
    }

    outputText.value = cipherText;
})

reverse.addEventListener("click", () => {
    // Copy current cipher output back to input
    inputText.value = outputText.value;
    // Trigger the input event manually so the cipher logic runs again
    inputText.dispatchEvent(new Event('input'));
})

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(outputText.value).then(() => {
        copyBtn.textContent = "Copied!";
        setTimeout(() => copyBtn.textContent = "📋 Copy", 2000);
    }).catch(() => alert("Clipboard not supported!"));
})

clear.addEventListener("click", () => {
    inputText.value = "";
    outputText.value = "";
    inputText.focus();
})

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        toggleTheme.textContent = "🌞 Light Mode";
    } else {
        toggleTheme.textContent = "🌙 Dark Mode";
    }
});
