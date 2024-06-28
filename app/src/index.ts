import { app, BrowserWindow } from "electron";

const createWindow = () => {
  const win: BrowserWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("./app/html/index.html");
};

app.whenReady().then(() => {
  createWindow();
});
