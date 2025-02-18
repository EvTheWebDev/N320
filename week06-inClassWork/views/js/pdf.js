import jsPDF from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";

const myDoc = new jsPDF();

function downloadPDF() {
  myDoc.text("Hello World", 10, 10);
  myDoc.save("myDoc.pdf");
}

function viewPDF() {
  myDoc.text("Hello World", 10, 10);
  const dataURL = myDoc.output("bloburl");
  console.log(dataURL);

  document.querySelector("#pdf-preview").src = dataURL + "#toolbar=0";
}

document.querySelector("#download-pdf").addEventListener("click", downloadPDF);
document.querySelector("#view-pdf").addEventListener("click", viewPDF);