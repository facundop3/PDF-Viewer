let fs = require('fs'),
PDFParser = require("pdf2json");

exports.saveJson=function(path){
  console.log("saveJson",path)
  let pdfParser = new PDFParser();
  pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
  pdfParser.on("pdfParser_dataReady", pdfData => {
  		fs.writeFile(path.replace(".pdf",".json"), JSON.stringify(pdfData));
  });
  pdfParser.loadPDF(path);
}
