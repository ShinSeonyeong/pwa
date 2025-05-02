const { app, BrowserWindow } = require('electron')
// path라이브러리는 경로를 다루는 라이브러리
const path = require('path'); // path, http라이브러리는 node에서 기본 제공
// http라이브러리는 웹서버를 동작시킬 때 사용하는 라이브러리

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true, // 필요 시 활성화
    },
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
