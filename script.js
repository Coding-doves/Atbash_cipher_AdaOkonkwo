const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const reverse = document.getElementById("reverseBtn");
const copy = document.getElementById("copyBtn");
const theme = document.getElementById("toggleTheme");
const clear = document.getElementById("clear");

let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
             'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
             'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let getHash = (alphabet = lowercase, index) => {
        let hash = 26 - alphabet.indexOf(index) - 1;
        return alphabet[hash];
}

inputText.addEventListener("input", function () {
    const plainText = inputText.value;
    let cipherText = "";

    for (let c of plainText) {
        if(uppercase.includes(c)) {
            cipherText += getHash(uppercase, c);
        } else if(lowercase.includes(c)) {
            cipherText += getHash(lowercase, c);
        } else {
            cipherText += c;
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
