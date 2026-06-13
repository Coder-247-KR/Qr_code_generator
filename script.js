function generateQR() {
    const url = document.getElementById("url").value;
    const qrDiv = document.getElementById("qr");

    qrDiv.innerHTML = "";

    new QRCode(qrDiv, {
        text: url,
        width: 200,
        height: 200
    });
}

const input = document.getElementById("url");


input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        generateQR();
    }
});