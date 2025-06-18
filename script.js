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

// Dom manipulation for the incrementing and decrementing buttons
let adder = document.createElement("button");
let suber = document.createElement("button");
let outpt = document.createElement("p");
let div1 = document.createElement("div");
let br = document.createElement("br");
const f = document.getElementsByTagName("footer")[0];

adder.textContent = "add";
suber.textContent = "sub";

adder.addEventListener("click", () => {
    outpt.textContent = Number(outpt.textContent) + 1;
});
suber.addEventListener("click", () => {
    outpt.textContent = Number(outpt.textContent) - 1;
});

f.getElementsByTagName("div")[0].appendChild(div1);
div1.appendChild(adder);
div1.appendChild(br);
div1.appendChild(outpt);
div1.appendChild(br);
div1.appendChild(suber);
div1.appendChild(br);
div1.style.display = "flex";
div1.style.width = "50%";
div1.style.justifyContent = "space-between";
outpt.style.fontSize = "2rem";
outpt.style.fontWeight = "bold";
