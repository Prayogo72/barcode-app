// INPUT
const input = document.getElementById("barcodeInput");

// AUTO GENERATE BARCODE
input.addEventListener("input", () => {

  if(input.value.trim() !== ""){

    JsBarcode("#barcode", input.value, {
      format: "CODE128",
      lineColor: "#000",
      width: 2,
      height: 80,
      displayValue: true
    });

  }

});

// TOMBOL SCAN
document.getElementById("scanBtn")
.addEventListener("click", () => {

  const scanner = new Html5Qrcode("reader");

  scanner.start(
    { facingMode: "environment" },

    {
      fps: 10,
      qrbox: 250
    },

    (decodedText) => {

      document.getElementById("scanResult")
      .innerText = decodedText;

      input.value = decodedText;

      JsBarcode("#barcode", decodedText);

      scanner.stop();
    }

  );

});