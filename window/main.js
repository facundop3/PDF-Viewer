const {BrowserWindow} = require("electron");
const events = require(__dirname+"/events.js");

exports.init = (path) => {
  let mainWindow = new BrowserWindow({
    frame:false
  });
  mainWindow.loadURL(__dirname+"/View/index.html");
  mainWindow.on("close", () => {
    mainWindow=null;
  })
  events.init(path,mainWindow);
}
