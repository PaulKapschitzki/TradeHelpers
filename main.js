const { app, BrowserWindow } = require('electron');
const Store = require('./store');

// First instantiate the class
const store = new Store({
    // We'll call our data file 'user-preferences'
    configName: 'user-preferences_tradeHelpers',
    defaults: {
      // 800x600 is the default size of our window
      windowBounds: { width: 600, height: 950 }
    }
});

function createWindow () {
    // First we'll get our height and width. This will be the defaults if there wasn't anything saved
    let { width, height } = store.get('windowBounds');

    // create browser window.
    const win = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false
    })

    // The BrowserWindow class extends the node.js core EventEmitter class, so we use that API
    // to listen to events on the BrowserWindow. The resize event is emitted when the window size changes.
    win.on('resize', () => {
        // The event doesn't pass us the window size, so we call the `getBounds` method which returns an object with
        // the height, width, and x and y coordinates.
        let { width, height } = win.getBounds();
        // Now that we have them, save them using the `set` method.
        store.set('windowBounds', { width, height });
    });

    // and load the index.html of the app.
    win.loadFile('index.html')

    // win.once('ready-to-show', win.show)

    // Open DevTools.
    // win.webContents.openDevTools()

    // remove menu bar with false, show with true
    win.setMenuBarVisibility(true);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Einige APIs können nur nach dem Auftreten dieses Events genutzt werden.
app.whenReady().then(createWindow)

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

// In this file you can include the rest of your app's specific main process
// code. Sie können den Code auch 
// auf mehrere Dateien aufteilen und diese hier einbinden.
