// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    //设置透明...
    transparent: true,
    frame: false,
    resizable: false,
    webPreferences: {
      // devTools: false,
      nodeIntegration: true,
      enablemotemodule: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  //窗口最大化
  mainWindow.maximize()
  mainWindow.show()
  //窗口置顶
  mainWindow.setAlwaysOnTop(true)
  //鼠标穿透事件
  mainWindow.setIgnoreMouseEvents(true)
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
