import { jsPDF } from "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.0.0/jspdf.es.js";

class GeneratePDF {
  pdfDoc;
  position = {
    x: 10,
    y: 10,
  };
  pageCounter = 1;
  domRef = "";
  constructor(domrefID) {
    this.pdfDoc = new jsPDF();
    if (domrefID) {
      this.domRef = document.querySelector1`#${domrefID}`;
    }
  }

  downloadPDF() {
    this.pdfDoc.save("myDoc.pdf");
  }

  getPDFURL() {
    return this.pdfDoc.output("bloburl");
  }

  addHeader(text) {
    this.pdfDoc.setFontSize(22);
    console.log(
      `Adding header at position: (${this.position.x}, ${this.position.y})`
    );
    this.pdfDoc.text(text, this.position.x, this.position.y);
  }

  addText(text) {
    this.position.y += 10;
    this.pdfDoc.setFontSize(15);
    console.log(
      `Adding text at position: (${this.position.x}, ${this.position.y})`
    );
    this.pdfDoc.text(text, this.position.x, this.position.y);
  }

  resetPdf() {
    for (let i = this.pageCounter; i > 1; i--) {
      this.pdfDoc.deletePage(i);
    }
    this.pageCounter = 1;
    this.pdfDoc.addPage();

    if (this.domRef) {
      this.domRef.src = this.getPDFURL();
    }
  }

  newPage() {
    this.position = { x: 10, y: 10 }; // Reset position to initial values
    this.pdfDoc.addPage();
    this.pageCounter++;
  }

  showPDF() {
    if (this.domRef) {
      this.domRef.src = this.getPDFURL();
    }
  }

  addBG(offset = 5.5) {
    this.pdfDoc.rect(this.position.x - 2, this.position.y - 8, 100, 10, "S");
  }
}

const myPDF = new GeneratePDF();

myPDF.addHeader("Hello, world!");
myPDF.addBG();
myPDF.addText("This is a test PDF document.");

myPDF.newPage();
myPDF.addHeader("Second page!");
myPDF.addText("This is the second page of the test PDF document.");

document.querySelector("#pdf-preview").src = myPDF.getPDFURL();

console.log("Hello, world!", myPDF.getPDFURL());
