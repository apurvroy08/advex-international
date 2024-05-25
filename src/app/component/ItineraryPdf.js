// import json2html from "json2html"
import jsPDF from "jspdf";

// Calculate the space needed for the entry content
const calculateSpaceNeeded = (pdf, entry) => {
  let spaceNeeded = 0;

  spaceNeeded += 6;
  spaceNeeded += pdf.getTextDimensions(`Day ${entry.day}`).h;

  [entry.title, entry.activity1, entry.activity2].forEach((text) => {
    if (text) {
      const lines = pdf.splitTextToSize(text, pdf.internal.pageSize.getWidth() - 20);
      spaceNeeded += lines.length * 6;
    }
  });

  spaceNeeded += 15;
  return spaceNeeded;
};

const addTextToPdf = (pdf, text, yOffset, marginLeft) => {
  const maxWidth = pdf.internal.pageSize.getWidth() - 2 * marginLeft;
  const lines = pdf.splitTextToSize(text, maxWidth);
  pdf.text(lines, marginLeft, yOffset);
  return yOffset + (lines.length * 6); // Adjust the factor as needed for line height
};

const ItineraryPdf = (itineraryData) => {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  let yOffset = 20;

  itineraryData.itineraryData.forEach((entry, index) => {

    const spaceNeeded = calculateSpaceNeeded(pdf, entry);
    if (yOffset + spaceNeeded > pdf.internal.pageSize.getHeight() - 20 && index > 0) {
      pdf.addPage();
      yOffset = 20; // Reset yOffset for the new page
    }
    // Add content to the PDF
    yOffset = addTextToPdf(pdf, `Day ${entry.day}`, yOffset, 10);
    yOffset += 5;
    yOffset = addTextToPdf(pdf, entry.title, yOffset, 10);
    yOffset += 5;
    yOffset = addTextToPdf(pdf, entry.activity1, yOffset, 10);
    yOffset += 2;
    if (entry.activity2) {
      yOffset = addTextToPdf(pdf, entry.activity2, yOffset, 10);
    }
    yOffset += 2;
    if (entry.stay) {
      yOffset = addTextToPdf(pdf, entry.stay, yOffset, 10);
    }

    // Add space between entries
    // pdf.setLineWidth(0.5);
    // pdf.line(10, yOffset + 5, pdf.internal.pageSize.getWidth() - 10, yOffset + 5);

    // // Increment yOffset for the next entry
    yOffset += 10;
  });

  pdf.save('Itinerary.pdf');
}

export default ItineraryPdf;