const defaultSettings = {
    volume: 50,
    brightness: 70
  };
  
  const userSettings = {
    brightness: 90,
    theme: 'dark'
  };
  
  const settings = { ...defaultSettings, ...userSettings };
  
  console.log(settings);
  // { volume: 50, brightness: 90, theme: 'dark' }

  const a = 10;
  const b = {};
  