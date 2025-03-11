import PDFGenerator from "./PDFGenerator.js";
let items = [];

let newCamera = {
  name: "New Camera",
  price: 149.99,
  quantity: 0,
};
let filmRoll = {
  name: "36 Exposure Film Roll",
  price: 9.99,
  quantity: 0,
};
let filmDeveloper = {
  name: "Film Developer",
  price: 14.99,
  quantity: 0,
};
let filmScans = {
  name: "Film Scans",
  price: 19.99,
  quantity: 0,
};

let alertBox = document.createElement("div");
alertBox.style.position = "fixed";
alertBox.style.top = "20px";
alertBox.style.right = "20px";
alertBox.style.backgroundColor = "#ffcc00";
alertBox.style.padding = "10px";
alertBox.style.border = "1px solid #ff9900";
alertBox.style.borderRadius = "5px";

let invoice; // Define the invoice variable outside the event listener

document.getElementById("invoiceForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the default form submission
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  items = [newCamera, filmDeveloper, filmRoll, filmScans].filter(
    (item) => item.quantity > 0
  );
  if (!name) {
    alertBox.innerText = "Please Enter your NAME!";
    document.body.appendChild(alertBox);
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 1000);
    return;
  } else if (!email) {
    alertBox.innerText = "Please Enter your EMAIL!";
    document.body.appendChild(alertBox);
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 1000);
    return;
  } else if (items.length === 0) {
    alertBox.innerText = "No Items In Cart!";
    document.body.appendChild(alertBox);
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 1000);
    return;
  } else {
    console.log("Form submitted");
    alertBox.innerText = "Thank you!";
    document.body.appendChild(alertBox);
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 750);
    //PDF TIME
    invoice = new PDFGenerator("Invoice"); // Assign the invoice variable here
    invoice.addHeader("Ev's Emporium");
    invoice.addText(`Name: ${name}`);
    invoice.addText(`Email: ${email}`);
    invoice.addText(`Date: ${new Date().toLocaleDateString()}`);
    invoice.addText("");
    items.forEach((item) => {
      invoice.addText(`${item.name} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`);
    });
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = total * 0.07;
    const finalTotal = total + tax;
    invoice.addText("");
    invoice.addText(`Total (before tax): $${total.toFixed(2)}`);
    invoice.addText(`Tax: $${tax.toFixed(2)}`);
    invoice.addText(`Final Total: $${finalTotal.toFixed(2)}`);
    invoice.addText("Thank you for shopping with us!");

    //Print PDF to HTML
    const pdfPreview = document.getElementById("pdf-preview");
    pdfPreview.src = (invoice.getPdfUrl() + "#toolbar=0");

    // Show the download button
    const downloadButton = document.getElementById("downloadPdf");
    downloadButton.style.display = "block";
    downloadButton.onclick = () => {
      invoice.savePDF("invoice.pdf");
    };
  }
});

//Item Count Listeners
document.getElementById("newCamera").onclick = function () {
  newCamera.quantity++;
  alertBox.innerText = "New Camera Added to Cart!";
  document.body.appendChild(alertBox);
  setTimeout(() => {
    document.body.removeChild(alertBox);
  }, 750);
};
document.getElementById("filmDeveloper").onclick = function () {
  filmDeveloper.quantity++;
  alertBox.innerText = "Film Developer Added to Cart!";
  document.body.appendChild(alertBox);
  setTimeout(() => {
    document.body.removeChild(alertBox);
  }, 750);
};
document.getElementById("filmRoll").onclick = function () {
  filmRoll.quantity++;
  alertBox.innerText = "Film Roll Added to Cart!";
  document.body.appendChild(alertBox);
  setTimeout(() => {
    document.body.removeChild(alertBox);
  }, 750);
};
document.getElementById("filmScans").onclick = function () {
  filmScans.quantity++;
  alertBox.innerText = "Film Scans Added to Cart!";
  document.body.appendChild(alertBox);
  setTimeout(() => {
    document.body.removeChild(alertBox);
  }, 750);
};